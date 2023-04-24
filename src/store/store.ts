import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import thunkMiddleWare from "redux-thunk";
import { postsReducer } from "./posts-reducer/posts-reducer";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({
  postsReducer: postsReducer,
});

type AppRootStateType = typeof store;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleWare),
});

type ThunkAppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>;

export const useAppDispatch = () => useDispatch<ThunkAppDispatchType>();
