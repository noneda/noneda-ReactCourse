import { useState } from "react";

const Circuit = () => {
  const [truthy, setTruthy] = useState(false);

  const handleButton = () => {
    setTruthy(!truthy);
  };

  return (
    <div className={"alert " + (truthy ? "alert-success" : "alert-danger")}>
      <h3>{truthy && "Successful"}</h3>
      <button className="btn" onClick={handleButton}>
        Click Me
      </button>
    </div>
  );
};

export default Circuit;
