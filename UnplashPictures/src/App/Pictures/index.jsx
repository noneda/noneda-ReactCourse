import { memo } from "react";

const Pictures = ({ data, isLoading }) => {
  if (isLoading) {
    return <div className="loading" />;
  }
  return (
    <section className="image-container">
      {data.map((picture) => (
        <img
          key={picture.id}
          src={picture.urls.regular}
          alt={picture.alt_description}
          className="img"
        />
      ))}
    </section>
  );
};

export default memo(Pictures);
