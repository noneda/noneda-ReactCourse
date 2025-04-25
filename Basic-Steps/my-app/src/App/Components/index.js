import "./base.css";

const Book = (props) => {
  return (
    <article>
      <h1>{props.Title}</h1>
      <h4>{props.Author}</h4>
      <img src={props.img} alt={props.title} />
      <span className="number">{props.number + 1}</span>
    </article>
  );
};

export default Book;
