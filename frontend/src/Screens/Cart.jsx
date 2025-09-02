import React, { useEffect, useState } from "react";
import Footer from "../Components/footer";
import RButton from "../Components/Reusable_Button";
import { Trash2 } from 'lucide-react';
import { BackendURL } from "../BackendContext";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import Modal from "react-responsive-modal";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CustomButton from "../Components/CustomButton";

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#1a202c", // gray-900
      fontFamily: "Inter, sans-serif",
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#a0aec0", // gray-400
      },
    },
    invalid: {
      color: "#e53e3e", // red-600
      iconColor: "#e53e3e",
    },
  },
  hidePostalCode: true, // optional
};

const Cart = () => {

  const stripe = useStripe();
  const elements = useElements()
  const { id } = useParams();
  const URL = BackendURL()
  const navigate = useNavigate()
  const [status, setStatus] = useState("");
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState({ items: [], totalPrice: 0 })

  useEffect(() => {
    axios.get(`${URL}/api/cart/get-cart-details/${id}`)
      .then(response => setCart(response.data))
      .catch(error => console.error("Getting error in fetching cart details: ", error))
  })

  const DeleteProduct = (itemID) => {
    axios.delete(`${URL}/api/cart/delete/${cart.cartID}/${itemID}`)
      .then(response => {
        toast.success(response.data.message)
        setTimeout(() => { navigate(0) }, 2500)
      })
      .catch(error => {
        console.error("Getting error in deleting product", error)
        return toast.error(error?.response?.data?.error)
      })
  }

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);

    try {
      const { data } = await axios.post(`${URL}/api/payments/create-payment-intent`, {
        amount: cart.totalPrice,
      });

      const clientSecret = data.client_secret;

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error)
        setStatus(`❌ Payment failed: ${result.error.message}`);

      else {
        if (result.paymentIntent.status === "succeeded") {
          setStatus("✅ Payment Successful!");

          await axios.post(`${URL}/api/payments/save-payment`, {
            userId: id,
            amount: result.paymentIntent.amount,
            status: result.paymentIntent.status,
            paymentIntentId: result.paymentIntent.id,
          })
        }
      }

    } catch (err) {
      setStatus(`❌ Error: ${err.message}`);
    }

    setLoading(false);
  };

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
                <Trash2 size={24} className="stroke-red-500 hover:scale-105 cursor-pointer" onClick={() => DeleteProduct(data.itemId)} />
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
            <RButton className="px-8 py-2" onClick={() => setOpen(true)}>Check Out</RButton>
          </div>

        </div>

        <Footer />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center
        styles={{ closeButton: { display: 'none' }, modal: { padding: "0", borderRadius: ".7rem" } }}>

        <div className="w-[400px] flex items-center justify-center bg-gray-50 p-4">
          <form
            onSubmit={handlePayment}
            className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6"
          >
            <h2 className="font-serif text-2xl font-semibold text-gray-800 mb-6 text-center">
              Checkout
            </h2>

            <label className="font-serif block text-sm font-medium text-gray-600 mb-2">
              Card Details
            </label>
            <div className="border border-gray-300 p-3 rounded-lg mb-4 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
              <CardElement options={CARD_ELEMENT_OPTIONS} />
            </div>

            <CustomButton
              type="submit"
              disabled={!stripe || loading}
            >
              {loading ? "Processing..." : `Pay $${cart.totalPrice}`}
            </CustomButton>

            {status && (
              <p className="mt-4 text-center text-sm font-medium text-gray-700">
                {status}
              </p>
            )}
          </form>
        </div>

      </Modal>
    </React.Fragment>
  )
}

export default Cart