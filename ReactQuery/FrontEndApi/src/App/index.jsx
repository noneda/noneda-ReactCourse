import { Suspense } from "react";
import Form from "./Form";
import Section from "./Section";
const App = () => {
  return (
    <section className="section-center">
      <Form />
      <Suspense fallback={<div className="loading" />}>
        <Section />
      </Suspense>
    </section>
  );
};

export default App;
