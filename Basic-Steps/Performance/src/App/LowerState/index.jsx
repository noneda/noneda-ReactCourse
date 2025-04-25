import Form from "./Form";
import ListLS from "./List";

import MainLowerState from "./Context";

const LowerState = () => {
  return (
    <section>
      <MainLowerState>
        <Form />
        <ListLS />
      </MainLowerState>
    </section>
  );
};

export default LowerState;
