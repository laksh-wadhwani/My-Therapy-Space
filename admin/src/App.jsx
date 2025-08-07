import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./Components/Sidebar"
import Dashboard from "./Screens/Dashboard"
import Workshops from "./Screens/Workshops.jsx";
import UserQueries from "./Screens/UserQueries.jsx";

const App = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <Router>
      <div className="flex flex-row-reverse justify-between">
        <Sidebar onHoverChange={setIsSidebarHovered} />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard isSidebarHovered={isSidebarHovered} />} />
          <Route exact path="/manage-workshops" element={<Workshops isSidebarHovered={isSidebarHovered}/>}/>
          <Route exact path="/manage-user-queries" element={<UserQueries isSidebarHovered={isSidebarHovered}/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
