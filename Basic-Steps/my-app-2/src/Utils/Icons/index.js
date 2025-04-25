import { NavIcons } from "../Info";

const Icons = ({ send }) => {
  return (
    <ul className={send ? "nav-icons" : "footer-icons"}>
      {NavIcons.map((_, index) => (
        <li key={index}>
          <a href={_.href} target="_blank" className="nav-icon">
            <i className={_.className}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Icons;
