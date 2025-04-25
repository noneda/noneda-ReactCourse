import { useState } from "react";

const NoErrorExample = () => {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleCount}>
        Click Me
      </button>
    </>
  );
};

export default NoErrorExample;
