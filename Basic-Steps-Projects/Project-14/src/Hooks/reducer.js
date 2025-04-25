const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return state
        .map((e) => {
          if (e.id === action.select) {
            const updatedAmount = e.amount + 1;
            return { ...e, amount: updatedAmount };
          }
          return e;
        })
        .filter(Boolean);

    case "Decrease":
      return state
        .map((e) => {
          if (e.id === action.select) {
            const updatedAmount = e.amount - 1;
            if (updatedAmount <= 0) {
              return null;
            }
            return { ...e, amount: updatedAmount };
          }
          return e;
        })
        .filter(Boolean);

    case "Remove":
      return state.filter((e) => e.id !== action.select);

    case "DeleteAll":
      return [];

    case "Print":
      return action.add;

    default:
      new Error("Don´t Detect: " + action.type);
      break;
  }
};

export default reducer;
