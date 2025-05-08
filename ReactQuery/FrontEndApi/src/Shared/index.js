import axios from "axios";

export const HEADERS = [
  {
    default: {
      "Content-Type": "application/json",
    },
  },
];

const Shared = axios.create({
  baseURL: "http://localhost:5000/api/tasks",
  headers: {
    ...HEADERS.default,
  },
});

export default Shared;
