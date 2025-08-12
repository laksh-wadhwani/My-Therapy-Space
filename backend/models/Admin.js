import mongoose from "mongoose";

const AdminSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    profile: String,
    role: {type: String, enum: ["super_admin", "admin"], default: "admin"},
    isVerified: {type: Boolean, default: false},
    isSuperAdminVerified: {type: Boolean, default: false},
    otp: String,
    otp_expiry: Date
})

const AdminModel = mongoose.model("admins", AdminSchema)

export default AdminModel