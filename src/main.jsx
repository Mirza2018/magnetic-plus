import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import Register from './Pages/Login/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard.jsx';
import Cart from './Pages/Dashboard/Cart/Cart.jsx'
import Allusers from './Pages/Dashboard/AllUsers/Allusers.jsx';
import AddItems from './Pages/Dashboard/AddItems/AddItems.jsx';
import AdminRoute from './route/AdminRoute.jsx';
import ManageItems from './Pages/Dashboard/ManageItems/ManageItems.jsx';
import UpdateItem from './Pages/Dashboard/UpdateItem/UpdateItem.jsx';
import Category from './Component/Category/Category.jsx';
import Orders from './Pages/Dashboard/Order/Orders.jsx';
import ManageOrders from './Pages/Dashboard/ManageOrders/ManageOrders.jsx';
import Products from './Component/Products/Products.jsx';
import ItemPage from './Component/ItemPage/ItemPage.jsx';
import BestProducts from './Pages/Dashboard/BestProducts/BestProducts.jsx';
import TopSelling from './Pages/Dashboard/TopSelling/TopSelling.jsx';
import PopularProducts from './Pages/Dashboard/PopularProducts/PopularProducts.jsx';
import OrderHistory from './Pages/Dashboard/OrderHistory/OrderHistory.jsx';
import AdminHome from './Pages/AdminHome/AdminHome.jsx';
import AboutUs from './Component/AboutUs/AboutUs.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import CartWithOutLogIn from './Pages/Dashboard/Cart/CartWithOutLogIn.jsx';
const queryClient = new QueryClient()
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
        path: "shop/:category",
        element: <Category></Category>
      },
      {
        path: "shop",
        element: <Products></Products>
      },
      {
        path: "shop/category/:id",
        element: <ItemPage></ItemPage>
      },
      {
        path: "aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "*",
        element: <ErrorPage /> 
      },
      {
        path:'/cart',
        element:<CartWithOutLogIn/>
      },
      
    ]
  },
  {
    path:"dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart></Cart>
      },
      {
        path:'orders',
        element:<Orders></Orders>
      },
      // Admin route
      {
        path:'allUsers',
        element:<AdminRoute><Allusers></Allusers></AdminRoute>
      },
      {
        path:'adminHome',
        element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path:'addItems',
        element:<AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:'manageItems',
        element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:'manageOrders',
        element:<AdminRoute><ManageOrders></ManageOrders></AdminRoute>
      },
      {
        path:'orderHistory',
        element:<AdminRoute><OrderHistory></OrderHistory></AdminRoute>
      },
      {
        path:'bestProducts',
        element:<AdminRoute><BestProducts></BestProducts></AdminRoute>
      },
      {
        path:'propularProducts',
        element:<AdminRoute><TopSelling></TopSelling></AdminRoute>
      },
      {
        path:'Topselling',
        element:<AdminRoute><PopularProducts></PopularProducts></AdminRoute>
      },
      {
        path:'updateItem/:id',
        element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader:({params})=>fetch(`https://magneticplus.sirony.xyz/item/${params.id}`)
      },
    ]
  }
]);

// https://magneticplus.sirony.xyz

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} >
     </RouterProvider>
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);