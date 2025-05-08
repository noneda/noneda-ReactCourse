import { createContext, useContext } from "react";
import { createGlobalContextHooks } from "../Hooks";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const MainContext = ({ children }) => {
  const { state, dispatch } = createGlobalContextHooks();
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
