import { useRef, useCallback } from "react";
import Shared, { HEADERS } from "../../Shared";

const URL = "axios-tutorial-post/";

const useHandleForm = () => {
  const name = useRef(null);
  const email = useRef(null);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const json = { name: name.current.value, email: email.current.value };
    try {
      const { data, status } = Shared.post(URL, json);
      if (status === 201) console.log(data);
      if (status === 400) throw new Error("Error with Post");
    } catch (err) {
      console.error(err.response);
    }
  }, []);

  return { name, email, handleSubmit };
};

export default useHandleForm;
