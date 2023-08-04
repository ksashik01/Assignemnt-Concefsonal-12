
  import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
  

  export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },

        {
          path:'/room/:id',
          element:<RoomDetails></RoomDetails>

      }


      ]
    },

    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    }


  ]);