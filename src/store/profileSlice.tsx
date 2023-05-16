import { createSlice } from "@reduxjs/toolkit";
import { ProfileData } from "../data/userData";
import { profileSliceType } from "./store";

const ProfileInitalState: profileSliceType = {
  profile: ProfileData,
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState: ProfileInitalState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
  },
});

export const profileAction = profileSlice.actions;
