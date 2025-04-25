import { useContext, createContext, useState } from "react";

const MainContext = createContext(null);

export const useMainContext = () => useContext(MainContext);

const ConfigContext = ({ children }) => {
  const [show, setShow] = useState(null);
  const [isSubMenu, setSubMenu] = useState(false);
  const [isSidebar, setSidebar] = useState(false);

  return (
    <MainContext.Provider
      value={{ show, setShow, isSubMenu, setSubMenu, isSidebar, setSidebar }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default ConfigContext;
