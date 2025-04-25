import { useState } from "react";
import Component from "./Component";
import { Food } from "../Utils";
import Buttons from "./Buttons";

const App = () => {
  const [show, setShow] = useState(Food);

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <Buttons Food={Food} setChange={setShow} />
        <div className="section-center">
          {show.map((_, index) => (
            <Component key={index} {..._} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default App;
