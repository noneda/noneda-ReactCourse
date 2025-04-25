const FetchData = async () => {
  const url = "https://www.course-api.com/react-tours-project";

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(res.status);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export default FetchData;
