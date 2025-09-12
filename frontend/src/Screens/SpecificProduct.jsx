import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import { BackendURL } from "../BackendContext";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import CustomButton from "../Components/CustomButton";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";

const SpecificProduct = ({ user }) => {

    const { id } = useParams();
    const URL = BackendURL();
    const navigate = useNavigate();
    const isSignedIn = (user && user.id) ? true : false
    const [loading, setLoading] = useState(true)
    const [carting, setCarting] = useState(false)
    const [open, setOpen] = useState(false)
    const [thumbnailImage, setThumbnailImage] = useState()
    const [product, setProduct] = useState({})
    const [pickupLocation, setPickupLocation] = useState("")

    useEffect(() => {
        axios.get(`${URL}/api/products/get-specific-product/${id}`)
            .then(response => {
                setProduct(response.data)
                setThumbnailImage(response.data.thumbnail)
            })
            .catch(error => console.log("Getting error in fetching specific product details: ", error))
            .finally(() => setLoading(false))
    }, [id, URL])

    const AddToCart = () => {

        if (!isSignedIn)
            return toast.error("Please Login First")

        setCarting(true)
        axios.post(`${URL}/api/cart/add-to-cart/${user.id}/${product._id}`, {pickupLocation})
            .then(response => {
                toast.success(response.data.message)
                setTimeout(() => { navigate(`/cart/${user.id}`) }, 2500)
            })
            .catch(error => {
                console.error("Getting error in adding to the cart: ", error)
                return toast.error(error.response?.data?.error)
            })
            .finally(() => setCarting(false))
    }

    if (loading) {
        return (
            <div className="w-full h-dvh flex justify-center items-center">
                <p className="font-serif text-xl italic text-gray-400">Loading Product.....</p>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="main-box bg-[#E0F4F5] gap-8 items-center">

                <div className="w-full flex flex-col md:flex-row gap-6 justify-around px-8 mt-24">
                    <img src={thumbnailImage} alt="Course Video Trailer" className="w-full md:w-[47.5%] max-h-[400px] h-auto rounded-xl shadow-md" />
                    <div className="w-full md:w-[50%] flex flex-col gap-5 justify-between p-6 border border-gray-300 rounded-xl shadow-xl bg-white">
                        <div className="w-full flex flex-col font-serif text-black capitalize">
                            <h3 className="text-2xl lg:text-3xl xl:text-4xl">{product.name}</h3>
                            <span className="text-base xl:text-xl"> Price: ${product.price}</span>
                        </div>
                        <p className="font-serif text-sm lg:text-base xl:text-lg xl:text-xl text-black">{product.description}</p>
                        <CustomButton onClick={() => setOpen(true)}>Add to Cart</CustomButton>
                    </div>
                </div>

                {product.pictures?.length > 0 && (
                    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 justify-between items-center mt-2 px-8">
                        {product.pictures.map((pic, index) => (
                            <img
                                key={index}
                                src={pic}
                                alt={`Product ${index}`}
                                className={`size-full object-cover rounded-md shadow cursor-pointer transition-all duration-200 hover:scale-105 ${thumbnailImage === pic ? "ring-4 ring-[#0BAFA6]" : ""}`}
                                onClick={() => setThumbnailImage(pic)}
                            />
                        ))}
                    </div>
                )}

                <div className="w-[90%] lg:w-[95%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-2 bg-white">
                    <h2 className="w-full font-serif text-center text-white text-2xl rounded-t-md bg-[#0BAFA6] capitalize p-6">Features</h2>
                    <div className="list-disc font-serif text-base md:text-xl text-black flex flex-col gap-2 px-6 py-6">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-medium" {...props} />,
                                ul: ({ node, ...props }) => <ul className="list-disc ml-6" {...props} />,
                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                span: ({ node, style, ...props }) => <span style={style} {...props} />
                            }}
                        >
                            {product.features}
                        </ReactMarkdown>
                    </div>
                </div>

                <Footer />

            </div>

            <Modal open={open} onClose={() => setOpen(false)} center
                styles={{ closeButton: { display: 'none' }, modal: { borderRadius: ".7rem" } }}>

                <div className="flex flex-col gap-8 py-8 px-12">
                   
                    <p className="font-serif text-lg text-gray-700">
                        Please note: This product is available for collection only.
                        Kindly select your preferred collection point:
                    </p>

                   
                    <div className="flex flex-col gap-3">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="pickup"
                                value="Hope Island"
                                checked={pickupLocation === "Hope Island"}
                                onChange={(e) => setPickupLocation(e.target.value)}
                            />
                            <span>Hope Island</span>
                        </label>

                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="pickup"
                                value="Burleigh Waters"
                                checked={pickupLocation === "Burleigh Waters"}
                                onChange={(e) => setPickupLocation(e.target.value)}
                            />
                            <span>Burleigh Waters</span>
                        </label>
                    </div>

                    
                    <CustomButton
                        onClick={() => {
                            if (!pickupLocation) {
                                return toast.error("Please select a collection location first");
                            }
                            AddToCart();
                        }} disabled={carting} >
                        {carting ? <div className="w-5 h-5 border-2 border-t-transparent border-black rounded-full animate-spin" /> : "Confirm & Add to Cart"}
                    </CustomButton>
                </div>

            </Modal>
        </React.Fragment>
    )
}

export default SpecificProduct
