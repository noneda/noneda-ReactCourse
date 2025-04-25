import LoginSettings from "./hook";

const ChallengeNavBar = () => {
  const { user, LogOut, Login } = LoginSettings();

  return (
    <nav className="navbar">
      <h4>Context Api</h4>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <div className="user-container">
          <p>{user === null ? `Please Login` : `Hello There, ${user.name}`}</p>
          <button className="btn" onClick={user === null ? Login : LogOut}>
            {user === null ? "Login" : "LogOut"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ChallengeNavBar;
