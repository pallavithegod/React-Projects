import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router";
import './index.css'

import Files from './Files'
import Contact from './Components/Contact/Contact';

const router = createBrowserRouter(
   createRoutesFromElements(
      <Route path = "/" element = {<Layout />}>
         <Route path = "/about" element = {<About />} />
         <Route path = "/contact" element = {<Contact />} />
         <Route path = "/github" element = {<Github />} />
         <Route path = "/user" element = {<User />} />
         <Route path = "/home" element = {<Home />} />
      </Route>
   )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router= {router}/>
 </React.StrictMode>
)
