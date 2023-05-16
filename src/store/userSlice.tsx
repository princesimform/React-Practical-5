import { createSlice } from "@reduxjs/toolkit";
import { userSliceType } from "./store";

const userListInitalState: userSliceType = {
  users: [],
  pageNo: 1,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userListInitalState,
  reducers: {
    setUserData(state, action) {
      state.users = action.payload;
    },
    setPageNo(state, action) {
      state.pageNo = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
