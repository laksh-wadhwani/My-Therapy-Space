import jwt from "jsonwebtoken"
import AdminModel from "../Models/Admin.js"
import GenerateOTP from "../utils/OtpGenerator.js"
import { decryptPassword, encryptPassword } from "../utils/bcrypt.js"

export const SignUp = async (request, response) => {
    try {
        const { fullname, email, password, secretKey } = request.body
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
                role: "super_admin",
                isSuperAdminVerified: true,
                otp,
                otp_expiry
            });
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
            otp,
            otp_expiry
        });
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
            return response.status(200).json({message: "Account verified successfully as Super Admin"})
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

        const token = jwt.sign(
            {id: userCheck.id, role: userCheck.role},
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN || "1d"}
        )

        return response.status(200).json({
            message: "Login Successful",
            token,
            user: userCheck
        })


    } catch (error) {
        console.log("Getting error in logging in admin: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}