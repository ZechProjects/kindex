import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container!);

// Initial render: Render the top-level React component.
root.render(<App />);
