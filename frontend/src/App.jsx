import React from "react";
import Navbar from "./Components/navbar";
import LandingPage from "./Screens/Landing_Page";
import {BrowserRouter as Router, Routes, Route} from "react-router"

const App = () => {
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
      </Routes>
    </Router>
  )
}

export default App