import Component from "./Component";
import { Persons } from "../Utils";
import { useEffect, useState } from "react";

const App = () => {
  const [select, setSelect] = useState(0);
  const [show, setShow] = useState(Persons);

  const Order = () => {
    const FirstStep = Array.from(
      { length: show.length },
      (_, index) => index - select
    );
    setShow(
      show.map((_, index) => {
        return { ..._, order: FirstStep[index] * 100 };
      })
    );
  };

  const Next = () => {
    show.length - 1 === select ? setSelect(0) : setSelect(select + 1);
  };

  const Prev = () => {
    0 === select ? setSelect(3) : setSelect(select - 1);
  };

  useEffect(() => {
    setInterval(() => {
      Next();
    }, 5000);
  });

  useEffect(() => {
    Order();
  }, [select]);

  return (
    <section className="section">
      <Component data={show}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="icon"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
        </svg>
      </Component>
      <button className="prev" onClick={Prev}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <button className="next" onClick={Next}>
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </section>
  );
};

export default App;
