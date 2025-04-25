import { hookListLS } from "../hook";
import PersonLS from "./Person";
const ListLS = () => {
  const { state } = hookListLS();

  return (
    <div>
      {state.map((_) => (
        <PersonLS key={_.id} {..._} />
      ))}
    </div>
  );
};

export default ListLS;
