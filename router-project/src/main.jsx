import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from "react-router";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <RouterProvider router= {router}/>
 </React.StrictMode>
)
