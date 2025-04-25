import { useState, useEffect } from "react";

const Issues = () => {
  const [val, setVal] = useState(0);
  const SayHello = () => {
    console.log("Hello World!!!");
  };
  useEffect(() => SayHello(), [val]);

  return (
    <div>
      <h1> Value : {val}</h1>
      <button className="btn" onClick={() => setVal(val + 1)}>
        Click Me
      </button>
    </div>
  );
};

export default Issues;
