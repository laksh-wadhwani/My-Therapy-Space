import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";
import { Trash2 } from 'lucide-react';
import Product1 from "../assets/product1.svg"
import Video1 from "../assets/video1.png"
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const Cart = () => {

    const { id } = useParams();
    const URL = BackendURL()
    const navigate = useNavigate()
    const [cart, setCart] = useState({items: [], totalPrice: 0})    

    useEffect(() => {
        axios.get(`${URL}/api/cart/get-cart-details/${id}`)
            .then(response => setCart(response.data))
            .catch(error => console.error("Getting error in fetching cart details: ", error))
    })

    const DeleteProduct = cartId => {
        axios.delete(`${URL}/api/cart/delete/${cartId}`)
        .then(response => {
            toast.success(response.data.message)
            setTimeout(() => {navigate(0)}, 2500)
        })
        .catch(error => {
            console.error("Getting error in deleting product", error)
            return toast.error(error?.response?.data?.error)
        })
    }


    return (
        <React.Fragment>
            <div className="main-box bg-white gap-10">
                <h2 className="w-full px-16 max-sm:px-8 mt-32 max-sm:mt-24 font-serif text-4xl max-sm:text-3xl text-[#0BAFA6] capitalize">shopping cart</h2>

                <div className="w-full px-16 max-sm:px-8 flex max-sm:flex-col max-sm:gap-10 justify-between items-start">

                    <div className="w-[65%] max-sm:w-full flex flex-col gap-6">
                        {cart.items.map(data => (
                            <div className="w-full border border-gray-300 rounded-xl shadow-md py-3 px-8 flex justify-between items-center">
                                <div className="w-[80%] flex items-center max-sm:items-center gap-4">
                                    <img src={data.thumbnail} alt="Product Picture" className="w-[40%] rounded-xl h-40 max-sm:h-auto" />
                                    <div className="w-[60%] flex flex-col font-serif text-black capitalize">
                                        <span className="text-2xl max-sm:text-lg">{data.title}</span>
                                        <span className="text-xl max-sm:text-base">Price: {data.price}</span>
                                    </div>
                                </div>
                                <Trash2 size={24} className="stroke-red-500 hover:scale-105 cursor-pointer" onClick={() => DeleteProduct(data._id)} />
                            </div>
                        ))}
                    </div>

                    <div className="w-[30%] max-sm:w-full border border-gray-300 rounded-xl shadow-md flex flex-col gap-8 px-8 py-6">
                        <h5 className="font-serif text-3xl text-black capitalize">order summary</h5>
                        <div className="flex flex-col gap-2">
                            <div className="w-full flex justify-between font-serif text-black text-lg capitalize">
                                <span>subtotal({cart.items.length} items):</span>
                                <span>${cart.totalPrice}</span>
                            </div>
                            <div className="w-full flex justify-between font-serif text-black text-lg capitalize">
                                <span>total: </span>
                                <span>${cart.totalPrice}</span>
                            </div>
                        </div>
                        <RButton className="px-8 py-2">Check Out</RButton>
                    </div>

                </div>

                <Footer />
            </div>
        </React.Fragment>
    )
}

export default Cart