import express from "express"
import { AddToCart, DeleteProduct, GetCartDetails} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/add-to-cart/:userID/:productID", AddToCart)
router.get("/get-cart-details/:id", GetCartDetails)
router.delete("/delete/:cartID/:itemID", DeleteProduct)

export default router