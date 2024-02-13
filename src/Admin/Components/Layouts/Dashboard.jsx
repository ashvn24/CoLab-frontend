import React from 'react'
import SideNav from '../Widgets/SideNav';
import TopBar from '../Widgets/TopBar';
import  { AdminRoutes } from '../Roots/RootLinks';
import { Routes, Route } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <SideNav routes={AdminRoutes} bg={'bg-gradient-to-br from-slate-700 to-slate-800'}/>
      <div className="p-4 xl:ml-80">
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
