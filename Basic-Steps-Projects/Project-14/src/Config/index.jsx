import { createContext, useContext } from "react";

import { hookMainContext } from "../Hooks";

const ContextGlobal = createContext(null);

export const useContextGlobal = () => useContext(ContextGlobal);

const MainContext = ({ children }) => {
  const { state, dispatch, load, setLoad } = hookMainContext();

  return (
    <ContextGlobal.Provider value={{ state, dispatch, load, setLoad }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default MainContext;
