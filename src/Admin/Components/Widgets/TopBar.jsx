import {
  Cog6ToothIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Breadcrumbs,
  IconButton,
  Input,
  Navbar,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { AdminLogout } from "../../../Store/adminAuthSlice";
import { UserLogout } from "../../../Store/authSlice";

const TopBar = ({ bg, color,rou }) => {

  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logout = () =>{
    if(rou==='admin'){
      dispatch(AdminLogout())
      navigate('/adminSignin')
    }else if(rou==='user'){
      dispatch(UserLogout())
      navigate('/')
    }

  }
  return (
    <Navbar
      color={ color }
      className={`rounded-xl transition-all sticky top-4 z-40 py-3 shadow-md shadow-black-500/5 ${bg}`}
      fullWidth
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs className={"bg-transparent p-0 transition-all mt-1"}>
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color={ color }
                className="font-normal opacity-80 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography variant="small" color={ color } className="font-normal">
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color={ color }>
            {page}
          </Typography>
        </div>
        <div className="flex items-center mr-11 ">
          <div className="relative flex w-auto mr-auto md:mr-4 md:w-56 max-w-[24rem]">
            <Input
              color={ color }
              // value={email}
              // onChange={onChange}
              className="pr-20 rounded-md bg-white"
              containerProps={{
                className: "min-w-0 ",
              }}
            />
            <button className="!absolute  right-1 top-1 items-center h-8 w-14 rounded bg-slate-500">
              search
            </button>
          </div>

          
            <div className="flex justify-end">
              <button className="bg-slate-500 h-10 hidden xl:flex items-center gap-1 px-4 normal-case rounded-md" onClick={()=>logout()}>
                <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
                Logout
              </button>
              <div className="xl:hidden">
                <UserCircleIcon className="h-5 w-5 text-black" />
              </div>
            </div>
          

          {/* <IconButton variant="text" color={ color }>
            <Cog6ToothIcon className="h-5 w-5 text-black-500" />
          </IconButton> */}
        </div>
      </div>
    </Navbar>
  );
};

export default TopBar;
