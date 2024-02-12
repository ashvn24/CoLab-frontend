import React from 'react'
import SideNav from '../Widgets/SideNav';
import TopBar from '../Widgets/TopBar';
import routes from '../Roots/RootLinks';
import { Routes, Route } from "react-router-dom";


const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <SideNav />
      <div className="p-4 xl:ml-80">
      <TopBar/>
      <Routes>
          {routes.map(
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
