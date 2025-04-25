import React from "react";

const SlowerItem = () => {
  return Array.from({ length: 10000 }, (_, index) => (
    <div key={index}>
      <img src="/vite.svg" alt="..." />
    </div>
  ));
};

export default SlowerItem;
