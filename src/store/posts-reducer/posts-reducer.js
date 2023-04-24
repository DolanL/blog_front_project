import { createSlice } from "@reduxjs/toolkit";
import { APIPosts } from "../../api/api";

const initialState = [];

export const slice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {
    setPostsAC: (state, action) => {
      return action.payload.posts;
    },
  },
});

export const { setPostsAC } = slice.actions;
export const postsReducer = slice.reducer;

export const setPostsTC = () => {
  return async (Dispatch) => {
    try {
      debugger;
      const res = await APIPosts.getPosts();
      Dispatch(setPostsAC({ posts: res.data }));
    } catch (e) {
      console.log(e);
    }
  };
};
