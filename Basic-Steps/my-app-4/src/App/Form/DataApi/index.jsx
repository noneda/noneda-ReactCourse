import { useState } from "react";

const DataApi = () => {
  const [value, setValue] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input className="form-input" type="text" name="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input className="form-input" type="email" name="email" />
      </div>
      <div className="form-row">
        <label htmlFor="pass" className="form-label">
          Password
        </label>
        <input className="form-input" type="text" name="pass" />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default DataApi;
