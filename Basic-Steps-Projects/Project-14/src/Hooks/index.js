import { useReducer, useState, useEffect } from "react";
import fetchData from "../Utils";
import reducer from "./reducer";

export const hookMainContext = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [load, setLoad] = useState(true);

  const Print = async () => {
    const data = await fetchData();
    dispatch({
      type: "Print",
      add: data,
    });
  };

  useEffect(() => {
    Print();
  }, []);

  return { state, dispatch, load, setLoad };
};

export const AppMain = (setLoad, state) => {
  useEffect(() => {
    if (state.length) {
      setTimeout(() => {
        setLoad(false);
      }, "500");
    }
  }, [state]);
};

export const hookNav = (state) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (state.length) {
      setAmount(
        state.reduce(
          (accumulator, currentValue) => accumulator + currentValue.amount,
          0
        )
      );
    }
  }, [state]);

  return { amount };
};

export const hookCard = (state, dispatch) => {
  const [totalCart, setTotalCart] = useState(0);

  const DeleteAll = () => {
    dispatch({
      type: "DeleteAll",
    });
  };

  useEffect(() => {
    if (state.length) {
      setTotalCart(
        state.reduce(
          (accumulator, currentValue) =>
            accumulator +
            parseFloat((currentValue.price * currentValue.amount).toFixed(2)),
          0
        )
      );
    }
  });
  return { totalCart, DeleteAll };
};

export const hookItem = (dispatch, select) => {
  const Remove = () =>
    dispatch({
      type: "Remove",
      select: select,
    });

  const Add = () =>
    dispatch({
      type: "Add",
      select: select,
    });
  const Decrease = () =>
    dispatch({
      type: "Decrease",
      select: select,
    });

  return { Remove, Add, Decrease };
};
