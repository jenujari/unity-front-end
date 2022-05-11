import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="Container--root">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
