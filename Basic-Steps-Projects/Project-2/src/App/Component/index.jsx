import { useState } from "react";

const Component = (props) => {
  const [moreText, setMoreText] = useState(false);

  const { id, image, info, name, price, remove } = props;

  const handleMoreTextButton = () => {
    setMoreText(!moreText);
  };

  const handleRemoveItem = () => {
    remove(id);
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">$ {price}</span>
      <article className="tour-info">
        <h5>{name}</h5>
        <p>
          {moreText ? info : info.substring(0, 200) + "..."}
          <button className="info-btn" onClick={handleMoreTextButton}>
            Read More
          </button>
        </p>
        <button className="delete-btn btn-block btn" onClick={handleRemoveItem}>
          Not Interested
        </button>
      </article>
    </article>
  );
};

export default Component;
