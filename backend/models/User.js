import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    profile: String,
    isVerified: {type: Boolean, default: false},
    otp: String,
    otpExpiry: Date
})

const UserModel = mongoose.model("Users", UserSchema)

export default UserModel