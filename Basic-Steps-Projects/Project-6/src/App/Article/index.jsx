import Description from "./Description";

const Article = ({ title, company, dates, duties }) => {
  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <div>
        {duties.map((_, index) => (
          <Description key={index} Text={_} />
        ))}
      </div>
    </article>
  );
};

export default Article;
