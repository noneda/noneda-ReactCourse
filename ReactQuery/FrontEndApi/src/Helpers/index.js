import Shared, { HEADERS } from "../Shared";

export const getData = async () => {
  try {
    const { data, status } = await Shared.get();
    if (status === 400) throw new Error("Had error with Api Get");
    if (status === 200) return data;
  } catch (err) {
    console.error("Error with: " + err.response);
    return [];
  }
};

export const createTasks = async (title) => {
  try {
    const { status, data } = await Shared.post("/", { title });

    if (status === 400) throw new Error("Had Error With Api Post");
    if (status === 200) console.log(data);
  } catch (err) {
    console.error("Error with: " + err.response);
  }
};

export const isDonePatch = async ({id, isDone}) => {
  try {
    const { status, data } = await Shared.patch(`/${id}`, { isDone });
    if (status === 400) throw new Error("Had Error with Api Patch");
    if (status === 200) console.log(data);
  } catch (err) {
    console.error("Error with : " + err.response);
  }
};

export const deleteTask = async (id) => {
  try {
    const { status, data } = await Shared.delete(`/${id}`);
    if (status === 400) throw new Error("Had Error with Api Delete");
    if (status === 200) console.log(data);
  } catch (err) {
    console.error("Error with: " + err.response);
  }
};
