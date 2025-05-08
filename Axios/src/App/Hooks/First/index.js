import { useEffect } from "react";
import Shared, { HEADERS } from "../../Shared";

const getData = async () => {
  try {
    const { statusText, data } = await Shared.get(
      "react-store-products/",
      HEADERS.GET
    );
    if (statusText === "Not Found") {
      throw Error("Error with First getData");
    }
    console.log(data);
  } catch (err) {
    console.error(err.response);
  }
};

const FirstRequest = () => {
  useEffect(() => {
    getData();
  }, []);
};

export { FirstRequest };
