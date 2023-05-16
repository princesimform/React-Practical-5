import React from "react";
import { userDataType } from "../interface/userDataType";
import { hoverActions } from "../store/hoverSlice";
import { profileAction } from "../store/profileSlice";
import { useDispatch } from "react-redux";
import { Trash2, Lock } from "react-feather";

const TrashMemo = React.memo(Trash2);
const LockMemo = React.memo(Lock);

function ListItem(user: userDataType) {
  const dispatch = useDispatch();
  function setChangeHover(userData: userDataType) {
    dispatch(profileAction.setProfile(userData));
    dispatch(hoverActions.changeHovering(true));
  }
  function ussetChangeHover() {
    dispatch(hoverActions.changeHovering(false));
  }

  return (
    <tr className="grid grid-cols-6">
      <td
        className="mx-6 my-5 flex col-span-3 cursor-pointer"
        onMouseEnter={() => setChangeHover(user)}
        onMouseLeave={ussetChangeHover}
      >
        <div className="">
          <img
            src={user.profile}
            alt=""
            className="h-12 w-12  block rounded-full"
          />
        </div>
        <div className="pl-4">
          <p className="font-medium text-gray-900">{user.name}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </td>
      <td className="mx-6 my-5 col-span-1 ">
        {/* <p className='text-green-600 font-bold'>Active</p> */}
        {user.isActive == "active" ? (
          <p className="text-green-600 font-bold">Active</p>
        ) : (
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            defaultValue={"inactive"}
          >
            <option value="inactive">Inactive</option>
            <option value="active">Active</option>
          </select>
        )}
      </td>
      <td className="mx-6 my-5 col-span-1 ">
        {user.access == "owner" ? (
          <p className="text-gray-800 font-bold">Owner</p>
        ) : (
          <select
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option defaultValue={user.access}>{user.access}</option>
          </select>
        )}
      </td>
      <td className="mx-6 my-5 col-span-1">
        {user.access == "owner" ? <LockMemo /> : <TrashMemo />}
      </td>
    </tr>
  );
}

export default ListItem;
