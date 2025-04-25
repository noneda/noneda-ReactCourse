import { useState } from "react";

const NewForm = () => {
  const [val, setVal] = useState(0);
  const handleClick = () => {
    setTimeout(() => {
      setVal((_) => {
        return _ + 1;
      });
    }, 1000);
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

export default NewForm;
