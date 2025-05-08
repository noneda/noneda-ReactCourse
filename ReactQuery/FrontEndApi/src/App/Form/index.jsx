import { useForm } from "../../Hooks";

const Form = () => {
  const [input, onSubmit, load] = useForm();
  return (
    <form onSubmit={onSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input type="text" className="form-input" ref={input} />
        <button type="submit" className="btn" disabled={load}>
          add task
        </button>
      </div>
    </form>
  );
};

export default Form;
