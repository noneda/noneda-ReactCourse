import { CustomHook } from "./hook";

const FetchData = () => {
  const { load, err, user } = CustomHook();
  return (
    <>
      {load && err ? (
        (err && <h2>There was an Error...</h2>) || (load && <h2>Loading...</h2>)
      ) : (
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <h4>Works at {user.company}</h4>
          <p>{user.bio}</p>
        </div>
      )}
    </>
  );
};

export default FetchData;
