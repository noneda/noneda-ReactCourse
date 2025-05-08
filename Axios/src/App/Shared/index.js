import axios from "axios";

const Shared = axios.create({
  baseURL: "https://www.course-api.com/",
  timeout: 1000,
  headers: {
  },
});

Shared.interceptors.request.use(
  (req) => {
    console.log("Request Set");
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

Shared.interceptors.response.use(
  (res) => {
    console.log("Response Set");
    return res;
  },
  (err) => {
    console.error(err.response);
    if (err.response.status === 400) console.log("Not Found");
    return Promise.reject(err);
  }
);

export default Shared;

export const HEADERS = {
  GET: {
    headers: { Accept: "application/json" },
  },
};
