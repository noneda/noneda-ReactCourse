const PersonM = ({ name, id, remove }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button
        onClick={() => {
          remove(id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default PersonM;
