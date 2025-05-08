import { useItem } from "../../Hooks";
import Single from "./Single";
const Items = () => {
  const { state } = useItem();

  return (
    <div className="items">
      {state.map((_) => (
        <Single key={_.id} {..._} />
      ))}
    </div>
  );
};

export default Items;
