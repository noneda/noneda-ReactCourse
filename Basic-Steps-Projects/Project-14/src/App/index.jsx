import { useContextGlobal } from "../Config";
import { AppMain } from "../Hooks";

import Cart from "./Cart";
import Loading from "./Loading";
import Nav from "./Nav";

const App = () => {
  const { load, setLoad, state } = useContextGlobal();
  AppMain(setLoad, state);
  return (
    <main>
      {load ? (
        <Loading />
      ) : (
        <>
          <Nav /> <Cart />
        </>
      )}
    </main>
  );
};

export default App;
