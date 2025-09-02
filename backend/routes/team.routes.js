import express from "express";
import upload from "../middlewares/multer.js";
import { AddTeamMember, DeleteMember, GetSpecificMember, GetTeamMembers, UpdateMemberDetails } from "../controllers/team.controller.js";

const router = express.Router();

router.post("/add-member", upload.single("profile"), AddTeamMember)
router.get("/get-team-members", GetTeamMembers)
router.get("/get-team-member/:id", GetSpecificMember)
router.put("/update-member-details/:id", upload.single("profile"), UpdateMemberDetails)
router.delete("/delete-member/:id", DeleteMember)

export default router