import React, { ReactElement, useMemo, useState, useEffect } from "react";
import Profile from "./Profile";
import { userDataType } from "../interface/userDataType";
import { useGetExampleDataQuery } from "../store/APISlice";
import Loading from "./Loading";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Pagination from "./Pagination";

function UserList() {
  const pageNo = useSelector((state: RootState) => state.userSlice.pageNo);
  const [userData, setUserData] = useState<userDataType[]>([]);
  const { data, error, isLoading, isFetching } = useGetExampleDataQuery(
    Number(pageNo)
  );
  useEffect(() => {
    let TempData: userDataType[] = [];
    if (data != undefined) {
      TempData = Object.values(data)?.filter((item) => {
        return item !== null;
      });
    }
    setUserData(TempData.length == 0 ? [] : TempData);
  }, [data]);

  const ProfileComponent = useMemo(() => {
    return <Profile />;
  }, []);
  function tableBody() {
    let rows: ReactElement[] = [];
    userData.map((user: userDataType) => {
      rows.push(<ListItem {...user} key={user.id} />);
    });

    if (userData.length < 10) {
      rows.push(
        <tr className="" key={"nodata"}>
          <td className="mx-6 my-5 cursor-pointer">
            <div className=""></div>
            <div className="pl-4">
              <p className="font-medium text-gray-900 text-center">
                No More Data Avaliable
              </p>
            </div>
          </td>
        </tr>
      );
    }

    return rows;
  }

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: Something Went Wrong </div>;
  }

  return (
    <>
      <div className="container mx-auto  justify-center items-center max-[1000px]:flex-col font-sans">
        <div className="w-[65vw] h-full list-table relative  min-[1000px]:overflow-hidden">
          <table className="table-auto w-full text-left max-[1000px]:w-[800px] ">
            <thead>
              <tr className="grid grid-cols-6">
                <th scope="col" className="px-6 py-5 col-span-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-5 col-span-1">
                  Status
                </th>
                <th scope="col" className="px-6 py-5 col-span-1">
                  Access
                </th>
                <th scope="col" className="px-6 py-5 col-span-1"></th>
              </tr>
            </thead>
            <tbody className="h-[80vh] max-[1000px]:h-[10vh] overflow-x-auto">
              {isFetching ? <Loading /> : tableBody()}
            </tbody>
          </table>
          <div>
            <Pagination />
          </div>
        </div>
        <div className="w-[35vw]">{ProfileComponent}</div>
      </div>
    </>
  );
}

export default UserList;
