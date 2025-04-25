import { data } from "./Utils";
import Component from "./Component";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [send, setSend] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSend(data.filter((_, i) => 1 + i <= value)); 
    console.log(send);
  };

  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem Ipsum</h4>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          id="amount"
          step={1}
          max={8}
          min={0}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <Component send={send} />
    </section>
  );
};

export default App;
