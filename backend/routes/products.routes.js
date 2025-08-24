import express from "express"
import { AddProducts, DeleteProduct, GetAllProducts, GetSpecificProduct, UpdateProduct } from "../controllers/products.controller.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/add-product", 
    upload.fields([
        {name: "thumbnail", maxCount:1},
        {name: "pictures", maxCount:5}
    ]), AddProducts)
router.get("/get-all-products", GetAllProducts)
router.get("/get-specific-product/:id", GetSpecificProduct)
router.put("/update-product/:id", 
    upload.fields([
        {name: "thumbnail", maxCount:1},
        {name: "pictures", maxCount:5}
    ]), UpdateProduct)
router.delete("/delete-product/:id", DeleteProduct)

export default router