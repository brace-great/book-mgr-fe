import axios from "axios";

const domain =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:3000";

const getURL = (path) => {
  return `${domain}${path}`;
};

export const post = (url, data = {}) => {
  return axios.post(getURL(url), data);
};

export const del = (url) => {
  return axios.delete(getURL(url));
};

export const get = (url = {}) => {
  return axios.get(getURL(url));
};
