import { createSlice } from "@reduxjs/toolkit";

const userListInitalState = {
  users: [],
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState: userListInitalState,
  reducers: {
    setData(state, action) {
      state.users = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
