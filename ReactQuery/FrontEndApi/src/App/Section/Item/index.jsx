import { useItem } from "../../../Hooks";

const Item = ({ id, isDone, title }) => {
  const [onChange, Remove, loadOn, loadRe] = useItem(id, !isDone);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isDone}
        onChange={onChange}
        disabled={loadOn}
      />
      <p style={{ textDecoration: isDone && "line-through" }}>{title}</p>
      <button className="btn remove-btn" onClick={Remove} disabled={loadRe}>
        Delete
      </button>
    </div>
  );
};

export default Item;
