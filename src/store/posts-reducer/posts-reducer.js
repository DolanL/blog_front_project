import { createSlice } from "@reduxjs/toolkit";
import { APIPosts } from "../../api/posts-api";

const initialState = [];

export const slice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    setPostsAC: (state, action) => {
      return action.payload.posts;
    },
  },
});

export const { setPostsAC } = slice.actions;
export const postsReducer = slice.reducer;

export const setPostsTC = () => {
  return async (dispatch) => {
    try {
      const res = await APIPosts.getPosts();
      dispatch(setPostsAC({ posts: res.data }));
    } catch (e) {
      console.log(e);
    }
  };
};
