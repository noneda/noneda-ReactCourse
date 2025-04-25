import { useState, useEffect } from "react";

const Challenge = () => {
  const [val, setVal] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://api.github.com/users");
      if (!res.ok)
        throw new Error(`Status... Don´t Load?? \n Because ${res.status} `);

      const data = await res.json();
      setVal(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Fetch Data Example</h1>
        <h2>Github Users</h2>
      </div>
      <ul className="users">
        {val.length > 0 ? (
          val.map((_, index) => (
            <li key={index}>
              <img src={_.avatar_url} alt={_.login} />
              <h5>{_.login}</h5>
              <a href={_.html_url}> Profile</a>
            </li>
          ))
        ) : (
          <li>Loading </li>
        )}
      </ul>
    </>
  );
};

export default Challenge;
