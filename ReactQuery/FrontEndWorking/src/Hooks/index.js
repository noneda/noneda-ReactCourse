import { useEffect, useRef, useCallback, useReducer } from "react";
import Reducer, { Type } from "./reducer";

import { fetchData } from "./Api";
import { useGlobalContext } from "../Context";
import { nanoid } from "nanoid";

export const createGlobalContextHooks = () => {
  const [state, dispatch] = useReducer(Reducer, []);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return {
    state,
    dispatch,
  };
};

export const useForm = () => {
  const { dispatch } = useGlobalContext();
  const input = useRef(null);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const send = {
        id: nanoid(),
        title: input.current.value,
        isDone: false,
      };
      dispatch({
        type: Type.ADD,
        value: send,
      });
    },
    [input]
  );
  return { input, onSubmit };
};

export const useItem = () => {
  const { state } = useGlobalContext();
  return { state };
};

export const useSingle = (id) => {
  const { dispatch } = useGlobalContext();

  const onChange = () => {
    dispatch({
      type: Type.DONE,
      id: id,
    });
  };

  const Remove = () => {
    dispatch({
      type: Type.REMOVE,
      id: id,
    });
  };
  return {
    onChange,
    Remove,
  };
};
