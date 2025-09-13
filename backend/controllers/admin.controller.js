import jwt from "jsonwebtoken"
import GenerateOTP from "../utils/OtpGenerator.js"
import { decryptPassword, encryptPassword } from "../utils/bcrypt.js"
import { adminApprovalEmailTemplate, forgotPasswordWithNewPasswordTemplate, otpEmailTemplate, rejectAdminEmailTemplate } from "../utils/emailTemplates.js"
import { transporter } from "../config/mailer.js"
import uploadToCloudinary from "../config/cloudinary.js"
import AdminModel from "../models/Admin.js"
import { generateTempPassword } from "../utils/passwordGenerator.js"
import PaymentModel from "../models/Payment.js"
import BlogsModel from "../models/Blogs.js"
import WorkshopModel from "../models/Workshop.js"
import QueryModel from "../models/Query.js"
import BookingModel from "../models/Bookings.js"
import TeamModel from "../models/Team.js"

export const SignUp = async (request, response) => {
    try {
        const { fullname, email, password, secretKey } = request.body
        let profile = null
        if(request.file)
            profile = await uploadToCloudinary(request.file?.buffer, "image")
        const secret = secretKey === process.env.SECRET_KEY
        const otp = GenerateOTP();
        const otp_expiry = new Date(Date.now() + 2 * 60 * 1000)
        const hashPassword = await encryptPassword(password)
        const totalAdmins = await AdminModel.countDocuments()
        const adminCheck = await AdminModel.findOne({ email })

        if (!secret)
            return response.status(401).json({ error: "Invalid Key" });

        if (adminCheck)
            return response.status(409).json({ error: "Email already registered" });

        if (totalAdmins === 0) {
            const super_admin = new AdminModel({
                fullname,
                email,
                password: hashPassword,
                profile: profile.secure_url,
                role: "super admin",
                isSuperAdminVerified: true,
                otp,
                otp_expiry
            });

            await transporter.sendMail({
                from: `My Therapy Space <${process.env.SMTP_MAIL}>`,
                to: email,
                subject: "Your OTP for My Therapy Space as a Super Admin",
                html: otpEmailTemplate(fullname, otp)
            })

            await super_admin.save();

            return response.status(200).json({
                message: "OTP Sent. Please verify to complete registration. You are going to be a Super Admin",
                superAdmin: super_admin
            });
        }

        const newAdmin = new AdminModel({
            fullname,
            email,
            password: hashPassword,
            profile,
            otp,
            otp_expiry
        });

        await transporter.sendMail({
            from: `My Therapy Space <${process.env.SMTP_MAIL}>`,
            to: email,
            subject: "Your OTP for My Therapy Space as a Admin",
            html: otpEmailTemplate(fullname, otp)
        })

        await newAdmin.save();
    
        return response.status(200).json({
            message: "OTP Sent. Please verify to complete registration",
            newAdmin
        });

    } catch (error) {
        console.log("Getting error in signing up admin:", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const verifyOtp = async(request, response) => {
    try {
        const {email} = request.params
        const {otp} = request.body
        const check = await AdminModel.findOne({email})

        if(!check)
            return response.status(404).json({error: "Admin account not found"})

        if(otp === check.otp){
            check.otp = null;
            check.otp_expiry = null
            check.isVerified = true
            await check.save()
            return response.status(200).json({message: "Account verified successfully"})
        }

        return response.status(400).json({error: "Invalid OTP"})
        
    } catch (error) {
        console.log(error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const Login = async(request, response) => {
    try {
        const {email, password} = request.body
        const userCheck = await AdminModel.findOne({email})
        const isMatch = await decryptPassword(password, userCheck.password)

        if(!userCheck)
            return response.status(404).json({error: "User not found"})

        if(!isMatch)
            return response.status(401).json({error: "Invalid Credentials"})

        if(userCheck.isSuperAdminVerified===false){
            return response.status(401).json({error: "Please wait for Super Admin's Approval"})
        }

        const token = jwt.sign(
            {
                id: userCheck.id, 
                role: userCheck.role, 
                fullname: userCheck.fullname, 
                profile: userCheck.profile
            },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN || "1d"}
        )

        return response.status(200).json({
            message: "Login Successful",
            token,
        })


    } catch (error) {
        console.log("Getting error in logging in admin: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetAdmins = async(request, response) => {
    try {
        const admins = await AdminModel.find({role: "admin", isSuperAdminVerified: false})
        if(!admins) 
            return response.json({message: "No Approvals Pending"})
        return response.status(200).json(admins)
    } catch (error) {
        console.log("Getting error in admins data")
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const ApproveAdmin = async(request, response) => {
    try {
        const { id } = request.params;
        const admin = await AdminModel.findById(id)

        if(!admin)
            return response.status(404).json({error: "User not found"})

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: admin.email,
            subject: "Your Admin Account Has Been Approved 🎉",
            html: adminApprovalEmailTemplate(admin.fullname)
        })
        admin.isSuperAdminVerified=true
        await admin.save();
        return response.status(200).json({message: "Admin has been approved"})
    } catch (error) {
        console.log("Getting error in approving admins request", error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const RejectAdmin = async(request, response) => {
    try {
        const { id } = request.params
        const { remarks } = request.body
        const admin = await AdminModel.findById(id)

        if(!admin)
            return response.status(400).json({error: "User Not Found"})

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: admin.email,
            subject: "Your Admin Account Has Been Rejected",
            html: rejectAdminEmailTemplate(admin.fullname, remarks)
        })

        await AdminModel.findByIdAndDelete(id);

        return response.status(201).json({message: "Admin has been rejected"})

    } catch (error) {
        console.log("Getting error in while rejecting the admin: ", error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const ForgetPassword = async(request, response) => {
    try {
        const { email } = request.body
        const user = await AdminModel.findOne({email})
        

        if(!user)
            return response.status(400).json({error: "User not found"})

        const tempPassword = generateTempPassword();
        const hashPass = await encryptPassword(tempPassword)
        user.password = hashPass
        await user.save();

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: email,
            subject: "Your New Temporary Password 🔑",
            html: forgotPasswordWithNewPasswordTemplate(user.fullname, tempPassword)
        })

        return response.status(201).json({message: "New Password sent to your email"})

    } catch (error) {
        console.log("Getting error in forgetting password: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const Update = async(request, response) => {
    try {
        const { id } = request.params
        const {fullname, email, password, newPass} = request.body
        let profile = null
        if(request.file)
            profile = await uploadToCloudinary(request.file.buffer, "image")

        const admin = await AdminModel.findById(id)

        const isPassMatch = await decryptPassword(password, admin.password)
        const newHashPass = await encryptPassword(newPass)


        if(!admin)
            return response.status.json({error: "User not found"})

        if(fullname) admin.fullname = fullname;
        if(email) admin.email = email
        if(profile) admin.profile = profile.secure_url
        if(isPassMatch) admin.password = newHashPass
        await admin.save();

        const token = jwt.sign(
            {
                id: admin.id, 
                role: admin.role, 
                fullname: admin.fullname, 
                profile: admin.profile,
                email: admin.email
            },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN || "1d"}
        )

        return response.status(201).json({
            message: "Basic details have been updated",
            token
        })
        
    } catch (error) {
        console.log("Getting error in updating user: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetProductDetails = async(request, response) => {
    try {
        const products = await PaymentModel.find()
            .populate("productID")
            .populate("courseID")
            .populate("userId")

        if(!products)
            return response.status(400).json({error: "No products found"})

        let formattedDetails = products.map(item => {

            if(item.productID){
                return{
                    orderID: item._id,
                    userName: item.userId.fullname,
                    productName: item.productID.name,
                    price: `$ ${item.productID.price}`,
                    createdAt: item.createdAt,
                    thumbnail: item.productID.thumbnail,
                    pickupLocation: item.pickupLocation,
                    type: "Product"
                }
            }

            else if(item.courseID){
                return{
                    orderID: item._id,
                    userName: item.userId.fullname,
                    productName: item.courseID.name,
                    price: `$ ${item.courseID.price}`,
                    createdAt: item.createdAt,
                    course: item.courseID.video,
                    type: "Course"
                }
            }
        })

        return response.status(201).json(formattedDetails)

    } catch (error) {
        console.log("Getting error in fetching product details: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const BasicAnalytics = async(request, response) => {
    try {
        const totalBlogs = await BlogsModel.countDocuments();
        const totalWorkshops = await WorkshopModel.countDocuments();
        const totalQueries = await QueryModel.countDocuments();
        const totalBookings = await BookingModel.countDocuments();
        const totalTeamMembers = await TeamModel.countDocuments();
        const totalProductsBought = await PaymentModel.countDocuments();

        return response.status(200).json({
            totalBlogs,
            totalWorkshops,
            totalQueries,
            totalBookings,
            totalTeamMembers,
            totalProductsBought
        })

    } catch (error) {
        console.log("Getting error in fetching basic analytics: ", error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}