import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import Layout from './layout/Layout';
import Home from './page/Home/Home/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{
      path: '/',
      element:<Home></Home>
    }]
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
