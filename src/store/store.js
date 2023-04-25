import { combineReducers, configureStore } from "@reduxjs/toolkit";
import thunkMiddleWare from "redux-thunk";
import { postsReducer } from "./posts-reducer/posts-reducer";
import { authReducer } from "./auth-reducer/auth-reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(thunkMiddleWare),
});
