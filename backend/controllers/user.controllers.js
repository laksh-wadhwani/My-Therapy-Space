import uploadToCloudinary from "../config/cloudinary.js";
import { transporter } from "../config/mailer.js";
import BookingModel from "../models/Bookings.js";
import PaymentModel from "../models/Payment.js";
import UserModel from "../models/User.js";
import { decryptPassword, encryptPassword } from "../utils/bcrypt.js";
import { verifyAccountOtpTemplate, forgotPasswordWithNewPasswordTemplate, otpEmailTemplate } from "../utils/emailTemplates.js";
import GenerateOTP from "../utils/OtpGenerator.js";
import jwt from "jsonwebtoken"
import { generateTempPassword } from "../utils/passwordGenerator.js";

export const Signup = async (request, response) => {
    try {
        const { fullname, email, password } = request.body;
        const user = await UserModel.findOne({ email })

        if (user)
            return response.status(400).json({ error: "User already exists" })

        const hashPassword = await encryptPassword(password)
        const otp = GenerateOTP();
        const otpExpiry = new Date(Date.now() + 2 * 60 * 1000)


        const newUser = new UserModel({
            fullname,
            email,
            password: hashPassword,
            otp,
            otpExpiry
        })

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: email,
            subject: "Your OTP for My Therapy Space",
            html: verifyAccountOtpTemplate(fullname, otp)
        })

        await newUser.save();
        return response.status(201).json({ 
            message: "OTP Sent. Please verify to complete registration",
            otpExpiry
        })
    } catch (error) {
        console.log("Getting error in signing up: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const ResendOTP = async (request, response) => {
    const { email } = request.params
    const { purpose } = request.body
    const otp = GenerateOTP();
    const otpExpiry = new Date(Date.now() + 2 * 60 * 1000)
    const user = await UserModel.findOne({ email })

    if (!user)
        return response.status(400).json({ error: "You are not registered. Please Signup first" })

    if(purpose === "signup" && user.isVerified === true)
        return response.status(200).json({message: "You are already verified. Please Login"})

    user.otp = otp;
    user.otpExpiry = otpExpiry
    await transporter.sendMail({
        from: `My Therapy Space <${process.env.SMTP_MAIL}>`,
        to: email,
        subject: "Your OTP for My Therapy Space",
        html: otpEmailTemplate(user.fullname, otp)
    })
    await user.save();
    return response.status(200).json({ 
        message: "OTP Sent Successfully",
        otpExpiry
    })
}

export const verifyOtp = async (request, response) => {
    try {
        const { email } = request.params
        const { otp } = request.body
        const otpEnterTime = new Date(Date.now())
        const user = await UserModel.findOne({ email })

        if (!user)
            return response.status(400).json({ error: "User not found" })

        if (otp === user.otp) {
             if (otpEnterTime > user.otpExpiry)
                return response.status(400).json({ error: "Your otp has been expired. Please request a new one !" })

            user.otp = null;
            user.otpExpiry = null
            user.isVerified = true
            await user.save()
            return response.status(200).json({ message: "Account verified successfully" })
        }

        return response.status(400).json({ error: "Invalid OTP" })

    } catch (error) {
        console.log(error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const Login = async (request, response) => {
    try {
        const { email, password } = request.body
        const userCheck = await UserModel.findOne({ email })

        if (!userCheck)
            return response.status(404).json({ error: "User not found" })

        const isMatch = await decryptPassword(password, userCheck.password)

        if (!isMatch)
            return response.status(401).json({ error: "Invalid Credentials" })

        if(!userCheck.isVerified)
            return response.status(400).json({error: "Please verify your account first"})

        const token = jwt.sign(
            {
                id: userCheck.id,
                fullname: userCheck.fullname,
                profile: userCheck.profile
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        )

        return response.status(200).json({
            message: "Login Successful",
            token
        })


    } catch (error) {
        console.log("Getting error in logging in user: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const ResetPassword = async (request, response) => {
    try {
        const { email } = request.params
        const { password } = request.body
        const user = await UserModel.findOne({ email })


        if (!user)
            return response.status(400).json({ error: "User not found" })

        const hashPass = await encryptPassword(password)
        user.password = hashPass
        await user.save();
        return response.status(201).json({ message: "Your password has been reset" })

    } catch (error) {
        console.log("Getting error in forgetting password: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const Update = async (request, response) => {
    try {
        const { id } = request.params
        const { fullname, email, phoneNo, address, currentPass, newPass } = request.body

        const user = await UserModel.findById(id)

        if (!user)
            return response.status.json({ error: "User not found" })

        const isPassMatch = await decryptPassword(currentPass, user.password)
        const newHashPass = await encryptPassword(newPass)

        if (fullname) user.fullname = fullname;
        if (email) user.email = email
        if (phoneNo) user.phoneNo = phoneNo
        if (address) user.address = address
        if (isPassMatch) user.password = newHashPass
        await user.save();

        const token = jwt.sign(
            {
                id: user.id,
                fullname: user.fullname,
                profile: user.profile
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        )

        return response.status(201).json({ 
            message: "Basic details have been updated",
            token 
        })

    } catch (error) {
        console.log("Getting error in updating user: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const ChangeProfile = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await UserModel.findById(id)

        if (!user)
            return response.status(400).json({ error: "No user found" })

        let profile = null
        if (request.file)
            profile = await uploadToCloudinary(request.file?.buffer, "image")

        if (profile !== null) user.profile = profile.secure_url

        await user.save();

        const token = jwt.sign(
            {
                id: user.id,
                fullname: user.fullname,
                profile: user.profile
            },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRES_IN || "1d" }
        )

        return response.status(201).json({ 
            message: "Profile picture has been uploaded",
            token 
        })
    } catch (error) {
        console.log("Getting error in uploading profile picture: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const GetSpecificUser = async (request, response) => {
    try {
        const { id } = request.params;
        const user = await UserModel.findById(id)

        if (!user)
            return response.status(400).json({ error: "User not found" })

        return response.status(201).json(user)
    } catch (error) {
        console.log("Getting error in fetching user data: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const BookingDetailsForUser = async(request, response) => {
    try {
        const {email} = request.params;
        const booking = await BookingModel.find({email})

        if(!booking)
            return response.status(400).json({error: "No bookings found"})

        return response.status(201).json(booking)
    } catch (error) {
        console.log("Getting error in fetching booking details of user: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetProductDetails = async(request, response) => {
    try {
        const { id } = request.params
        const products = await PaymentModel.find({userId: id})
            .populate("productID")
            .populate("courseID")

        if(!products)
            return response.status(400).json({error: "No products found"})

        let formattedDetails = products.map(item => {

            if(item.productID){
                return{
                    orderID: item._id,
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