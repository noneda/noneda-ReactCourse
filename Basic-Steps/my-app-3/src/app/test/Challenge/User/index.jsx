import { useState } from "react";

const fetchData = {
  user: "Admin",
  pass: "0000",
};

const User = () => {
  const [user, setUser] = useState({ name: "", pass: "" });
  const [find, setFind] = useState(false);
  const [login, setLogin] = useState(false);

  const handleUser = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handlePass = (e) => {
    setUser({ ...user, pass: e.target.value });
  };

  const Validation = () => {
    user.name === fetchData.user && user.pass === fetchData.pass
      ? setLogin(true)
      : setLogin(false);
  };
  const handleButton = () => {
    setFind(true);
    setTimeout(() => {
      setFind(false);
      Validation();
    }, 2000);
  };

  return (
    <div>
      <input
        id="user"
        type="text"
        placeholder="Insert User"
        onChange={handleUser}
      />
      <br />
      <input
        id="pass"
        type="text"
        placeholder="Insert Password"
        onChange={handlePass}
      />
      <br />

      <button className="btn" onClick={handleButton}>
        Login
      </button>
      {find ? <div className="loading"></div> : <div> </div>}
      <div className={"alert " + (login ? "alert-success" : "alert-danger")}>
        {login ? "Login Successful" : "User or Password don´t exist"}
      </div>
    </div>
  );
};

export default User;
