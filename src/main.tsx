import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Paths from "./pages/Paths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },{
    path: "/paths",
    element: <Paths />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
