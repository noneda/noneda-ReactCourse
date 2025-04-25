import React from "react";

const Buttons = ({ Food, setChange }) => {
  const Category = ["BreakFast", "Launch", "Shakes"];

  const filter = (data) => {
    setChange(Food.filter((_) => _.type === data));
  };

  const All = () => {
    setChange(Food);
  };
  return (
    <div className="btn-container">
      <button type="button" className="btn" onClick={All}>
        all
      </button>
      {Category.map((_, index) => (
        <button
          key={index}
          type="button"
          className="btn"
          onClick={() => filter(_)}
        >
          {_}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
