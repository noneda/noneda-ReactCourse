import { Person } from "../Util";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(Person);

  const handleButton = () => {
    setData([]);
  };

  return (
    <main>
      <section className="container">
        <h3> {data.length} Birthdays Today</h3>
        <section>
          {data.map((_, index) => (
            <article key={index} className="person">
              <img src={_.picture} alt={_.name} className="img" />
              <div>
                <h4>{_.name}</h4>
                <p>{_.age} years</p>
              </div>
            </article>
          ))}
        </section>
        <button className="btn btn-block" onClick={handleButton}>
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
