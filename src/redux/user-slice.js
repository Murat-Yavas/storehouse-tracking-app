import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInfo: {}, isLogin: false };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userInfo = action.payload;
    },

    changeLoginState: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
