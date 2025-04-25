import { ShowLinks, SubMenuToggle, SidebarToggle, Refresh } from "../../Hooks";
import { useRef } from "react";

const NavBar = () => {
  const { show, ChangeShow } = ShowLinks();
  const Pointer = useRef({ method: () => {} });
  const { subCh } = SubMenuToggle();
  const { sideCh } = SidebarToggle();

  const SubMethod = (op) => {
    Pointer.current.method = subCh;
    ChangeShow(op);
  };
  const SideMethod = () => {
    Pointer.current.method = sideCh;
    ChangeShow("All");
  };

  Refresh(Pointer.current, show);

  return (
    <nav>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={SideMethod}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </button>
        <div className="nav-links">
          <button
            className="nav-link"
            value="Product"
            onMouseEnter={(e) => SubMethod(e.target.value)}
            onMouseLeave={() => SubMethod("Clean")}
          >
            Product
          </button>
          <button
            className="nav-link"
            value="Solutions"
            onMouseEnter={(e) => SubMethod(e.target.value)}
            onMouseLeave={() => SubMethod("Clean")}
          >
            Solutions
          </button>
          <button
            className="nav-link"
            value="Resources"
            onMouseEnter={(e) => SubMethod(e.target.value)}
            onMouseLeave={() => SubMethod("Clean")}
          >
            Resources
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
