import { createSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/auth-api";

const initialState = { isLoggedIn: false };

export const slice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    loginLogoutAC: (state, action) => {
      state.isLoggedIn = action.payload.isLoggedIn;
    },
  },
});

export const authReducer = slice.reducer;
export const { loginLogoutAC } = slice.actions;

export const registerTC = (data) => {
  return async (dispatch) => {
    try {
      const res = await authAPI.register(data);
      dispatch(loginLogoutAC({ isLoggedIn: true }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const loginTC = (data) => {
  return async (dispatch) => {
    try {
      const res = await authAPI.login(data);
      dispatch(loginLogoutAC({ isLoggedIn: true }));
      return res;
    } catch (e) {
      console.log(e);
    }
  };
};

export const meTC = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const res = await authAPI.me(headers);
      if (!res.data.message) {
        dispatch(loginLogoutAC({ isLoggedIn: true }));
      }
    } catch (e) {
      console.log(e);
    }
  };
};
