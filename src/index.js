import React from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./Home";
import "./styles/style.css";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
