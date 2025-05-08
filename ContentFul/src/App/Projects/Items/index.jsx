import { memo } from "react";
const Items = ({ title, url, picture }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer" className="project">
      <img
        src={picture.fields.file.url}
        alt={picture.fields.title}
        className="img"
      />
      <h5>{title}</h5>
    </a>
  );
};

export default memo(Items);
