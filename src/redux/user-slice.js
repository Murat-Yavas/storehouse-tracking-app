import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInfo: {} };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
