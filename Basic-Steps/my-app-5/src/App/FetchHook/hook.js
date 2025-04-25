import { useState, useEffect } from "react";
import { fetchUser } from "./util";

const CustomHook = () => {
  const [isLoad, setLoad] = useState(true);
  const [isErr, setErr] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchUser(setErr, setLoad, setUser);
  }, []);

  return {
    isLoad,
    isErr,
    user,
  };
};

export { CustomHook };
