
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import AddHR from "./components/AddHR";
import DisplayHR from "./components/DisplayHR";
import ViewHR from "./components/ViewHR";
import UpdateHR from "./components/UpdateHR";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>HR Management</h2>
        <div>
          <Link to="/">Display HR</Link>
          <Link to="/add">Add HR</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<DisplayHR />} />
        <Route path="/add" element={<AddHR />} />
        <Route path="/view/:id" element={<ViewHR />} />
        <Route path="/update/:id" element={<UpdateHR />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;