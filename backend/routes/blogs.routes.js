import express from "express"
import { GetAllBlogs, GetSpecificBlog, UploadBlog } from "../controllers/blogs.controllers.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/upload", upload.single("thumbnail"), UploadBlog)
router.get("/get-all-blogs", GetAllBlogs)
router.get("/specific-blog/:id", GetSpecificBlog)

export default router