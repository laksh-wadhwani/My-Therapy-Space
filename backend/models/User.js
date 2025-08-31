import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        fullname: String,
        email: String,
        phoneNo: String,
        address: String,
        password: String,
        profile: String,
        isVerified: {type: Boolean, default: false},
        otp: String,
        otpExpiry: Date
    },
    {timestamps: true}
)

const UserModel = mongoose.model("Users", UserSchema)

export default UserModel