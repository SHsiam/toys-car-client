import {
    createBrowserRouter,
 
  } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllToys from "../pages/Categories/AllCategory/AllToys";
import SingleCar from "../pages/Categories/AllCategory/SingleCar";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path:'/singlecar/:id',
          element:<PrivateRoute><SingleCar></SingleCar></PrivateRoute> ,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        }
      ]
    },
  ]);

  export default router;