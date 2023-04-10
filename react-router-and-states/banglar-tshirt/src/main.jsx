import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./component/Layout/Main";
import Home from "./component/Home/Home";
import OrderReview from "./component/OrderReview/OrderReview";
import About from "./component/About/About";
import Grandpa from "./component/Grandpa/Grandpa";
import Challenge from "./component/Challenge/challenge";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:() => fetch("tshirtdata.json")
      },
      {
        path: "review",
        element: <OrderReview></OrderReview>,
      },
      {
        path:"about",
        element:<About></About>
      },
      {
        path:"grandpa",
        element:<Grandpa></Grandpa>
      },
      {
        path:"challenge",
        element:<Challenge></Challenge>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
