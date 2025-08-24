import express from "express"
import upload from "../middlewares/multer.js";
import { AddCourse, DeleteCourse, GetCourses, GetSpecificCourses, UpdateCourse } from "../controllers/courses.controller.js";

const router = express.Router();

router.post("/add-course", 
    upload.fields([
    {name: "thumbnail", maxCount:1},
    {name: "video", maxCount:1},
]), AddCourse)
router.get("/get-courses", GetCourses)
router.get("/get-specific-course/:id", GetSpecificCourses)
router.post("/updated-course/:id", 
    upload.fields([
    {name: "thumbnail", maxCount:1},
    {name: "trailer", maxCount:1},
    {name: "video", maxCount:1},
]), UpdateCourse)
router.delete("/delete-course/:id", DeleteCourse)

export default router