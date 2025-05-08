import { useState, useEffect } from "react";
import { getData } from "../Helpers";

export const useProjects = () => {
  const [items, setItems] = useState([]);
  const fetchData = async () => {
    const data = await getData();
    setItems(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return [items];
};
