import { useState } from "react";

const Component = (props) => {
  const [show, setShow] = useState(false);
  const { Title, text } = props;
  return (
    <article className="question">
      <header>
        <h5>{Title}</h5>
        <button
          className="question-btn"
          onClick={() => {
            setShow(!show);
          }}
        >
          {!show ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              t="1551322312294"
              viewBox="0 0 1024 1024"
              version="1.1"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>
              <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
              <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
            </svg>
          )}
        </button>
      </header>
      {show && <p>{text}</p>}
    </article>
  );
};

export default Component;
