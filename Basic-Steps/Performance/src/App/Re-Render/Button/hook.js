import { useState } from "react";

export const hookCount = () => {
  const [count, setCount] = useState(0);

  const counter = () => {
    setCount(count + 1);
  };

  return { count, counter };
};
