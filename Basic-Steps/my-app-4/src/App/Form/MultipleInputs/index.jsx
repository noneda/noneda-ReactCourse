import { useState } from "react";

const MultipleInputs = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const Save = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };
  return (
    <form className="form">
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          defaultValue={values.name}
          onChange={Save}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          defaultValue={values.email}
          onChange={Save}
        />
      </div>
      <div className="form-row">
        <label htmlFor="pass" className="form-label">
          Password
        </label>
        <input
          className="form-input"
          type="text"
          id="pass"
          defaultValue={values.pass}
          onChange={Save}
        />
      </div>
      <button
        className="btn btn-block"
        onClick={(e) => {
          e.preventDefault();
          console.log(values);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default MultipleInputs;
