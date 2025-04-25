import { NavLinks } from "../Info";

const Links = ({ send }) => {
  return (
    <ul className={send ? "nav-links" : "footer-links"}>
      {NavLinks.map((_, index) => (
        <li key={index}>
          <a href={_.href} className={send ? "nav-link" : "footer-link"}>
            {_.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
