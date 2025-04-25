import { Links, Social } from "./Uls";
import { AsideHook } from "../../Hooks";
const Aside = () => {
  const { Aside, change } = AsideHook();
  return (
    <aside className={`sidebar ${Aside && "show-sidebar"}`}>
      <div className="sidebar-header">
        <img
          src="https://react-vite-projects-12-sidebar.netlify.app/assets/logo-ddc33e51.svg"
          alt="Codding Addict"
          className="logo"
        />
        <button className="close-btn" onClick={change}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 352 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
          </svg>
        </button>
      </div>
      <Links />
      <Social />
    </aside>
  );
};

export default Aside;
