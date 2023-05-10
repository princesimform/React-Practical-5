import { createSlice } from "@reduxjs/toolkit";
import { ProfileData } from "../data/userData";

const ProfileInitalState = {
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
