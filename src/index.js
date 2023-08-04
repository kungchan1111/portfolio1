import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import "./assets/scss/style.scss";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomeView />,
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
