import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import React from "react";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
