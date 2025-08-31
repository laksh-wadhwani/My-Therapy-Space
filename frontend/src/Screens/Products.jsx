import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";
import { Link } from "react-router";
import { BackendURL } from "../BackendContext";
import axios from "axios";
import CustomButton from "../Components/CustomButton";

const Products = () => {

    const URL = BackendURL()
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(`${URL}/api/products/get-all-products`)
        .then(response => setProducts(response.data))
        .catch(error => console.error("Getting error in fetching all product details: ",error))
    })

    return(
        <React.Fragment>
            <div className="main-box bg-white gap-10 items-center">
                
                <div className="w-full flex justify-between px-16 max-sm:px-8 mt-32 max-sm:mt-24 items-center">
                    <h2 className="font-serif text-[#0BAFA6] text-4xl max-sm:text-3xl capitalize">products</h2>
                </div>

                {(products.length===0)? <p className="text-3xl font-serif font-semibold italic">No Products have been uploaded</p>:
                <div className="w-full flex flex-wrap px-16 gap-16 justify-center">
                    {products.map(product => (
                        <Link to={`/specificProduct/${product._id}`} style={{color:"unset"}}><div className="w-[280px] h-[330px] shadow-md rounded-xl flex flex-col items-center justify-center pb-4 cursor-pointer hover:scale-105">
                            <img src={product.thumbnail} alt="Product Picture" className="w-full h-[70%] object-cover rounded-t-xl" />
                            <div className="flex flex-col items center">
                                <h5 className="font-serif text-black text-lg text-center">{product.name}</h5>
                                <p className="font-serif text-gray-400 text-center">{product.price}</p>
                            </div>
                            <CustomButton>Add to Cart</CustomButton>
                        </div></Link>
                    ))}
                </div>
                }

                <Footer/>

            </div>
        </React.Fragment>
    )
}

export default Products