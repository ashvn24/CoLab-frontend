import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import SideNav from '../Admin/Components/Widgets/SideNav'
import TopBar from '../Admin/Components/Widgets/TopBar'
import { indexCreator } from '../Admin/Components/Roots/RootLinks'

const Index = () => {
  return (
//     <div>
//       <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
//       <Link to="/" className="flex gap-2 items-center">
//         <div className="p-1 md:p-2 bg-[#065ad8] rounded text-white">
//           {/* <TbSocial /> */}
//           <h1>Logo</h1>
//         </div>
//         <span className="text-xl md:text-2xl text-[#065ad8] font-semibold">
//           TravelPlanner
//         </span>
//       </Link>
//       <form
//         className="hidden md:flex items-center justify-center"
//         // onSubmit={handleSubmit(handleSearch)}
//       >
//         <TextInput
//           placeholder="Search..."
//           styles="w-[18rem] lg:w-[38rem]  rounded-l-full py-3 "
//           register={register("search")}
//         />
//         <CustomButton
//           title="Search"
//           type="submit"
//           containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
//         />
//       </form>
//       {/* Icons */}
//       <div className="flex items-center justify-between w-full md:w-auto">
//         {/* Theme Toggle */}
//         <button onClick={() => handleTheme()} className="mr-4">
//           {theme ? (
//             <BsMoon style={{ color: "#000080", fontSize: "22px" }} />
//           ) : (
//             <BsSunFill />
//           )}
//         </button>
//         {/* Notification Icon */}
//         <div className="relative flex items-center mr-4">
//           <IoMdNotificationsOutline
//             className={`mr-2 ${
//               isNotificationOpen
//                 ? `text-${theme === "dark" ? "white" : "black"}`
//                 : ""
//             }`}
//             onClick={handleNotificationClick}
//             style={{ color: "#000080", fontSize: "30px" }}
//           />
//           {isNotificationOpen && (
//             <div className="absolute top-12 right-0 w-60 bg-[#0444a4] bg-opacity-100 border border-[#719bd6] rounded-lg p-4 shadow-md overflow-y-auto max-h-60">
//               <div className="flex justify-between items-center mb-2">
//                 <span
//                   className={`text-md font-bold ${
//                     theme === "dark" ? "text-white" : "text-black"
//                   }`}
//                 >
//                   Notifications
//                 </span>
//                 <button
//                   className={`text-sm ${
//                     theme === "dark" ? "text-ascent-1" : "text-ascent-2"
//                   } hover:${
//                     theme === "dark" ? "text-ascent-2" : "text-ascent-1"
//                   } focus:outline-none`}
//                   onClick={handleClearAllNotifications}
//                 >
//                   Clear All
//                 </button>
//               </div>
//               {notificationList.map((notification, index) => (
//                 <div key={index} className="mb-2">
//                   <span
//                     className={`text-sm ${
//                       theme === "dark" ? "text-ascent-2" : "text-ascent-1"
//                     }`}
//                   >
//                     {notification.message}
//                   </span>
//                 </div>
//               ))}
//               <button
//                 className={`absolute top-2 right-2 ${
//                   theme === "dark" ? "text-white" : "text-black"
//                 } hover:text-gray-700 focus:outline-none`}
//                 onClick={handleNotificationClose}
//               >
//                 <IoMdClose />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Chat Icon */}
//         <Link to="/chat" className="relative flex items-center mr-4">
//           <FaRegMessage
//             className={`mr-2 ${hasUnreadMessages ? "text-[#08230d]" : ""}`}
//             onClick={handleChatIconClick}
//             style={{
//               color: hasUnreadMessages ? "#0abe2b" : "#000080",
//               fontSize: "22px",
//             }}
//           />
//           {unreadCount > 0 && (
//             <span className="absolute -top-3 -right-2 bg-red-500 text-[#0abe2b] rounded-full px-2 py-1 text-sm font-bold">
//               {unreadCount}
//             </span>
//           )}
//         </Link>

//         {/* Video Call Icon */}
//         <Link to="/videoCall" className="relative flex items-center">
//           <CiVideoOn style={{ color: "#000080", fontSize: "30px" }} />
//         </Link>
//       </div>

//       {/* Logout Button */}
//       <div className="mt-2 md:mt-0">
//         <CustomButton
//           onClick={() => dispatch(Logout())}
//           title="Log Out"
//           containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
//         />
//       </div>
//     </div>
//   );
//     </div>
<div>
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
</div>
  )
}

export default Index
