import React, { useEffect, useState } from "react";
import { BackendURL } from "../BackendContext"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import CustomButton from "../Components/CustomButton";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { toast } from "react-toastify";
import CustomInput from "../Components/CustomInput";
import CustomFileUpload from "../Components/CustomFileUpload";
import CustomEditor from "../Components/CustomEditor";
import CustomTextArea from "../Components/CustomTextArea";

const SpecificProduct = ({ isSidebarHovered }) => {
    const { id } = useParams();
    const URL = BackendURL();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)
    const [updating, setUpdating] = useState(false)
    const [update, setIsUpdate] = useState(false) 
    const [product, setProduct] = useState(null)
    const [thumbnailImage, setThumbnailImage] = useState(null)
    const [features, setFeatures] = useState("")
    const [productDetails, setProductDetails] = useState({
        name: "",
        price: 0,
        description: "",
        thumbnail: null,
        pictures: [],
    })

    useEffect(() => {
        axios.get(`${URL}/api/products/get-specific-product/${id}`)
            .then(response => {
                setProduct(response.data)
                setThumbnailImage(response.data.thumbnail) 
                setFeatures(response.data.features)
            })
            .catch(error => console.error("Getting error in fetching specific product details: ", error))
            .finally(() => setLoading(false))
    }, [id, URL])

    const handleChange = (name, value) => {
        setProductDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const UpdateProduct = productId => {
        const ProductsData = new FormData();
        Object.entries(productDetails).forEach(([key, value]) => {
            if (Array.isArray(value))
                value.forEach((file) => ProductsData.append(key, file)); // Handles multiple image files
            else if (value instanceof File)
                ProductsData.append(key, value); //Handles single upload
            else
                ProductsData.append(key, value); //Handles text fields
        });
        ProductsData.append("features", features) //Appending Features from text editor
        
        setUpdating(true)
        axios.put(`${URL}/api/products/update-product/${productId}`, ProductsData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in adding product: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => { setUpdating(false) })
    }

    const DeleteProduct = productId => {
        axios.delete(`${URL}/api/products/delete-product/${productId}`)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(`/manage-products`)},2500)
        })
        .catch(error => {
            console.log("Getting error in deleting product: ",error)
            return toast.error(error.response?.data?.error)
        })
    }

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center h-screen">
                <p className="text-lg font-serif text-gray-500 italic text-center">
                    Loading Product...
                </p>
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 items-center px-8 pb-12`}>

                {update? (
                    <div className="w-full flex flex-col gap-4 px-32 mt-16">
                        <CustomInput label="Title" placeholder={product.name} value={productDetails.name} onChange={e => handleChange("name", e.target.value)}/>
                        <CustomInput label="Price" placeholder={product.price} value={productDetails.price} onChange={e => handleChange("price", e.target.value)}/>
                        <CustomFileUpload label="Thumbnail" value={productDetails.thumbnail} onChange={file => handleChange("thumbnail", file)}/>
                        <CustomFileUpload label="Pictures" value={productDetails.pictures} onChange={files => handleChange("pictures", files)}/>
                        <CustomTextArea label="description" placeholder={product.description} maxWords={100} value={productDetails.description} onChange={e => handleChange("description", e.target.value)}/>
                        <CustomEditor value={features} onChange={value => setFeatures(value)}/>

                        <div className="w-full flex justify-around" disabled={updating}>
                            <CustomButton className="w-[30%] bg-blue-500" onClick={() => UpdateProduct(product._id)}>
                                {updating ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "save"}
                            </CustomButton>
                            <CustomButton className="w-[30%] bg-red-500" onClick={() => setIsUpdate(false)}>Cancel</CustomButton>
                        </div>
                    </div>
                )
                :
                (
                    <>
                    <div className="w-full flex justify-around mt-16">
                        <img  src={thumbnailImage} alt="Main Product"  className="w-[47.5%] max-h-[400px] rounded-xl shadow-md object-cover" />

                        <div className="w-[50%] flex flex-col justify-between p-6 border border-gray-300 rounded-xl shadow-xl">
                            <div className="w-full flex flex-col font-serif text-black capitalize">
                                <h3 className="text-3xl font-semibold">{product.name}</h3>
                                <span className="text-xl"> Price: ${product.price}</span>
                            </div>
                            <p className="font-serif text-lg text-black">{product.description}</p>
                            <div className="w-full flex justify-between">
                                <CustomButton className="w-[45%]" onClick={() => setIsUpdate(true)}>Update</CustomButton>
                                <CustomButton className="w-[45%]" onClick={() => DeleteProduct(product._id)}>Delete</CustomButton>
                            </div>
                        </div>
                    </div>

                    {product.pictures?.length > 0 && (
                        <div className="w-full grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
                            {product.pictures.map((pic, index) => (
                                <img 
                                    key={index} 
                                    src={pic} 
                                    alt={`Product ${index}`} 
                                    className={`h-32 w-full object-cover rounded-md shadow cursor-pointer transition-all duration-200 hover:scale-105 ${thumbnailImage === pic ? "ring-4 ring-[#0BAFA6]" : ""}`}
                                    onClick={() => setThumbnailImage(pic)}
                                />
                            ))}
                        </div>
                    )}

                     <div className="w-full border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                        <h2 className="w-full font-serif text-center text-black text-3xl rounded-t-md bg-[#0BAFA6] capitalize p-6">Features</h2>
                        <div className="list-disc font-serif text-2xl text-black flex flex-col gap-2 px-10 py-6">
                            <ReactMarkdown
                                rehypePlugins={[rehypeRaw]}
                                components={{
                                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold text-[#0BAFA6]" {...props} />,
                                    h2: ({node, ...props}) => <h2 className="text-2xl font-semibold text-[#15b7ac]" {...props} />,
                                    h3: ({node, ...props}) => <h3 className="text-xl font-medium text-[#01b7ac]" {...props} />,
                                    ul: ({node, ...props}) => <ul className="list-disc ml-6" {...props} />,
                                    li: ({node, ...props}) => <li className="mb-1" {...props} />,
                                    span: ({node, style, ...props}) => <span style={style} {...props} />
                                }}
                            >
                                {features}
                            </ReactMarkdown>
                        </div>
                    </div>
                    </>
                )
                }
                
            </div>
        </React.Fragment>
    )
}

export default SpecificProduct;
