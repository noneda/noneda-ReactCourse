import { useState } from "react";

const ShortCircuit = () => {
  const [data, setData] = useState("");
  const [vars, setVars] = useState("Name");

  return (
    <div>
      <h4>Falsy OR : {data || "Hello Word!!"}</h4>
      <h4>Falsy AND : {data && "Hello Word!!"}</h4>
      <h4>Truthy AND : {vars && "Hello Word!!"}</h4>
      <h4>Truthy OR : {vars || "Hello Word!!"}</h4>
    </div>
  );
};

export default ShortCircuit;
