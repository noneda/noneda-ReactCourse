import { useSection } from "../../Hooks";
import Item from "./Item";

const Section = () => {
  const [state, load, err] = useSection();

  if (load) return <div className="loading" />;
  if (err) return <p>Error...</p>;
  return (
    <div className="items">
      {state.map((_) => (
        <Item key={_.id} {..._} />
      ))}
    </div>
  );
};

export default Section;
