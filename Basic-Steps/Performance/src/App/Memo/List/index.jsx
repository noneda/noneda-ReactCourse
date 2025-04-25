import PersonM from "./Person";
import { memo } from "react";

const ListM = ({ show, remove }) => {
  return (
    <div>
      {show.map((_) => (
        <PersonM key={_.id} {..._} remove={remove} />
      ))}
    </div>
  );
};

export default memo(ListM);
