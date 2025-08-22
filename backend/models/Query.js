import mongoose from "mongoose";

const QuerySchema = mongoose.Schema(
    {
        guardianName: String,
        childName: String,
        phoneNo: String,
        email: String,
        subject: String,
        message: String,
        reply: String,
        status: {type: String, enum: ["Pending", "Answered"], default: "Pending"}
    },
    { timestamps: true }
)

const QueryModel = new mongoose.model("Queries", QuerySchema)

export default QueryModel