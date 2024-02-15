import React, { useEffect, useState } from "react";
import { UserProfile } from "../../Server/User/UserServer";
import Loading from "../../Pages/Components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "../../Store/UserSlice";
import { BASEURL } from "../../ApiPoints/UserApi/UserApi";
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';

const CrProfile = () => {
  // const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.userData);

  useEffect(() => {
    fetchprofile();
  }, [setLoading]);

  const fetchprofile = async () => {
    try {
      setLoading(true);
      const res = await UserProfile();
      console.log(res.data);
      if (res.status === 200) {
        dispatch(Profile(res.data));

        setLoading(false);
        console.log("result", selector);
      }
    } catch (error) {
      console.log("error in profile", error);
    }
  };

  if (loading) {
    return (
      <div className="bg-white bg-opacity-20 flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }
  return (
    <div className="bg-slate-400 bg-opacity-20 mt-8 text-white rounded-t-lg rounded-b-3xl h-screen overflow-hidden max-sm:h-full">
  <div className="flex flex-col sm:flex-row max-sm:items-center">
    {/* Left Side */}
    <div className=" w-2/5 max-sm:w-full bg-gray-200  bg-opacity-10 max-sm:bg-opacity-0 max-sm:mt-10">
      <div className="flex flex-col justify-center items-center   sm:h-screen">
        <div className="rounded-full border-2 border-white p-1">
          <img
            className="rounded-full w-60 h-60 object-cover"
            src={`${BASEURL}${selector.userData.profile.profile_image}`}
            alt="Profile"
          />
        </div>
        <h1 className="mt-5 cursor-pointer">edit profile <EditTwoToneIcon/></h1>
      </div>
    </div>

    {/* Right Side */}
    <div className="sm:w-3/5 text-white max-sm:mt-10 max-sm:items-center">
      {/* Upper Part */}
      <div className="h-1/2 flex flex-col justify-center items-center ">
        <div className="bg-black bg-opacity-20 flex flex-col justify-center items-center p-6 w-10/12 rounded-md">
          <div className="text-white">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {selector.userData.user.username}
              </h2>
              <p className="text-slate-300">
                {selector.userData.user.role}
              </p>
            </div>

            <div className="mt-8 rounded-lg p-6 w-96">
              <div className="grid grid-cols-2 gap-2">
                <div className="text-left">
                  <p className="font-bold">Full Name:</p>
                  <p className="font-bold mt-2">Email:</p>
                  <p className="font-bold mt-2">Date Joined:</p>
                </div>
                <div>
                  <p>{selector.userData.profile.full_name}</p>
                  <p className="mt-2">{selector.userData.user.email}</p>
                  <p className="mt-2">
                    {selector.userData.user.date_joined}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Part */}

      <div className="bg-black bg-opacity-20 ml-12 w-10/12 p-10 rounded-md mt-4 sm:mt-0 max-sm:ml-10">
        <div className="h-1/2">
          <h1 className="ml-6 font-bold text-xl mb-10">Bio:</h1>
          <p className="text-base mt-6 px-4">
            {selector.userData.profile.bio}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CrProfile;
