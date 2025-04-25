import Hero from "./Hero";
import NavBar from "./Nav";
import SubMenu from "./SubMenu";
import { useMainContext } from "../Config";
import SideBar from "./SideBar";

const App = () => {
  const { show } = useMainContext();
  return (
    <>
      <NavBar />
      <Hero />
      <SubMenu show={show} />
      <SideBar show={show} />
    </>
  );
};

export default App;
