import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Dashboard from "./Screens/Dashboard"
import Workshops from "./Screens/Workshops.jsx";
import UserQueries from "./Screens/UserQueries.jsx";
import Blogs from "./Screens/Blogs.jsx";
import Login from "./Screens/Login.jsx";
import Signup from "./Screens/Signup.jsx"
import Products from "./Screens/Products.jsx";
import Courses from "./Screens/Course.jsx";
import { BackendProvider } from "./BackendContext.jsx";
import { ToastContainer } from "react-toastify";
import {jwtDecode} from "jwt-decode"
import SpecificBlog from "./Screens/SpecificBlog.jsx";

const App = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const [user, setLoginUser] = useState(null)

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if(token){
      try {
        const decoded = jwtDecode(token)
        setLoginUser(decoded)
      } catch (error) {
        console.error("Invalid Token", error)
        sessionStorage.removeItem("token")
      }
    }
  },[])

  return (
   <BackendProvider>
    <Router>
      {(user)? 
      (<div className="flex flex-row-reverse justify-between">
     
        <Sidebar onHoverChange={setIsSidebarHovered} user={user} setLoginUser={setLoginUser}/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard isSidebarHovered={isSidebarHovered} user={user} />} />
          <Route exact path="/manage-workshops" element={<Workshops isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/manage-user-queries" element={<UserQueries isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/manage-blogs" element={<Blogs isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/specific-blog/:id" element={<SpecificBlog isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/manage-products" element={<Products isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/manage-courses" element={<Courses isSidebarHovered={isSidebarHovered}/>}/>
        </Routes>
      </div>)
      :
      (<Routes>
        <Route exact path="/" element={<Login setLoginUser={setLoginUser}/>} />
        <Route exact path="/signup" element={<Signup/>}/>
      </Routes>)}
    </Router>
    <ToastContainer position="top-right" autoClose={2500}/>
   </BackendProvider>
  );
};

export default App;
