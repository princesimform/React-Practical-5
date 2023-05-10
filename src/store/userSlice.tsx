import { createSlice } from "@reduxjs/toolkit";
import userDataList from "../data/userData";

const userListInitalState = {
  users: userDataList,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userListInitalState,
  reducers: {},
});

export const userActions = userSlice.actions;
