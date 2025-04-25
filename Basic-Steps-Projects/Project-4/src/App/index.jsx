import Component from "./Component";

import { Questions } from "../Utils";

const App = () => {
  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {Questions.map((_, index) => (
          <Component key={index} {..._} />
        ))}
      </section>
    </main>
  );
};

export default App;
