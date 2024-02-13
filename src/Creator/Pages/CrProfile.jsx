import React, { useEffect, useState } from "react";
import { UserProfile } from "../../Server/User/Profile";
import { useSelector } from "react-redux";
import Loading from "../../Pages/Components/Loading/Loading";

const CrProfile = () => {

    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        fetchprofile()
    },[ setLoading ])

    const fetchprofile = async () =>{
        try {
            setLoading(true)
            const res = await UserProfile()
            if(res.status===200){
                setUserData(res.data)
                console.log(userData);
                setLoading(false)
            }
        } catch (error) {
            console.log('error in profile',error);
        }
    }
    
    if (loading) {
        return <div className="bg-white bg-opacity-20 flex justify-center items-center h-screen">
        <Loading />
    </div>
    }
  return (

    <div className="bg-slate-400 bg-opacity-20 mt-8  rounded-t-lg rounded-b-3xl h-screen overflow-hidden">
      <div className="flex h-screen">
        {/* Left Side */}
        <div className="w-2/5 bg-gray-200 bg-opacity-20">
          <div className="flex justify-center items-center h-screen">
            <div className="rounded-full border-4 border-white p-1">
              <img
                className="rounded-full w-40 h-40 object-cover"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="Profile"
              />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-3/5 bg-gray-100">
          {/* Upper Part */}
          <div className="h-1/2 flex flex-col justify-center items-center border-b border-gray-300">
            <h2 className="text-xl font-bold">name</h2>
            <p className="text-sm text-gray-600">role</p>
          </div>

          {/* Lower Part */}
          <div className="h-1/2 flex justify-center items-center">
            <p className="text-base text-gray-700 px-4">
              bio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrProfile;
