import { dataLinks, dataSocials } from "./data";

export const Links = () => (
  <ul className="links">
    {dataLinks.map((_, i) => (
      <li key={i}>
        <a href={_.text}>
          {_.icon} {_.text}
        </a>
      </li>
    ))}
  </ul>
);

export const Social = () => (
  <ul className="social-icons">
    {dataSocials.map((_, i) => (
      <li key={i}>
        <a href={_.url}>{_.icon}</a>
      </li>
    ))}
  </ul>
);
