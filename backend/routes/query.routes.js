import express from "express"
import { DeleteQuery, GetAllQueries, GetSpecificQuery, ReplyQuery, SendQuery } from "../controllers/query.controller.js";

const router = express.Router();

router.post("/send-query", SendQuery)
router.get("/get-queries", GetAllQueries)
router.get("/get-specific-query", GetSpecificQuery)
router.put("/reply-query/:id", ReplyQuery)
router.delete("/delete-query/:id", DeleteQuery)

export default router