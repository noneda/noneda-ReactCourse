import { useReducer } from "react";
import { data } from "../../Database";

const reducer = (state, action) => {
  switch (action.type) {
    case "OneByOne":
      return state.filter((e) => e.id !== action.select);

    case "All":
      return null;

    case "Reload":
      return data;

    default:
      throw Error("Don´t Found " + action.type);
  }
};

const hookUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, data);

  return { state, dispatch };
};

export default hookUseReducer;
