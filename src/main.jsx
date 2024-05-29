import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Categories from './Component/Category/Categories.jsx';
import About from './Pages/About/About.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import SingleProductPage from './Component/Products/SingleProductPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/category",
        element: <Categories></Categories>
      },
      {
        path: "/category/:id",
        element: <SingleProductPage></SingleProductPage>
      },
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);