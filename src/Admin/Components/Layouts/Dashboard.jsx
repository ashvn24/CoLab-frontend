import React, { useEffect } from 'react'
import SideNav from '../Widgets/SideNav';
import TopBar from '../Widgets/TopBar';
import  { AdminRoutes } from '../Roots/RootLinks';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';


const DashboardLayout = () => {
  const{ access } = useSelector((state) => state.AdminToken)
  const nav = useNavigate()
  console.log((access));
  useEffect(() => {
    if(access===null){
      nav('/adminSignIn')
    }
  }, [])
  return (
    <div className="min-h-screen bg-white">
      <SideNav routes={AdminRoutes} bg={'bg-gradient-to-br from-slate-700 to-slate-800'}/>
      <div className="p-4 xl:ml-64">
      <TopBar rou={'admin'} color={'black'} bg={" "}/>
      <Routes>
          {AdminRoutes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  )
}

export default DashboardLayout
