import { hookForm } from "../hook";

const Form = () => {
  const { input, onSubmit } = hookForm();
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="text" className="form-input" ref={input} />
        <button className="btn btn-block" type="submit">
          submit
        </button>
      </div>
    </form>
  );
};

export default Form;
