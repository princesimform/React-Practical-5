import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userDataType } from "../interface/userDataType";
import { userSlice } from "./userSlice";
import { hoverSlice } from "./hoverSlice";
import { profileSlice } from "./profileSlice";
import { exampleApi } from "./APISlice";
export interface RootState {
  hoverSlice: { isHovering: boolean };
  userSlice: { users: userDataType[] };
  profileSlice: { profile: userDataType };
}

export const hoverActions = hoverSlice.actions;
export const userActions = userSlice.actions;
export const profileAction = profileSlice.actions;

const store = configureStore({
  reducer: {
    hoverSlice: hoverSlice.reducer,
    userSlice: userSlice.reducer,
    profileSlice: profileSlice.reducer,
    [exampleApi.reducerPath]: exampleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(exampleApi.middleware),
});

export default store;
