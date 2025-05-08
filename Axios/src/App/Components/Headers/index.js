import React from "react";

import RandomJoke from "../../Hooks/Headers";

const Headers = () => {
  const { is, getRandomJoke } = RandomJoke();
  return (
    <>
      <section className="section text-center">
        <button className="btn" onClick={getRandomJoke}>
          RandomJoke
        </button>
        <p className="dad-joke">{is}</p>
      </section>
    </>
  );
};

export default Headers;
