import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDataType } from "../interface/userDataType";
import { RootState } from "../store/store";
function Profile() {
  const { isHovering } = useSelector((state: RootState) => state.hoverSlice);
  const { profile } = useSelector((state: RootState) => state.profileSlice);

  return (
    <div>
      <div className={"profile-section " + `${isHovering ? "" : "hidden"}`}>
        <div className='profile-card w-[350px] m-auto border border-gray-200 rounded-[50px] shadow dark:bg-gray-800 dark:border-gray-700  py-10 px-10'>
          <div className='profile'>
            <img
              src={profile.profile}
              alt=''
              className='m-auto rounded-full mb-4 w-[150px]'
            />
            <p className='pt-4 mb-3 text-xl font-medium text-gray-900 inline-block'>
              <span className='relative flex h-3 w-3 float-right ml-1'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500'></span>
              </span>
              {profile.name}
            </p>
            <p className='mb-3 text-md  text-gray-500'>{profile.email}</p>
            <p className='mb-3 text-xl font-medium text-gray-900'>
              Your Plan : Standard
            </p>
            <button className='mb-6 w-[100%] justify-center inline-flex items-center py-3 text-md font-bold text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:bg-yellow-800 font-sans'>
              Active User
            </button>
          </div>
          <div className='use-plans-content text-left '>
            <div className='use-plans mb-6 '>
              <p className='py-2 font-bold'>Plan Uses</p>
              <div className='w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-yellow-500 h-2.5 rounded-full'
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
            <div className='flex pt-3 '>
              <div className='w-[50%] '>
                <p className='text-3xl font-bold p-1'>2450</p>
                <p className='text-sm text-gray-500 p-1'>Click Reviewed</p>
              </div>
              <div className='w-[50%] pl-6 border-l-2'>
                <p className='text-3xl font-bold p-1'>5000</p>
                <p className='text-sm text-gray-500 p-1'>Monthly clicks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
