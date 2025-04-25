const Items = ({ items, Delete, Check }) => {
  return (
    <div className="items">
      {items.map((_, index) => {
        return (
          <div className="single-item" key={index}>
            <input
              type="checkbox"
              name="check"
              value={_[1]}
              onChange={() => Check(index)}
            />
            <p
              style={
                _[1]
                  ? {
                      textTransform: "capitalize",
                      textDecoration: "line-through",
                    }
                  : {
                      textTransform: "capitalize",
                    }
              }
            >
              {_[0]}
            </p>
            <button
              className="btn remove-btn"
              type="button"
              onClick={() => Delete(_[0])}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Items;
