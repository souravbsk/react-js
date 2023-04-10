import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErroPage/ErrorPage";
import Friends from "./components/Friends/Friends";
import Friend from "./components/Friend/Friend";
import FriendDetails from "./components/FriendDetails/FriendDetails";
import Posts from "./components/Posts/Posts";
import loadData from "./components/Utilities/post";
import PostDetals from "./components/PostDetails/PostDetals";
import Error from "./components/error/Error";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:<App></App>,
//     errorElement:<h1>error page</h1>
//   },
//   {
//     path: "/about",
//     element:<About></About>
//   },
//   {
//     path:'/contact',
//     element:<Contact></Contact>

//   }
// ]);

const router = createBrowserRouter([
  {
    path:'/',
    errorElement:<ErrorPage></ErrorPage>,
    element:<Home></Home>, //parent component
    children:[
      {
        path:"about",
        element:<About></About> //child component
      },
      {
        path:"/contact",
        element:<Contact></Contact> //child component
      },
      {
        path:"/friend",
        element:<Friends></Friends>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path:"/friend/:friendID",
        element:<FriendDetails></FriendDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendID}`)
      },
      {
        path:"/posts",
        element:<Posts></Posts>,
        loader:() => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:"/posts/:postID",
        element:<PostDetals></PostDetals>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.postID}`) 
      },
      {
        path:"*",
        element:<Error></Error>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
