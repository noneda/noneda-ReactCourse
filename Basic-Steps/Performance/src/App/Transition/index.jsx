import { hookLatestReact } from "./hook";
const LatestReact = () => {
  const { text, items, handleChange, load } = hookLatestReact();
  return (
    <section>
      <form className="form">
        <input
          type="text"
          className="form-input"
          value={text}
          onChange={handleChange}
        />
      </form>
      <h4>Items Below</h4>

      {load ? (
        <h4> Loading... </h4>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            marginTop: "2rem",
          }}
        >
          {items}
        </div>
      )}
    </section>
  );
};
export default LatestReact;
