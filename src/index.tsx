import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<App />} />
    </Routes>
  </BrowserRouter>
);
