import { hookCount, hookPerson, LowFunction } from "./hook";
import ListM from "./List";

const ReactMemo = () => {
  const { count, counter } = hookCount();
  const { person, remove } = hookPerson();
  const lower = LowFunction();
  return (
    <>
      <section>
        <button className="btn" onClick={counter} style={{ margin: "1rem" }}>
          Count {count}
        </button>
      </section>
      <ListM show={person} remove={remove} />
    </>
  );
};

export default ReactMemo;
