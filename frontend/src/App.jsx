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
      </Routes>
    </Router>
  )
}

export default App