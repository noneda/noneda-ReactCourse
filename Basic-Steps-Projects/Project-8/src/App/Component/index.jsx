import React from "react";

const Component = ({ send }) => {
  return (
    <article className="lorem-text">
      {send.map((_, index) => (
        <p key={index}>{_}</p>
      ))}
    </article>
  );
};

export default Component;
