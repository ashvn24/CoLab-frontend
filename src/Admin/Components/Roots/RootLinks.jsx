import React from 'react'
import {
    HomeIcon,
    UserCircleIcon,
  } from "@heroicons/react/24/solid";
import AdminHome from '../../Pages/Dashboard/AdminHome';
import AllUsers from '../../Pages/Dashboard/Users';
import CrHome from '../../../Creator/Pages/CrHome';
import CrProfile from '../../../Creator/Pages/CrProfile';
  
const icon = {
    className: "w-5 h-5 text-inherit",
  };

export const AdminRoutes = [
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
export const indexCreator = [
    {
      layout: "indexCreator",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "dashboard",
          path: "/home",
          element: <CrHome/>,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Profile",
          path: "/profile",
          element: <CrProfile />,
        },
        
      ],
    },
  ];
  
export const indexEditor = [
    {
      layout: "indexEditor",
      pages: [
        {
          icon: <HomeIcon {...icon} />,
          name: "dashboard",
          path: "/home",
          element: <CrHome/>,
        },
        {
          icon: <UserCircleIcon {...icon} />,
          name: "Profile",
          path: "/profile",
          element: <CrProfile />,
        },
        
      ],
    },
  ];
  
