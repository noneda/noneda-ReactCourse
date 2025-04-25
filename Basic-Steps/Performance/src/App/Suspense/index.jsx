import { Suspense, lazy } from "react";
const SlowerItem = lazy(() => import("./Slower"));
import hookSlowComponent from "./hook";
import Loading from "./Loading";
import Form from "./Form";

const SuspenseComponent = () => {
  const { item, handleChange } = hookSlowComponent();
  return (
    <>
      <Form handleChange={handleChange} />
      <Suspense fallback={<Loading />}>
        <SlowerItem>{item} </SlowerItem>
      </Suspense>
    </>
  );
};

export default SuspenseComponent;
