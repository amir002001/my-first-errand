import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Paths from "./pages/Paths";
import FindWay from "./pages/FindWay";
import BuySomething from "./pages/BuySomething";
import StrangerDanger from "./pages/StrangerDanger";
import FindParents from "./pages/FindParents";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },{
    path: "/paths",
    element: <Paths />,
  },{
    path: "/findWay",
    element: <FindWay />,
  },{
    path: "/buySomething",
    element: <BuySomething />,
  },{
    path: "/strangerDanger",
    element: <StrangerDanger />,
  },{
    path: "/findParents",
    element: <FindParents />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
