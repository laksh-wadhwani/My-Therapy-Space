import Navbar from "./Components/navbar";
import LandingPage from "./Screens/Landing_Page";
import { BrowserRouter as Router, Routes, Route } from "react-router"
import AboutUs from "./Screens/About_Us";
import Services from "./Screens/Services"
import Fees from "./Screens/Fees";
import Team from "./Screens/Team";
import ContactUs from "./Screens/Contact_Us";
import AlsoOffer from "./Screens/Also_Offer"
import CurrentWorkshops from "./Screens/Current_Workshops";
import Blogs from "./Screens/Blogs";
import Workshop from "./Screens/Workshop";
import Shop from "./Screens/Shop";
import SpecificBlog from "./Screens/Specific_Blog";
import Products from "./Screens/Products";
import PaidVideos from "./Screens/PaidVideos";
import SpecificProduct from "./Screens/Specific_Product";
import SpecificVideo from "./Screens/specific_video";
import Booking from "./Screens/Booking";
import Cart from "./Screens/Cart";
import { BackendProvider } from "./BackendContext";
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode"
import UserProfile from "./Screens/User_Profile";

const App = () => {

  const [user, setLoginUser] = useState(null)

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token) {
      try {
        const decoded = jwtDecode(token)
        setLoginUser(decoded)
      } catch (error) {
        console.error("Invalid Token", error)
        sessionStorage.removeItem("token")
      }
    }
  }, [])


  return (
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
  )
}

export default App