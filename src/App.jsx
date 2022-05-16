import React from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Routee from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />
        <div className="Container--root">
          <Navbar />
          <Routee />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
