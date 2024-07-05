import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProductContainer from './components/productscontainer.jsx';
import ProductProfile from './components/product-profile.jsx';
import Buy from './components/buy.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductContainer />
  },
  {
    path: "/productprofile",
    element: <ProductProfile />
  },
  {
    path: "/buy",
    element: <Buy />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App/> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
