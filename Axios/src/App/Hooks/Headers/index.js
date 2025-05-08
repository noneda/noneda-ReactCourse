import { useState, useCallback } from "react";
import { HEADERS } from "../../Shared";
import axios from "axios";

const RandomJoke = () => {
  const [is, set] = useState(null);

  const getRandomJoke = useCallback(async () => {
    const URL = "https://icanhazdadjoke.com/";
    console.log("Click");
    try {
      const { data, status } = await axios.get(URL, HEADERS.GET);

      if (status === 400) throw Error(`Error with Get : ${URL}`);
      if (status === 200) set(data.joke);
    } catch (error) {
      console.error(error.response);
    }
  }, [is]);

  return { is, getRandomJoke };
};
export default RandomJoke;
