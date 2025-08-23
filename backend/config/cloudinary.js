import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

const uploadToCloudinary = (fileBuffer, resourceType = "auto") => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            {resource_type: resourceType},
            (error, result) => {
                if(error){
                    console.log("Getting error in uploading file to cloudinary: ",error)
                    return reject(error)
                }
                return resolve(result.secure_url)
            }
        ).end(fileBuffer)
    })
}

export default uploadToCloudinary