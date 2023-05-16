import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { userDataType } from "../interface/userDataType";
import { userSlice } from "./userSlice";
import { hoverSlice } from "./hoverSlice";
import { profileSlice } from "./profileSlice";
import { exampleApi } from "./APISlice";
export interface hoverSliceType {
  isHovering: boolean;
}
export interface userSliceType {
  users: userDataType[];
  pageNo: Number;
}
export interface profileSliceType {
  id: number;
  name: string;
  email: string;
  isActive: "active" | "inactive";
  access: string;
  profile: string;
}
export interface RootState {
  hoverSlice: hoverSliceType;
  userSlice: userSliceType;
  profileSlice: profileSliceType;
}

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
