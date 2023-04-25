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
    addPostAC: (state, action) => {
      state.push(action.payload.post);
    },
    deletePostAC: (state, action) => {
      return state.filter((el) => el._id !== action.payload.id);
    },
  },
});

export const { setPostsAC, addPostAC, deletePostAC } = slice.actions;
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

export const addPostTC = (data) => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const res = await APIPosts.addPost(data, headers);
      dispatch(addPostAC({ post: res.data }));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deletePostTC = (id) => {
  return async (dispatch) => {
    try {
      debugger;
      const token = localStorage.getItem("token");
      const headers = { Authorization: `Bearer ${token}` };
      const res = await APIPosts.deletePost(id, headers);
      dispatch(deletePostAC({ id }));
    } catch (e) {
      console.log(e);
    }
  };
};
