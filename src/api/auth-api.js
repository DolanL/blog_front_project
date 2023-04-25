import { instance } from "./posts-api";

export const authAPI = {
  register(data) {
    return instance.post("/auth/register", data);
  },
  login(data) {
    return instance.post("/auth/login", data);
  },
  me(headers) {
    return instance.get("/auth/me", { headers });
  },
};
