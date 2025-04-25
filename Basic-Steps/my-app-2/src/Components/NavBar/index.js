import Icons from "../../Utils/Icons";
import Links from "../../Utils/Links";
import logo from "../../Image/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <Links send={true} />
        <Icons send={true} />
      </div>
    </nav>
  );
};

export default NavBar;
