import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const uploadToCloudinary = fileBuffer => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream((error, result) => {
            if(error){
                console.log("Error in Uploading to cloudinaty")
                reject(error)
            }
            else resolve(result.secure_url)
        }).end(fileBuffer)
    })
}

export default uploadToCloudinary