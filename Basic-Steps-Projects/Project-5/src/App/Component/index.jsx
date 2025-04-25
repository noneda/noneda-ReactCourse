const Component = (props) => {
  const { name, description, price, img } = props;
  return (
    <article className="menu-item">
      <img src={img} alt={name} className="img" />
      <div className="item-info">
        <header>
          <h5>{name}</h5>
          <span className="item-price"> $ {price}</span>
        </header>
        <p className="item-text">{description}</p>
      </div>
    </article>
  );
};

export default Component;
