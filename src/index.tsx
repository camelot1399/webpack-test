import { createRoot } from "react-dom/client";
import App from "./App";
import React, { Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./pages/about";
import Shop from "./pages/shop";

const root = document.querySelector("#root");

if (!root) {
  throw new Error("root not found");
}

const container = createRoot(root);

container.render(
  <BrowserRouter>
    <Link to={"/about"}>about</Link>
    <br />
    <Link to={"/shop"}>shop</Link>

    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<About />} />
        <Route path="about" element={<About />} />

        <Route index element={<Shop />} />
        <Route
          path="shop"
          element={
            <Suspense fallback={"loading..."}>
              <Shop />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
