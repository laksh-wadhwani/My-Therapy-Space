import React from "react";
import Navbar from "./Components/navbar";
import LandingPage from "./Screens/Landing_Page";
import {BrowserRouter as Router, Routes, Route} from "react-router"
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

const App = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/AboutUs" element={<AboutUs/>}/>
        <Route exact path="Services" element={<Services/>}/>
        <Route exact path="Fees" element={<Fees/>}/>
        <Route exact path="/Team" element={<Team/>}/>
        <Route exact path="/contact" element={<ContactUs/>}/>
        <Route exact path="/alsooffer" element={<AlsoOffer/>}/>
        <Route exact path="/currentworkshops" element={<CurrentWorkshops/>}/>
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/blog/:id" element={<SpecificBlog/>}/>
        <Route exact path="/workshop" element={<Workshop/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/videos" element={<PaidVideos/>}/>
        <Route exact path="/specificProduct/:id" element={<SpecificProduct/>}/>
        <Route exact path="/specificVideo/:id" element={<SpecificVideo/>}/>
        <Route exact path="/booking" element={<Booking/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App