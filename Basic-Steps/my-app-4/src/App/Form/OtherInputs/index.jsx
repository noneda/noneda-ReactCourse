import { useState } from "react";

const Framework = [" ", "react", "angular", "vue", "svelte"];

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState(" ");

  return (
    <div>
      <form action="" className="form">
        <h4>Other Inputs</h4>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={(e) => setShipping(e.target.checked)}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            defaultValue={framework}
            onChange={(e) => setFramework(e.target.value)}
          >
            {Framework.map((_, index) => (
              <option key={index}>{_}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;
