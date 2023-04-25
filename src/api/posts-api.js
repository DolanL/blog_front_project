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
  addPost: (data, headers) => {
    return instance.post("/posts", data, { headers });
  },
  deletePost: (id, headers) => {
    return instance.delete(`/posts/${id}`, { headers });
  },
};
