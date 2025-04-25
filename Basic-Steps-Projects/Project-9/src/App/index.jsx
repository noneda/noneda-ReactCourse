import { useState } from "react";
import Component from "./Component";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  console.log(colors.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const ti = new Values(color).all(10);
      setColors(ti);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <section className="container">
        <h4>color generator</h4>
        <form onSubmit={handleSubmit} className="color-form">
          <input
            type="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="#f15025"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button
            className="btn"
            type="submit"
            style={{
              background: colors.length > 0 && `rgb(${colors[10].rgb})`,
            }}
          >
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((_, i) => (
          <Component key={i} {..._} hex={_.hex} />
        ))}
      </section>
      <ToastContainer position="top-center" />
    </main>
  );
};

export default App;
