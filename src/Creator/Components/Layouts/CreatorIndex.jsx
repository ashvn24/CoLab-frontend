import React from 'react'
import SideNav from '../../../Admin/Components/Widgets/SideNav'
import { indexCreator } from '../../../Admin/Components/Roots/RootLinks'
import { Route, Routes } from 'react-router-dom'
import TopBar from '../../../Admin/Components/Widgets/TopBar'

export default function CreatorIndex() {
  return (
    <div className="min-h-screen ">
      <SideNav routes={indexCreator} bg={'bg-slate-400 bg-opacity-20'}/>
      <div className="p-4 xl:ml-80">
      <TopBar rou={'user'} color={'white'} bg={'border-none bg-slate-400 bg-opacity-20'}/>
      <Routes>
          {indexCreator.map(
            ({ layout, pages }) =>
              layout === "indexCreator" &&
              pages.map(({ path, element }) => (
                <Route exact path={path} element={element} />
              ))
          )}
        </Routes>
      </div>
    </div>
  )
}
