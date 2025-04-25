import React from "react";

const Buttons = ({ name, select, setSelect, index }) => {
  const Select = () => {
    setSelect(index);
  };

  return (
    <button
      className={select === index ? "job-btn active-btn" : "job-btn"}
      onClick={Select}
    >
      {name}
    </button>
  );
};

export default Buttons;
