import axios from "axios";
export const getData = async (name) => {
  const URL = `https://api.unsplash.com/search/photos?client_id=7pmB29Xi9rOWHhYpvtuc4edchzh1w0eawUjJwNAqngA&query=${name}`;
  try {
    const { data, status } = await axios.get(URL);
    if (status === 400) throw new Error("Error with Api Get All Data");
    if (status === 200) return data.results;
  } catch (err) {
    console.error(err.response);
  }
};
