import { useState, useCallback } from "react";
import SlowerItem from "./Item";

const hookSlowComponent = () => {
  const [item, setItem] = useState(SlowerItem);
  const handleChange = useCallback(() => {
    setItem(SlowerItem);
  }, [item]);
  return { item, handleChange };
};

export default hookSlowComponent;
