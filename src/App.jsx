import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Wallet from "./pages/Wallet";
import Quick from "./pages/QuickBuy";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />
        <div className="Container--root">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/wallet" element={<Wallet />} exact />
            <Route path="/quick" element={<Quick />} exact />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
