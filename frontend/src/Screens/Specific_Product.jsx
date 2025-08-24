import React, { useEffect, useState } from "react";
import RButton from "../Components/Reusable_Button";
import Footer from "../Components/footer";
import { BackendURL } from "../BackendContext";
import { useParams } from "react-router";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const SpecificProduct = () => {

    const { id } = useParams();
    const URL = BackendURL();
    const [loading, setLoading] = useState(true)
    const [thumbnailImage, setThumbnailImage] = useState()
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`${URL}/api/products/get-specific-product/${id}`)
            .then(response => {
                setProduct(response.data)
                setThumbnailImage(response.data.thumbnail)
            })
            .catch(error => console.log("Getting error in fetching specific product details: ", error))
            .finally(() => setLoading(false))
    },[id, URL])

    if (loading) {
        return (
            <div className="w-full h-dvh flex justify-center items-center">
                <p className="font-serif text-xl italic text-gray-400">Loading Product.....</p>
            </div>
        )
    }

    return (
        <React.Fragment>
            <div className="main-box gap-8 items-center">

                <h2 className="font-serif text-4xl text-[#0BAFA6] capitalize px-16 mt-32 self-start">Products</h2>

                <div className="w-full flex justify-around px-16">
                    <img src={thumbnailImage} alt="Course Video Trailer" className="w-[47.5%] max-h-[400px] rounded-xl shadow-md" />
                    <div className="w-[50%] flex flex-col justify-between p-6 border border-gray-300 rounded-xl shadow-xl">
                        <div className="w-full flex flex-col font-serif text-black capitalize">
                            <h3 className="text-4xl">{product.name}</h3>
                            <span className="text-xl"> Price: ${product.price}</span>
                        </div>
                        <p className="font-serif text-xl text-black">{product.description}</p>
                        <RButton>Add to Cart</RButton>
                    </div>
                </div>

                {product.pictures?.length > 0 && (
                        <div className="w-full grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 justify-between items-centerd mt-6 px-16">
                            {product.pictures.map((pic, index) => (
                                <img 
                                    key={index} 
                                    src={pic} 
                                    alt={`Product ${index}`} 
                                    className={`size-60 object-cover rounded-md shadow cursor-pointer transition-all duration-200 hover:scale-105 ${thumbnailImage === pic ? "ring-4 ring-[#0BAFA6]" : ""}`}
                                    onClick={() => setThumbnailImage(pic)}
                                />
                            ))}
                        </div>
                    )}

                <div className="w-[95%] border border-gray-300 rounded-xl shadow-md flex flex-col gap-2">
                    <h2 className="w-full font-serif text-center text-black text-3xl rounded-t-md bg-[#0BAFA6] capitalize p-6">this course includes</h2>
                    <div className="list-disc font-serif text-2xl text-black flex flex-col gap-2 px-10 py-6">
                        <ReactMarkdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h1: ({ node, ...props }) => <h1 className="text-3xl font-bold text-[#0BAFA6]" {...props} />,
                                h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold text-[#15b7ac]" {...props} />,
                                h3: ({ node, ...props }) => <h3 className="text-xl font-medium text-[#01b7ac]" {...props} />,
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
        </React.Fragment>
    )
}

export default SpecificProduct