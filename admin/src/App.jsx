import Sidebar from "./Components/Sidebar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Screens/Dashboard"
import React, { useState } from "react"

const App = () => {
  const [isSidebarHovered, setIsSidebarHovered] = useState(false);

  return (
    <Router>
      <div className="flex flex-row-reverse justify-between">
        <Sidebar onHoverChange={setIsSidebarHovered} />
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard isSidebarHovered={isSidebarHovered} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
