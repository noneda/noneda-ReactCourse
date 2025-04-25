import { useState, useEffect } from "react";

const Multiple = () => {
  const [val, setVal] = useState(1);
  const [sec, setSec] = useState(2);
  useEffect(() => console.log("... +1 !!"), [val]);
  useEffect(() => console.log("... +2 !!"), [sec]);
  return (
    <>
      <div>
        <h1> Value : {val}</h1>
        <button className="btn" onClick={() => setVal(val + 1)}>
          Click Me + 1
        </button>
      </div>
      <div>
        <h1> Value : {sec}</h1>
        <button className="btn" onClick={() => setSec(sec + 2)}>
          Click Me + 2
        </button>
      </div>
    </>
  );
};

export default Multiple;
