const Component = (props) => {
  const { children, data } = props;
  return (
    <>
      {data.map((_, index) => {
        const { img, name, title, text, order } = _;
        return (
          <article
            key={index}
            style={{
              transform: `translateX(${order}px)`,
              opacity: order === 0 ? 1 : 0,
            }}
          >
            <img src={img} alt={name} className="person-img" />
            <h5>{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{text}</p>
            {children}
          </article>
        );
      })}
    </>
  );
};

export default Component;
