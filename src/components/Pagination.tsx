import { useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userSlice";
import { RootState } from "../store/store";

function Pagination() {
  const pageNo = useSelector((state: RootState) => state.userSlice.pageNo);
  console.log(pageNo);

  const dispatch = useDispatch();
  const activePageClass =
    "px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ";
  const InactivePageClass =
    "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ";
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              className={`${InactivePageClass} `}
              onClick={() =>
                dispatch(userActions.setPageNo(Number(pageNo) - 1))
              }
              disabled={pageNo == 1 ? true : false}
            >
              {"<<"}
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(userActions.setPageNo(1))}
              className={`${pageNo == 1 ? activePageClass : InactivePageClass}`}
            >
              1
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(userActions.setPageNo(2))}
              className={`${pageNo == 2 ? activePageClass : InactivePageClass}`}
            >
              2
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(userActions.setPageNo(3))}
              aria-current="page"
              className={`${pageNo == 3 ? activePageClass : InactivePageClass}`}
            >
              3
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(userActions.setPageNo(4))}
              className={`${pageNo == 4 ? activePageClass : InactivePageClass}`}
            >
              4
            </button>
          </li>
          <li>
            <button
              onClick={() => dispatch(userActions.setPageNo(5))}
              className={`${pageNo == 5 ? activePageClass : InactivePageClass}`}
            >
              5
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                dispatch(userActions.setPageNo(Number(pageNo) + 1))
              }
              disabled={pageNo == 5 ? true : false}
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 "
            >
              {">>"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
