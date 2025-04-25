import { data } from "../../../Utils";
const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      const NewId = state.length + 1;
      return [...state, { id: NewId, name: action.select }];
    case "Restore":
      return [...data];
    default:
      new Error("Don´t exist option: " + action.select);
      return [];
  }
};

export default reducer;
