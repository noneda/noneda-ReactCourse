const URL = "https://www.course-api.com/react-useReducer-cart-project";

const fetchData = async () => {
  try {
    const response = await fetch(URL);
    if (!response.ok) {
      new Error("We have Error with a API Response!!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error : " + error);
  }
};

export default fetchData;
