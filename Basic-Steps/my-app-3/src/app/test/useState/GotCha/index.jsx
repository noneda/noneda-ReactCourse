import { useState } from "react";

const GotCha = () => {
  const [val, setVal] = useState(0);
  const handleClick = () => {
    setVal(val + 1);
  };
  return (
    <div>
      <h2>{val}</h2>
      <button className="btn" onClick={handleClick}>
        ++
      </button>
    </div>
  );
};

export default GotCha;
