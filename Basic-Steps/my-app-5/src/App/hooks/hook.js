import { useState } from "react";

const useToggle = (def) => {
  const [show, setShow] = useState(def);

  const toggle = () => setShow(!show);

  return { show, toggle };
};

export { useToggle };
