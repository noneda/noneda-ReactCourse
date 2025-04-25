import { hookCount } from "./hook";

const ButtonRr = () => {
  const { count, counter } = hookCount();
  return (
    <button className="btn" onClick={counter} style={{ margin: "1rem" }}>
      Count {count}
    </button>
  );
};

export default ButtonRr;
