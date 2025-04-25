import { useContext, createContext, useReducer } from "react";
import reducer from "./reducer";

const LowerStateContext = createContext(null);

export const useLowerStateContext = () => useContext(LowerStateContext);

const MainLowerState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <LowerStateContext.Provider value={{ state, dispatch }}>
      {children}
    </LowerStateContext.Provider>
  );
};

export default MainLowerState;
