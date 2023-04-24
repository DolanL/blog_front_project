import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:4444",
  withCredentials: true,
});

export const APIPosts = {
  getPosts: () => {
    return instance.get("/posts");
  },
};
