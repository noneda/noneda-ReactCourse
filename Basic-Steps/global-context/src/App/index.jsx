import { useGlobalContext } from "../Context";

const App = () => {
  const { theme } = useGlobalContext();

  return <div>{theme}</div>;
};

export default App;
