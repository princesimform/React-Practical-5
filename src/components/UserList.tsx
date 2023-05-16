import React, { ReactElement, useMemo, useState, useEffect } from "react";
import Profile from "./Profile";
import { userDataType } from "../interface/userDataType";
import { useGetExampleDataQuery } from "../store/APISlice";
import Loading from "./Loading";
import ListItem from "./ListItem";

function UserList() {
  const [userData, setUserData] = useState<userDataType[]>([]);
  const [queryParam, setQueryParam] = useState(1);
  const { data, error, isLoading, isFetching } =
    useGetExampleDataQuery(queryParam);
  const activePageClass =
    "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ";
  const InactivePageClass =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ";
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
            <nav aria-label="Page navigation example">
              <ul className="inline-flex -space-x-px">
                <li>
                  <button
                    className={`${InactivePageClass} `}
                    onClick={() => setQueryParam(queryParam - 1)}
                    disabled={queryParam == 1 ? true : false}
                  >
                    {"<<"}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setQueryParam(1)}
                    className={`${
                      queryParam == 1 ? activePageClass : InactivePageClass
                    }`}
                  >
                    1
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setQueryParam(2)}
                    className={`${
                      queryParam == 2 ? activePageClass : InactivePageClass
                    }`}
                  >
                    2
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setQueryParam(3)}
                    aria-current="page"
                    className={`${
                      queryParam == 3 ? activePageClass : InactivePageClass
                    }`}
                  >
                    3
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setQueryParam(4)}
                    className={`${
                      queryParam == 4 ? activePageClass : InactivePageClass
                    }`}
                  >
                    4
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setQueryParam(5)}
                    className={`${
                      queryParam == 5 ? activePageClass : InactivePageClass
                    }`}
                  >
                    5
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setQueryParam(queryParam + 1)}
                    disabled={queryParam == 5 ? true : false}
                    className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
                  >
                    {">>"}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="w-[35vw]">{ProfileComponent}</div>
      </div>
    </>
  );
}

export default UserList;
