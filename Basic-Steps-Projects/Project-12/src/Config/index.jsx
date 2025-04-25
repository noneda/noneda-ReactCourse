import { createContext, useContext, useState } from "react";

const Context = createContext(null);

export const useMainContext = () => useContext(Context);

const MainContext = ({ children }) => {
  const [Modal, setModal] = useState(false);
  const [Aside, setAside] = useState(false);

  return (
    <Context.Provider value={{ Modal, setModal, Aside, setAside }}>
      {children}
    </Context.Provider>
  );
};

export default MainContext;
