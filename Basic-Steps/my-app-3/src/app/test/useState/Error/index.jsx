const ErrorExample = () => {
  let count = 0;
  const handleCount = () => {
    count += 1;
    console.log(count);
  };

  return (
    <>
      <h2>{count}</h2>
      <button className="btn" type="button" onClick={handleCount}>
        Click Me
      </button>
    </>
  );
};

export default ErrorExample;
