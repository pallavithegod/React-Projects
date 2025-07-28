import React ,{ StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router";
import './index.css'

import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Github from "./Components/Github/Github";
import Home from "./Components/Home/Home";
import User from "./Components/User/User";

import Layout from './Components/Layout';


const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path = "/" element = {<Layout />}>
         <Route path = "/about" element = {<About />} />
         <Route path = "/contact" element = {<Contact />} />
         <Route path = "/github" element = {<Github />} />
         <Route path = "/user/:userid" element = {<User />} />
         <Route path = "/" element = {<Home />} />
      </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router= {router}/>
 </React.StrictMode>
)
