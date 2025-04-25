import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Input</h4>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="text"
          id="email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-row">
        <label htmlFor="pass" className="form-label">
          Password
        </label>
        <input
          type="text"
          id="pass"
          className="form-input"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default Form;
