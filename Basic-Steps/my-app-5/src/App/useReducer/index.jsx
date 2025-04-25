import hookUseReducer from "./hook";

const ExampleUseReducer = () => {
  const { state, dispatch } = hookUseReducer();
  return (
    <div>
      {state &&
        state.map((e) => (
          <div key={e.id} className="item">
            <h4>{e.name}</h4>
            <button
              onClick={() =>
                dispatch({
                  type: "OneByOne",
                  select: e.id,
                })
              }
            >
              Delete Me
            </button>
          </div>
        ))}
      <button
        className="btn btn-block"
        onClick={() => dispatch({ type: "All" })}
      >
        Delete All
      </button>
      <button
        className="btn btn-block"
        onClick={() => dispatch({ type: "Reload" })}
      >
        ReLoad
      </button>
    </div>
  );
};

export default ExampleUseReducer;
