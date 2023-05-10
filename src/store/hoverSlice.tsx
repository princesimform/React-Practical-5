import { createSlice } from "@reduxjs/toolkit";

const HoverinitialState = {
  isHovering: false,
};

export const hoverSlice = createSlice({
  name: "hoverSlice",
  initialState: HoverinitialState,
  reducers: {
    changeHovering(state, action) {
      state.isHovering = action.payload;
    },
  },
});

export const hoverActions = hoverSlice.actions;
