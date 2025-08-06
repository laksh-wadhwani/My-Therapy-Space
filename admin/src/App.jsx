import Sidebar from "./Components/Sidebar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./Screens/Dashboard"
import Login from "./Screens/Login"

const App = () => {
  return(
    <Router>
      <Login/>
      <Routes>
        {/* <Route exact path="/dashboard" element={<Dashboard/>}/> */}
      </Routes>
    </Router>
  )
}

export default App