import { useState } from "react";
import Items from "./Items";

const App = () => {
  const [New, setNew] = useState("");
  const [List, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...List, [New, false]]);
    setNew("");
  };

  const DeleteItem = (_) => {
    setList(List.filter((l) => l[0] !== _));
  };

  const CheckItem = (row) => {
    let change = [...List];
    change[row][1] = !change[row][1];
    setList(change);
  };

  return (
    <section className="section-center">
      <div className="Toastify">
        <form onSubmit={handleSubmit}>
          <h4>Grocery Bud</h4>
          <div className="form-control">
            <input
              type="text"
              name="New"
              id="New"
              className="form-input"
              value={New}
              onChange={(e) => setNew(e.target.value)}
            />
            <button type="submit" className="btn">
              add item
            </button>
          </div>
        </form>
        {List.length > 0 && (
          <Items items={List} Delete={DeleteItem} Check={CheckItem} />
        )}
      </div>
    </section>
  );
};

export default App;
