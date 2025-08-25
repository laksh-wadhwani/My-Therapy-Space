import uploadToCloudinary from "../config/cloudinary.js";
import { transporter } from "../config/mailer.js";
import UserModel from "../models/User.js";
import { decryptPassword, encryptPassword } from "../utils/bcrypt.js";
import { verifyAccountOtpTemplate } from "../utils/emailTemplates.js";
import GenerateOTP from "../utils/OtpGenerator.js";

export const Signup = async (request, response) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = await UserModel.findOne({ email })

        if (!user)
            return response.status(400).json({ error: "User already exists" })

        let profile = null
        if (request.file)
            profile = await uploadToCloudinary(request.file.buffer, "image")

        const hashPassword = await encryptPassword(password)
        const otp = GenerateOTP();
        const otpExpiry = new Date(Date.now() + 2 * 60 * 1000)


        const newUser = new UserModel({
            firstName,
            lastName,
            email,
            password: hashPassword,
            otp,
            otpExpiry
        })

        await transporter.sendMail({
            from: `"My Therapy Space" <no-reply@mytherapyspace.com.au>`,
            to: email,
            subject: "Your OTP for My Therapy Space",
            html: verifyAccountOtpTemplate(firstNamem, otp)
        })

        await newUser.save();
        return response.status(201).json({ message: "OTP Sent. Please verify to complete registration" })
    } catch (error) {
        console.log("Getting error in signing up: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const verifyOtp = async(request, response) => {
    try {
        const {email} = request.params
        const {otp} = request.body
        const user = await UserModel.findOne({email})

        if(!user)
            return response.status(400).json({error: "User not found"})

        if(otp === user.otp){
            user.otp = null;
            user.otp_expiry = null
            user.isVerified = true
            await user.save()
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
        const userCheck = await UserModel.findOne({email})
        const isMatch = await decryptPassword(password, userCheck.password)

        if(!userCheck)
            return response.status(404).json({error: "User not found"})

        if(!isMatch)
            return response.status(401).json({error: "Invalid Credentials"})

        const token = jwt.sign(
            {
                id: userCheck.id, 
                firstName: userCheck.firstName, 
                profile: userCheck.profile
            },
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES_IN || "1d"}
        )

        return response.status(200).json({
            message: "Login Successful",
            token,
            user: userCheck
        })


    } catch (error) {
        console.log("Getting error in logging in user: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const ForgetPassword = async(request, response) => {
    try {
        const { email } = request.body
        const user = await UserModel.findOne({email})
        

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
            html: forgotPasswordWithNewPasswordTemplate(user.firstName, tempPassword)
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
        const {firstName, lastName, email, password, newPass} = request.body
        let profile = null
        if(request.file)
            profile = await uploadToCloudinary(request.file.buffer, "image")

        const user = await UserModel.findById(id)

        const isPassMatch = await decryptPassword(password, user.password)
        const newHashPass = await encryptPassword(newPass)


        if(!user)
            return response.status.json({error: "User not found"})

        if(firstName) user.firstName = firstName;
        if(lastName) user.lastName = lastName;
        if(email) user.email = email
        if(profile !== null) user.profile = profile.secure_url
        if(isPassMatch) user.password = newHashPass
        await user.save();
        return response.status(201).json({message: "Basic details have been updated"})
        
    } catch (error) {
        console.log("Getting error in updating user: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}