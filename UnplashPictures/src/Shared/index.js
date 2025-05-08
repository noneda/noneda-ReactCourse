import axios from "axios";

export const HEADERS = {
  default: {
    "Content-type": "application/json",
  },
};

const Shared = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=",
  headers: { ...HEADERS.default },
});

export default Shared;
