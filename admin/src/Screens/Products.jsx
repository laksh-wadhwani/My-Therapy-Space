import React, { useState, useEffect } from "react";
import CustomButton from "../Components/CustomButton";
import { Modal } from 'react-responsive-modal';
import CustomInput from "../Components/CustomInput";
import CustomSearchBar from "../Components/CustomSearchBar";
import CustomTextArea from "../Components/CustomTextArea";
import CustomEditor from "../Components/CustomEditor";
import { BackendURL } from "../BackendContext";
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import CustomFileUpload from "../Components/CustomFileUpload";
import axios from "axios";

const Products = ({ isSidebarHovered }) => {

    const URL = BackendURL();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [productDetails, setProductDetails] = useState({
        name: "",
        price: 0,
        thumbnail: null,
        pictures: [],
        description: "",
        features: ""
    })

    useEffect(() => {
        axios.get(`${URL}/api/products/get-all-products`)
            .then(response => setProducts(response.data))
            .catch(error => console.error("Getting error in fetching product details: ", error))
    })

    const handleChange = (name, value) => {
        setProductDetails(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const AddProduct = () => {
        const ProductsData = new FormData();
        Object.entries(productDetails).forEach(([key, value]) => {
            if (Array.isArray(value))
                value.forEach((file) => ProductsData.append(key, file)); // Handles multiple image files
            else if (value instanceof File)
                ProductsData.append(key, value); //Handles single upload
            else
                ProductsData.append(key, value); //Handles text fields
        });
        setLoading(true)
        axios.post(`${URL}/api/products/add-product`, ProductsData)
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate(0) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in adding product: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => { setLoading(false) })
    }

    return (
        <React.Fragment>

            <div className={`transition-all duration-300 ${isSidebarHovered ? "w-[82%]" : "w-[94%]"} flex flex-col gap-8 pb-12`}>

                <div className="w-full p-4 mt-6 border-b border-gray-200 flex flex-col gap-2">
                    <h1 className="font-serf text-4xl font-bold text-black capitalize italic">Manage Products</h1>
                    <p className="font-serif text-gray-500 text-base italic">Create, edit and manage product listings for your website</p>
                </div>

                <div className="w-full px-4 pr-16 flex justify-between">
                    <CustomButton onClick={() => setOpen(true)}>add new product</CustomButton>
                    <CustomSearchBar placeholder="Search" />
                </div>

                {(products.length === 0) ? (<p className="font-serif text-3xl italic capitalize text-center font-semibold">no products has been uploaded</p>) :
                    (
                        <div className="w-full px-4 flex flex-wrap gap-16">
                            {products.map(product => (
                                <Link to={`/product/${product._id}`}><div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-between pb-4 cursor-pointer hover:scale-105" key={product._id}>
                                    <img src={product.thumbnail} alt="Product Picture" className="w-full h-[70%] object-cover rounded-t-xl" />
                                    <div className="flex flex-col items center">
                                        <h5 className="font-serif text-black text-xl font-semibold text-center">{product.name}</h5>
                                        <p className="font-serif text-gray-500 text-center text-base">${product.price}</p>
                                    </div>
                                </div></Link>
                            ))}
                        </div>
                    )}

            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { padding: '0', borderRadius: ".8rem" } }}>

                <div className="w-full flex flex-col gap-4 w-3xl box-border pb-6">

                    <h5 className="font-serif text-xl capitalize text-white font-semibold italic bg-[#00BFA6] shadow-lg p-6">add new product</h5>

                    <div className="w-full flex flex-col gap-4 px-6">
                        <CustomInput label="product name" placeholder="Name" type="text" value={productDetails.name} onChange={e => handleChange("name", e.target.value)} />
                        <CustomInput label="price" type="number" placeholder="Price" value={productDetails.price} onChange={e => handleChange("price", e.target.value)} />
                        <CustomFileUpload label="Thumbnail" value={productDetails.thumbnail} onChange={file => handleChange("thumbnail", file)} />
                        <CustomFileUpload label="Product Pictures" multiple value={productDetails.pictures} onChange={files => handleChange("pictures", files)} />
                        <CustomTextArea label="description" placeholder="Enter Short Description for Product" maxWords={100} value={productDetails.description} onChange={e => handleChange("description", e.target.value)} />
                        <CustomEditor value={productDetails.features} onChange={value => handleChange("features", value)} />
                    </div>

                    <div className="w-full px-6 flex justify-center gap-2">
                        <CustomButton onClick={AddProduct} disabled={loading}>
                            {loading ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "add product"}
                        </CustomButton>
                    </div>

                </div>

            </Modal>

        </React.Fragment>
    )
}

export default Products