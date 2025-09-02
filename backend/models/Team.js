import mongoose from "mongoose"

const TeamSchema = mongoose.Schema(
    {
        name: String,
        designation: String,
        profile: String,
        description: String,
        adminApproval: {type: Boolean, default:false}
    },
    {timestamps: true}
)

const TeamModel = mongoose.model("Team", TeamSchema)

export default TeamModel