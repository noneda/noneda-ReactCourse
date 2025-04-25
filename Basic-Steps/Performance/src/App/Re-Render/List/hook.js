import { data } from "../../../Utils";
import { useState } from "react";

export const hookPerson = () => {
  const [person, setPerson] = useState(data);

  return person;
};
