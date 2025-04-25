import { Services } from "../../../Utils/Info";

const Article = () =>
  Services.map((_, index) => (
    <article key={index} className="service">
      <span className="service-icon">
        <i className={_.icon}></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{_.title}</h4>
        <p className="service-text">{_.text}</p>
      </div>
    </article>
  ));

export default Article;
