import { post } from "@/utils/request";

export const register = (account, password) => {
  return post("/api/auth/register", {
    account,
    password,
  });
};

export const login = (account, password) => {
  return post("/api/auth/login", {
    account,
    password,
  });
};
