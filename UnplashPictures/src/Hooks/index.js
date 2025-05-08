import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useCallback } from "react";
import { getData } from "../Helpers";
import { useGlobal } from "../Contexts";

export const usePicture = () => {
  const [input] = useGlobal();
  const { data, isLoading } = useQuery({
    queryKey: ["default"],
    queryFn: () => getData(input),
  });
  return [data, isLoading];
};

export const useToggle = () => {
  const [theme, setTheme] = useState(true);
  const toggle = useCallback(() => {
    setTheme(!theme);
    if (!theme) document.body.className = "";
    if (theme) document.body.className = "dark-theme";
    console.log(document.body.className);
  }, [theme]);

  return [theme, toggle];
};

export const useForm = () => {
  const [input, setInput] = useGlobal();
  const query = useQueryClient();
  const onSubmit = (e) => {
    e.preventDefault();
    query.invalidateQueries({
      queryKey: ["default"],
    });
  };

  return [input, setInput, onSubmit];
};
