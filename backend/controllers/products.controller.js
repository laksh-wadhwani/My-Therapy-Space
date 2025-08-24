import uploadToCloudinary from "../config/cloudinary.js"
import ProductModel from "../models/Products.js"

export const AddProducts = async(request, response) => {
    try {
        const {name, price, description, features} = request.body
        const product = await ProductModel.findOne({name})

        if(product)
            return response.status(400).json({error: "This product already exists"})

        let thumbnail = null
        if(request.files?.thumbnail?.[0])
            thumbnail = await uploadToCloudinary(request.files.thumbnail[0].buffer)

        let pictures = []
        if(request.files?.pictures?.length > 0){
            for(const picture of request.files.pictures){
                const imageUrl = await uploadToCloudinary(picture.buffer)
                pictures.push(imageUrl)
            }
        }

        const newProducts = new ProductModel({
            name,
            price,
            description,
            features,
            thumbnail,
            pictures
        })
        newProducts.save();

        return response.status(200).json({message: "Product has been added successfully"})
    } catch (error) {
        console.log("Getting Error in adding products: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetAllProducts = async(request, response) => {
    try {
        const products = await ProductModel.find();

        if(!products)
            return response.status(400).json({error: "No Products have been found"})

        return response.status(200).json(products)
    } catch (error) {
        console.log("Getting error in fetching products: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const GetSpecificProduct = async(request, response) => {
    try {
        const { id } = request.params
        const product = await ProductModel.findById(id)

        if(!product)
            return response.status(400).json({error: "Product not found"})

        return response.status(200).json(product)
    } catch (error) {
        console.log("Getting error in fetching specific product: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const UpdateProduct = async(request, response) => {
    try {
        const {id} = request.params
        const {name, price, description, features} = request.body
        const product = await ProductModel.findById(id)

        if(!product)
            return response.status(400).json({error: "No Product found"})

       let thumbnail = null
        if(request.files?.thumbnail?.[0])
            thumbnail = await uploadToCloudinary(request.files.thumbnail[0].buffer)

        let pictures = []
        if(request.files?.pictures?.length > 0){
            for(const picture of request.files.pictures){
                const imageUrl = await uploadToCloudinary(picture.buffer)
                pictures.push(imageUrl)
            }
        }

        if(name)
            product.name = name
        if(price)
            product.price = price
        if(description)
            product.description = description
        if(features)
            product.features = features
        if(thumbnail !== null)
            product.thumbnail = thumbnail
        if(pictures.length > 0)
            product.pictures = pictures

        
        await product.save();

        return response.status(201).json({message: "Product details have been updated"})

    } catch (error) {
        console.log("Getting error in updating product details: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}

export const DeleteProduct = async(request, response) => {
    try {
        const { id } = request.params
        const product = await ProductModel.findByIdAndDelete(id)

        if(!product)
            return response.status(400).json({error: "Product not found"})

        return response.status(200).json({message: "Product has been deleted successfully"})
    } catch (error) {
        console.log("Getting error in deleting product: ",error)
        return response.status(500).json({error: "Internal Server Error"})
    }
}