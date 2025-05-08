import { useRef } from "react";
import { getData, createTasks, isDonePatch, deleteTask } from "../Helpers";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export const useSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["default"],
    queryFn: () => getData(),
  });

  return [data, isLoading, isError];
};

export const useForm = () => {
  const queryClient = useQueryClient();
      queryClient.invalidateQueries({ queryKey: ["default"] });

  const input = useRef(null);

  const { mutate, isLoading } = useMutation({
    mutationFn: createTasks,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["default"] });
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate(input.current.value);
  };

  return [input, onSubmit, isLoading];
};

export const useItem = (id, isDone) => {
  const queryClient = useQueryClient();

  const { mutate: change, isLoading: loadOn } = useMutation({
    mutationFn: isDonePatch,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["default"] });
    },
  });

  const { mutate: remove, isLoading: loadRe } = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["default"] });
    },
  });

  const onChange = () => {
    change({ id, isDone });
  };
  const Remove = () => {
    remove(id);
  };
  return [onChange, Remove, loadOn, loadRe];
};
