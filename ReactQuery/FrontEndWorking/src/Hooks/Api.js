import Shared, { HEADERS } from "../Shared";
import { Type } from "./reducer";

export const fetchData = async (dispatch) => {
  try {
    const { data, status } = await Shared.get("api/tasks");

    if (status === 400) throw Error("Error getting Data");
    if (status === 200)
      dispatch({
        type: Type.GET_DATA,
        value: data.taskList,
      });
  } catch (err) {
    console.error(`Error with : ${err.promise}`);
  }
};
