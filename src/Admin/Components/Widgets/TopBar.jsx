import { Bars3Icon, BellIcon, ClockIcon, Cog6ToothIcon, CreditCardIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { Avatar, Breadcrumbs, Button, IconButton, Input, Menu, MenuHandler, MenuItem, MenuList, Navbar, Typography } from '@material-tailwind/react'
import React from 'react'
import { useLocation, Link } from "react-router-dom";


const TopBar = () => {
    const { pathname } = useLocation();
    const [layout, page] = pathname.split("/").filter((el) => el !== "");
  return (

      <Navbar
      color='white'
      className={"rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-black-500/5"}
      fullWidth
    >
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="capitalize">
            <Breadcrumbs
            className={"bg-transparent p-0 transition-all mt-1"}>
                <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="black"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="black"
              className="font-normal"
            >
              / {page}
            </Typography>
            </Breadcrumbs>
            <Typography variant="h6" color="black">
            {page}
            </Typography>
            </div>
            <div className="flex items-center">
          {/* <div className="mr-auto md:mr-4 md:w-56">
            <Input label="Search" />
          </div> */}
          <div className="relative flex w-auto mr-auto md:mr-4 md:w-56 max-w-[24rem]">
            <Input
                color='black'
                // value={email}
                // onChange={onChange}
                className="pr-20 rounded-md"
                containerProps={{
                className: "min-w-0",

                }}
            />
            <button className="!absolute right-1 top-1 items-center h-8 w-14 rounded bg-slate-500">search</button>
            {/* <Button
                size="sm"
                // color={email ? "gray" : "blue-gray"}
                color="blue"
                // disabled={!email}
                className="!absolute right-1 top-1 rounded"
            >
                Invite
            </Button> */}
            </div>
          
            <Link to="/adminSignIn">
            <div className="flex justify-end">
                <button className="bg-slate-500 h-10 hidden xl:flex items-center gap-1 px-4 normal-case rounded-md">
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                Logout
                </button>
                <div className="xl:hidden">
                <UserCircleIcon className="h-5 w-5 text-black" />
                </div>
            </div>
            </Link>

          <IconButton
            variant="text"
            color="black"
    
          >
            <Cog6ToothIcon className="h-5 w-5 text-black-500" />
          </IconButton>
        </div>
        </div>
    </Navbar>
  )
}

export default TopBar
