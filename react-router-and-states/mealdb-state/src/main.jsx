import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import FoodCard from "./components/FoodCard/FoodCard";
import CardDetails from "./components/CardDetails/CardDetails";
import About from "./components/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "/",
        element: <FoodCard></FoodCard>,
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="),
      },
      {
        path: "/foodDetails/:FoodId",
        element: <CardDetails></CardDetails>,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.FoodId}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
