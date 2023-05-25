import { createSlice } from "@reduxjs/toolkit";
import { profileSliceType } from "./store";

const ProfileInitalState: profileSliceType = {
  id: 0,
  name: "",
  email: "",
  isActive: "active",
  access: "",
  profile: "",
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState: ProfileInitalState,
  reducers: {
    setProfile(state, action) {
      state.access = action.payload.access;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.isActive = action.payload.isActive;
      state.name = action.payload.name;
      state.profile = action.payload.profile;
    },
  },
});

export const profileAction = profileSlice.actions;
