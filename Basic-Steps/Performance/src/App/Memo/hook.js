import { useState, useCallback, useMemo } from "react";
import { data } from "../../Utils";

export const hookPerson = () => {
  const [person, setPerson] = useState(data);

  const remove = useCallback(
    (id) => {
      console.log(id);

      const newP = person.filter((p) => p.id !== id);
      setPerson(newP);
    },
    [person]
  );

  return { person, remove };
};

export const hookCount = () => {
  const [count, setCount] = useState(0);

  const counter = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return { count, counter };
};

export const LowFunction = () => {
  const Low = () => {
    let send = 0;
    for (let index = 0; index < 1000000000; index++) {
      send += 1;
    }

    return send;
  };

  return useMemo(() => Low(), []);
};
