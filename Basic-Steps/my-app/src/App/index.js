import { useState, useEffect } from "react";
import Book from "./Components";
import Events from "./Hooks";

import { Arr } from "./Utils";

import "./base.css";
const BookLists = () => {
  const [isTitle, setTitle] = useState("");
  const [newArr, setNewArr] = useState(Arr);

  const getBookTitle = (title) => {
    if (title) {
      const filteredBooks = Arr.filter((_) => _.Title === title);
      setNewArr(filteredBooks);
    } else {
      setNewArr(Arr);
    }
  };
  useEffect(() => {
    getBookTitle(isTitle);
    console.log(isTitle);
  }, [isTitle]);

  return (
    <>
      <main>
        <Events setTitle={setTitle} />
        {newArr.map((_, index) => (
          <Book key={index} {..._} number={index} />
        ))}
      </main>
    </>
  );
};

export default BookLists;
