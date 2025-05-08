import React from "react";
import useHandleForm from "../../Hooks/Form";

const Form = () => {
  const { name, email, handleSubmit } = useHandleForm();
  return (
    <>
      <h2 className="text-center">Post Request</h2>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-input" ref={name} />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" ref={email} />
        </div>
        <button type="submit" className="btn btn-block">
          Login
        </button>
      </form>
    </>
  );
};

export default Form;
