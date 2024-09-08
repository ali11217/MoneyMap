import React from "react";
import ReactDOM from "react-dom/client";
import "antd/dist/antd.min.css"; // Ant Design styles
import "./index.css"; // Global styles
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Create a root element for React
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app with StrictMode and BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Report performance metrics
reportWebVitals();
