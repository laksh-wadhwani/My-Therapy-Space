import React from "react";
import Navbar from "./Components/navbar";
import LandingPage from "./Screens/Landing_Page";
import {BrowserRouter as Router, Routes, Route} from "react-router"
import AboutUs from "./Screens/About_Us";

const App = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/AboutUs" element={<AboutUs/>}/>
      </Routes>
    </Router>
  )
}

export default App