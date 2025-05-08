import { useSingle } from "../../../Hooks";

const Single = ({ id, isDone, title }) => {
  const { onChange, Remove } = useSingle(id);
  return (
    <div className="single-item">
      <input type="checkbox" checked={isDone} onChange={onChange} />
      <p style={{ textDecoration: isDone && "line-through" }}>{title}</p>
      <button className="btn remove.btn" onClick={Remove}>
        Delete
      </button>
    </div>
  );
};

export default Single;
