import { useState, useEffect } from "react";

const NewChallenge = () => {
  const [val, setVal] = useState(null);
  const FetchApi = async () => {
    try {
      const res = await fetch("https://api.github.com/users/QuincyLarson");
      if (!res.ok) throw new Error(`Status had a error  ${res.status}`);
      const send = await res.json();
      setVal(send);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <>
      <div>
        <h1>Fetch Data</h1>
        {val ? (
          <div>
            <img
              src={val.avatar_url}
              alt={val.login}
              style={{
                width: "150px",
                borderRadius: "25px",
              }}
            />
            <h2>{val.name}</h2>
            <h3>Works At {val.company}</h3>
            <p>{val.bio}</p>
          </div>
        ) : (
          <h2>Loading ...</h2>
        )}
      </div>
    </>
  );
};

export default NewChallenge;
