import { useState } from "react";
const people = [
  { name: "Anna", age: 25, hobby: "Reading" },
  { name: "Charles", age: 30, hobby: "Running" },
  { name: "Sophie", age: 22, hobby: "Painting" },
  { name: "Michael", age: 28, hobby: "Playing guitar" },
  { name: "Lucy", age: 26, hobby: "Traveling" },
];

const OneByOne = () => {
  const [counter, setCounter] = useState(0);
  const [arr, setArr] = useState(people[counter]);

  const handleSwitch = () => {
    setCounter(counter + 1);
    counter == 4 && setCounter(0);
    setArr(people[counter]);
  };

  return (
    <div>
      <ul>
        <li>
          <h3>{arr.name}</h3>
          <h3>{arr.age}</h3>
          <h4>{arr.hobby}</h4>
        </li>
      </ul>
      <button onClick={handleSwitch} className="btn">
        Switch
      </button>
    </div>
  );
};

export default OneByOne;
