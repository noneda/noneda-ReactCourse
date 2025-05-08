export const Type = {
  GET_DATA: "GetData",
  ADD: "Add",
  DONE: "Done",
  REMOVE: "Remove",
  REMOVE_ALL: "RemoveAll",
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "GetData":
      return action.value;
    case "Add":
      return [...state, action.value];
    case "Done":
      return state.map((e) => {
        if (e.id === action.id) {
          const isDone = !e.isDone;
          return { ...e, isDone };
        }
        return e;
      });

    case "Remove":
      return state.filter((e) => e.id !== action.id);
      
    case "RemoveAll":
      break;
    default:
      throw new Error(`Error because does not exists a Type : ${action.type}`);
  }
};

export default Reducer;
