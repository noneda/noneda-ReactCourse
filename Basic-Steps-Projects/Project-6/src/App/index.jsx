import { useState, useEffect } from "react";
import { fetchData } from "./Utils";
import Buttons from "./Buttons";
import Article from "./Article";

const App = () => {
  const [Json, setJson] = useState([]);
  const [select, setSelect] = useState(0);
  const [show, setShow] = useState(null);

  useEffect(() => {
    const StartApp = async () => {
      const data = await fetchData();
      setJson(data);
    };
    StartApp();
  }, []);

  useEffect(() => {
    if (Json.length > 0) {
      setShow(Json[select]);
    }
  }, [select, Json]);

  useEffect(() => {
    const StartApp = async () => {
      const data = await fetchData();
      setJson(data);
    };
    StartApp();
  }, []);

  return (
    <section className="jobs-center">
      {Json.length > 0 ? (
        <>
          <div className="btn-container">
            {Json.map((_, index) => (
              <Buttons
                key={index}
                select={select}
                setSelect={setSelect}
                name={_.title}
                index={index}
              />
            ))}
          </div>
          {show && <Article {...show} />}
        </>
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};

export default App;
