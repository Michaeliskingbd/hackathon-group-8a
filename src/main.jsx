import "./Courses.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./Courses.css"; // ✅ This connects Tailwind styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);