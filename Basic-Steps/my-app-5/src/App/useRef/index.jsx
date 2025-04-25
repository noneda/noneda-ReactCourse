import { useRef, useState, useEffect } from "react";

const Ref = () => {
  const refCont = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refCont.current.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-input" ref={refCont} />
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Ref;
