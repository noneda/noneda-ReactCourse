import { useForm } from "../../Hooks";

const Form = () => {
  const [input, setInput, onSubmit] = useForm();
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={onSubmit}>
        <input
          className="form-input search-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Insert Animal"
        />
        <button className="btn" type="submit">
          Search
        </button>
      </form>
    </section>
  );
};

export default Form;
