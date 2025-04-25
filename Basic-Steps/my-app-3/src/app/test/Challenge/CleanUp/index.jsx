import { useState, useEffect } from "react";

const Comp = () => {
  useEffect(() => {
    console.log("Hi There!!");
    return;
  }, []);
  return <div className="alert alert-success">M...</div>;
};

const CleanUp = () => {
  const [data, setData] = useState(false);

  const handleButton = () => {
    setData(!data);
  };
  return (
    <div>
      <button onClick={handleButton} className="btn">
        Click Me
      </button>
      {data && <Comp />}
    </div>
  );
};

export default CleanUp;
