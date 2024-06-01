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
// import snp from './Component/Products/snp.jsx';
// import single from './Component/Products/snp.jsx';
import Register from './Pages/Login/Register.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Login from './Pages/Login/Login.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard.jsx';
import Cart from './Pages/Dashboard/Cart/cart.jsx'
import Allusers from './Pages/Dashboard/AllUsers/Allusers.jsx';
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
        path: "/category",
        element: <Categories></Categories>
      },
      {
        path: "/category/:id",
        element: <SingleProductPage></SingleProductPage>
        // element: <PrivateRoute><SingleProductPage></SingleProductPage></PrivateRoute> 
      },
      // {
      //   path: "/category/:id",
      //   element: <Single></Single>
      //   // element: <PrivateRoute><SingleProductPage></SingleProductPage></PrivateRoute> 
      // },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
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
      // Admin route
      {
        path:'allUsers',
        element:<Allusers></Allusers>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
     <RouterProvider router={router} />
    </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);