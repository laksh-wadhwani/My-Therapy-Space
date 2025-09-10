import CartModel from "../models/Cart.js";
import ProductModel from "../models/Products.js";
import CoursesModel from "../models/Courses.js";

export const AddToCart = async (request, response) => {
    try {
        const { userID, productID } = request.params;
        const { pickupLocation } = request.body || {}

        const isProductAlreadyExist = await CartModel.findOne({userID, productID: productID}) || await CartModel.findOne({userID, courseID: productID})
        if(isProductAlreadyExist)
            return response.status(400).json({error: "This product has already been in the cart"})

        const product = await ProductModel.findById(productID)
        if (product) {
            const newProduct = new CartModel({
                userID,
                productID: productID,
                pickupLocation
            })
            await newProduct.save();
            return response.status(201).json({ message: "Product has been added to the cart" })
        }

        const course = await CoursesModel.findById(productID)
        if (course) {
            const newCourse = new CartModel({
                userID,
                courseID: productID
            })
            await newCourse.save();
            return response.status(201).json({ message: "Course has been added to the cart" })
        }

    } catch (error) {
        console.log("Getting error in add to cart: ", error)
        return response.status(500).json({ error: "Internal Server Error" })
    }
}

export const GetCartDetails = async (request, response) => {
  try {
    const { id } = request.params;

    const cart = await CartModel.find({ userID: id })
      .populate("productID")
      .populate("courseID");

    if (!cart) {
      return response.status(400).json({ error: "No Products found" });
    }

    let totalPrice = 0;
    const formattedCart = cart.map(item => {
      if (item.productID) {
        totalPrice += item.productID.price;
        return {
          cartID: item._id,
          itemId: item.productID._id,
          title: item.productID.name,
          price: item.productID.price,
          thumbnail: item.productID.thumbnail,
          pickupLocation: item.pickupLocation,
          type: "product"
        };
      } 
      else if (item.courseID) {
        totalPrice += item.courseID.price;
        return {
          cartID: item._id,
          itemId: item.courseID._id,
          title: item.courseID.name,
          price: item.courseID.price,
          thumbnail: item.courseID.thumbnail,
          type: "course"
        };
      }
    });

    return response.status(200).json({
        items: formattedCart,
        totalPrice
    });

  } catch (error) {
    console.log("Getting error in fetching cart details: ", error);
    return response.status(500).json({ error: "Internal Server Error" });
  }
};

export const DeleteProduct = async(request, response) => {
    try {
        const { id } = request.params
        const cart = await CartModel.findByIdAndDelete(id)

        if(!cart)
            return response.status(400).json({error: "No Product found"})

        return response.status(200).json({message: "Product removed successfully"})
        
    } catch (error) {
        console.log("Getting error in deleting package: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}