import { useState } from "react";
import { data } from "../../../../shared";

const ArrayExample = () => {
  const [arr, setArr] = useState(data);

  const handleDeleteOne = (id) => {
    setArr(arr.filter((_) => _.id !== id));
  };

  const handleDeleteAll = () => {
    setArr([]);
  };

  return (
    <>
      <div>
        <ul>
          {arr.map((_, index) => (
            <li key={index}>
              <h2>{_.name}</h2>
              <button
                onClick={() => {
                  handleDeleteOne(_.id);
                }}
                className=""
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button onClick={handleDeleteAll} className="btn">
          Delete All
        </button>
      </div>
    </>
  );
};

export default ArrayExample;
