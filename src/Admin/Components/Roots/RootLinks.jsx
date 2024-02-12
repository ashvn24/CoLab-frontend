import React from 'react'
import {
    HomeIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/solid";
import Home from '../../Pages/Dashboard/AdminHome';
import AdminHome from '../../Pages/Dashboard/AdminHome';
import AllUsers from '../../Pages/Dashboard/Users';
  
const icon = {
    className: "w-5 h-5 text-inherit",
  };

export const routes = [
    {
      layout: "dashboard",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "dashboard",
          path: "/home",
          element: <AdminHome/>,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Users",
          path: "/users",
          element: <AllUsers />,
        },
        
      ],
    },
  ];
  
  export default routes;
