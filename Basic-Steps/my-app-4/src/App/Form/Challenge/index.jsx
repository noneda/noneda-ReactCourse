import { useState } from "react";

const ChallengeForm = () => {
  const [users, setUser] = useState([
    "Ray Craig",
    "Rachel Brooks",
    "Joseph Pierce",
  ]);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    users.find((_) => _ === name) === undefined
      ? setUser([...users, name])
      : setUser(users.filter((_) => _ !== name));
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h4>Users</h4>
      {users.map((_, index) => (
        <p key={index}>{_}</p>
      ))}

      <div className="form-row">
        <label htmlFor="user" className="form-label">
          Add User
        </label>
        <input
          type="text"
          id="user"
          className="form-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" className="btn btn-block">
          Add Or Delete
        </button>
      </div>
    </form>
  );
};

export default ChallengeForm;
