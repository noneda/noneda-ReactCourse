import { useState, useTransition } from "react";

export const hookLatestReact = () => {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [load, start] = useTransition();

  const handleChange = (e) => {
    setText(e.target.value);

    // slow down CPU
    start(() => {
      const newItems = Array.from({ length: 5000 }, (_, index) => (
        <div key={index}>
          <img src="/vite.svg" alt="" />
        </div>
      ));
      setItems(newItems);
    });
  };

  return { text, items, handleChange, load };
};
