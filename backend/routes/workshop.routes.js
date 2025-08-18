import express from "express"
import { AddWorkshop, ChangeStatus, DeleteWorkshop, GetAllWorkshops, GetSpecificWorkshop, SaveAsDraft, UpdateWorkshop } from "../controllers/workshop.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/upload", upload.single("workshopImage"), AddWorkshop)
router.post("/save-as-draft", upload.single("workshopImage"), SaveAsDraft)
router.get("/get-all-workshop", GetAllWorkshops)
router.get("/get-workshop/:id", GetSpecificWorkshop)
router.put("/update/:id", upload.single("workshopImage"), UpdateWorkshop)
router.put("/change-status/:id", ChangeStatus)
router.delete("/delete/:id", DeleteWorkshop)

export default router