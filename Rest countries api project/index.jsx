import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import CountryDetails from "./Components/CountryDetails";
import Home from "./Components/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

console.log("hello Nabeel");

const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <RouterProvider router={router} />
  </>
);
