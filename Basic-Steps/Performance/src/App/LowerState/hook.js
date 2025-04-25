import { useRef, useEffect, useCallback } from "react";
import { useLowerStateContext } from "./Context";

export const hookForm = () => {
  const input = useRef(null);
  const { state, dispatch } = useLowerStateContext();

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch({
        type: "Add",
        select: input.current.value,
      });
    },
    [state]
  );

  return { input, onSubmit };
};

export const hookListLS = () => {
  const { state, dispatch } = useLowerStateContext();
  useEffect(
    () =>
      dispatch({
        type: "Restore",
      }),
    []
  );
  return { state };
};
