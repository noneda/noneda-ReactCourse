import { useEffect, useState } from "react";
import { Person } from "../Utils";

const App = () => {
  const [select, setSelect] = useState(0);
  const [show, setShow] = useState([]);

  const Random = () => {
    do {
      const a = Math.floor(Math.random() * Person.length);
      if (a !== select) {
        setSelect(a);
        return false;
      }
    } while (true);
  };

  const Next = () => {
    select === Person.length - 1 ? setSelect(0) : setSelect(select + 1);
  };

  const Prev = () => {
    select === 0 ? setSelect(Person.length - 1) : setSelect(select - 1);
  };

  useEffect(() => {
    setShow(Person[select]);
  }, [select]);

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={show.image} alt={show.name} className="person-img" />
          <span class="quote-icon">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
            </svg>
          </span>
        </div>
        <h4 className="author">{show.name}</h4>
        <p className="job">{show.job}</p>
        <p className="info">{show.text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={Prev}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
            </svg>
          </button>
          <button className="next-btn" onClick={Next}>
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 320 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
            </svg>
          </button>
        </div>
        <button class="btn btn-hipster" onClick={Random}>
          surprise me
        </button>
      </article>
    </main>
  );
};

export default App;
