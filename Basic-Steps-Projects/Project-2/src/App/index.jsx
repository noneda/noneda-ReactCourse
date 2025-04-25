import Component from "./Component";
import FetchData from "../Utils";

import { useState, useEffect } from "react";

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  const [remove, setRemove] = useState("");

  const StartApp = async () => {
    const a = await FetchData();
    setJsonData(a);
  };

  const RemoveItem = () => {
    setJsonData(jsonData.filter((_) => _.id !== remove));
  };

  useEffect(() => {
    StartApp();
  }, []);

  useEffect(RemoveItem, [remove]);

  return (
    <main>
      <section>
        <div className="title">
          <h2>{jsonData.length === 0 ? "No tours left" : "Our Tours"}</h2>
          <div className="underline" />
        </div>
        <div className="tours">
          {jsonData.length === 0 ? (
            <button
              className="btn"
              onClick={() => {
                StartApp();
              }}
            >
              Refresh
            </button>
          ) : (
            jsonData.map((_, index) => (
              <Component {..._} key={index} remove={setRemove} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default App;
