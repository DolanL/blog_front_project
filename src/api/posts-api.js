import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4444",
});

export const APIPosts = {
  getPosts: () => {
    return instance.get("/posts");
  },
  getPost: (id) => {
    return instance.get(`/posts/${id}`);
  },
  addPost: (data) => {
    return instance.post("/posts", data);
  },
};
