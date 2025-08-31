import uploadToCloudinary from "../config/cloudinary.js";
import { transporter } from "../config/mailer.js";
import BookingModel from "../models/Bookings.js";
import UserModel from "../models/User.js";
import { decryptPassword, encryptPassword } from "../utils/bcrypt.js";
import { verifyAccountOtpTemplate } from "../utils/emailTemplates.js";
import GenerateOTP from "../utils/OtpGenerator.js";
import jwt from "jsonwebtoken"

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
        return response.status(201).json({ message: "OTP Sent. Please verify to complete registration" })
    } catch (error) {
        console.log("Getting error in signing up: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const verifyOtp = async (request, response) => {
    try {
        const { email } = request.params
        const { otp } = request.body
        const user = await UserModel.findOne({ email })

        if (!user)
            return response.status(400).json({ error: "User not found" })

        if (otp === user.otp) {
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
            token,
            user: userCheck
        })


    } catch (error) {
        console.log("Getting error in logging in user: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const ForgetPassword = async (request, response) => {
    try {
        const { email } = request.body
        const user = await UserModel.findOne({ email })


        if (!user)
            return response.status(400).json({ error: "User not found" })

        const tempPassword = generateTempPassword();
        const hashPass = await encryptPassword(tempPassword)
        user.password = hashPass
        await user.save();

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: email,
            subject: "Your New Temporary Password 🔑",
            html: forgotPasswordWithNewPasswordTemplate(user.firstName, tempPassword)
        })

        return response.status(201).json({ message: "New Password sent to your email" })

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
        return response.status(201).json({ message: "Basic details have been updated" })

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
        return response.status(201).json({ message: "Profile picture has been uploaded" })
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