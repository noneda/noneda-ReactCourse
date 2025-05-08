import Toggle from "./Toggle";
import Form from "./Form";
import Pictures from "./Pictures";
import { usePicture } from "../Hooks";

const App = () => {
  const [data, isLoading] = usePicture();
  return (
    <main>
      <Toggle />
      <Form />
      <Pictures data={data} isLoading={isLoading} />
    </main>
  );
};

export default App;
