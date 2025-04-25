import { useToggle } from "./hook";

const HooksUse = () => {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h4>Toggle Custom Hooks</h4>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && <h4>Some Stuff</h4>}
    </div>
  );
};

export default HooksUse;
