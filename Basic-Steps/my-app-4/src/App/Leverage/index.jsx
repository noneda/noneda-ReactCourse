import { people } from "../../Utils";
import Component from "./Component";

const App = () => {
  return people.map((_, index) => <Component key={index} {..._} />);
};

export default App;
