import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import {
    Button,
    Typography,
  } from "@material-tailwind/react";

const SideNav = ({bg,routes}) => {
    const RouteLink = routes
    const [openSidenav, setOpenSidenav] = useState(false)
    const [isActive, setIsActive] = useState(false)
    const sidenavType='dark'
  return (
    <div>
      <aside
      className={` ${
        openSidenav ? "translate-x-0" : "-translate-x-80"
      } ${bg} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 `}
    >
        <div
        className={`relative`}
      >
        <Link to="/" className="py-6 px-8 text-center">
          <Typography
            variant="h6"
            // color={sidenavType === "dark" ? "white" : "blue-gray"}
            color='white'
          >
            CoLab
          </Typography>
        </Link>
        {/* <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton> */}
      </div>
      <div className="m-3">
        {RouteLink.map(({ layout, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {pages.map(({ icon, name, path }) => (
              <li key={name}>
                <NavLink to={`/${layout}${path}`}>
                  {({ isActive }) => (
                    <Button
                      variant={isActive ? "gradient" : "text"}
                      color='white'
                      className="flex items-center gap-4 px-4 capitalize"
                      fullWidth
                    >
                      {icon}
                      <Typography
                        color="inherit"
                        className="font-medium capitalize"
                      >
                        {name}
                      </Typography>
                    </Button>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </aside>
    </div>
  )
}

export default SideNav
