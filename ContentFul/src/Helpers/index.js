import client from "../Shared";

export const getData = async () => {
  try {
    const { items } = await client.getEntries({
      content_type: "projects-contentful",
    });
 
    return items;
  } catch (err) {
    console.error(
      `Error Getting Data From ContentFul because => ${err.response}`
    );
  }
};
