import mongoose from "mongoose";

const WorkshopSchema = mongoose.Schema(
    {
        title: String,
        facilitator: String,
        date: Date,
        workshopImage: String,
        status: {type: String, enum: ["Draft", "Active", "Cancelled"], default: "Draft"}
    },
    { timestamps: true }
)

const WorkshopModel = mongoose.model("Workshops", WorkshopSchema)

export default WorkshopModel;