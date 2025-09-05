import express from "express"
import { ChangeStatus, DeleteBlog, GetAllBlogs, GetSpecificBlog, SaveAsDraft, UpdateBlog, UploadBlog } from "../controllers/blogs.controllers.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/upload", upload.single("thumbnail"), UploadBlog)
router.post("/save-as-draft", upload.single("thumbnail"), SaveAsDraft)
router.get("/get-all-blogs", GetAllBlogs)
router.get("/specific-blog/:slug", GetSpecificBlog)
router.put("/update/:id", upload.single("thumbnail"), UpdateBlog)
router.delete("/delete/:id", DeleteBlog)
router.put("/change-status/:id", ChangeStatus)

export default router