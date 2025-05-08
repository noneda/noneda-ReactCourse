import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, createContext, useState } from "react";

const GlobalContext = createContext(null);

export const useGlobal = () => useContext(GlobalContext);

const client = new QueryClient();

const Context = ({ children }) => {
  const [input, setInput] = useState("cat");

  return (
    <GlobalContext.Provider value={[input, setInput]}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </GlobalContext.Provider>
  );
};

export default Context;
