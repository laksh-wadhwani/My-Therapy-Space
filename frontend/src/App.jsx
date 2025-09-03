import Navbar from "./Components/navbar";
import LandingPage from "./Screens/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router"
import AboutUs from "./Screens/AboutUs";
import Services from "./Screens/Services"
import Fees from "./Screens/Fees";
import Team from "./Screens/Team";
import ContactUs from "./Screens/ContactUs";
import AlsoOffer from "./Screens/AlsoOffer"
import CurrentWorkshops from "./Screens/CurrentWorkshops";
import Blogs from "./Screens/Blogs";
import Workshop from "./Screens/Workshop";
import Shop from "./Screens/Shop";
import SpecificBlog from "./Screens/SpecificBlog";
import Products from "./Screens/Products";
import PaidVideos from "./Screens/PaidVideos";
import SpecificProduct from "./Screens/SpecificProduct";
import SpecificVideo from "./Screens/SpecificVideo";
import Booking from "./Screens/Booking";
import Cart from "./Screens/Cart";
import { BackendProvider } from "./BackendContext";
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"
import UserProfile from "./Screens/UserProfile";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const App = () => {

  const stripePromise = loadStripe("pk_test_51S2CN1DUdFyp0hC9JR73WTa3rkt8TUbMHjtZ85CMOkvX7PjBZeq51gYcL4oWpdrNKUAeMnLCfcJip8k94ZneoYiB00lg19G9FC")
  const [user, setLoginUser] = useState(null)

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      try {
        const decoded = jwtDecode(token)
        setLoginUser(decoded)
      } catch (error) {
        console.error("Invalid Token Error:", error)
        sessionStorage.removeItem("token")
      }
    }
  }, [])


  return (
    <Elements stripe={stripePromise}>
    <BackendProvider>
      <Router>
        <Navbar user={user} setLoginUser={setLoginUser} />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="Services" element={<Services />} />
          <Route exact path="Fees" element={<Fees />} />
          <Route exact path="/Team" element={<Team />} />
          <Route exact path="/contact" element={<ContactUs />} />
          <Route exact path="/alsooffer" element={<AlsoOffer />} />
          <Route exact path="/currentworkshops" element={<CurrentWorkshops />} />
          <Route exact path="/blogs" element={<Blogs />} />
          <Route exact path="/blog/:id" element={<SpecificBlog />} />
          <Route exact path="/workshop" element={<Workshop />} />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/videos" element={<PaidVideos />} />
          <Route exact path="/specificProduct/:id" element={<SpecificProduct user={user} />} />
          <Route exact path="/specificVideo/:id" element={<SpecificVideo user={user} />} />
          <Route exact path="/booking" element={<Booking />} />

          {user && (
            <>
              <Route exact path="/user-profile/:id" element={<UserProfile user={user} setLoginUser={setLoginUser} />} />
              <Route exact path="/cart/:id" element={<Cart />} />
            </>
          )}

        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={2500} />
    </BackendProvider>
    </Elements>
  )
}

export default App
