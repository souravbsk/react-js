import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home'
import Country from './components/Countrys/Country'
import CountryDetails from './components/CountryDetails/CountryDetails'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[
      {
        path:"/",
        element:<Country></Country>,
        loader:() => fetch("https://restcountries.com/v3.1/all"),
      },
      {
        path:"/country/:countryId",
        element:<CountryDetails></CountryDetails>,
        loader:({params}) => console.log(params)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
