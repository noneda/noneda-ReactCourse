import "./base.css";
import { useState } from "react";

const Events = ({ setTitle }) => {
  const [isSearch, setSearch] = useState("");

  const handleInputSub = (e) => {
    setSearch(e.target.value);
  };
  const handleFormSubmit = () => {
    setTitle(isSearch);
  };
  return (
    <>
      <section>
        <h1>Typical Form</h1>
        <div className="Box">
          <input
            type="text"
            onChange={handleInputSub}
            style={{ margin: "1rem 0" }}
            placeholder="Search"
          />
          <button className="submit" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Events;
