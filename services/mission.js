import { URI_API } from "../utils/constants.js";

export const getMissionByLevel = async (id) => {
  try {
    const response = await fetch(`${URI_API}/mission/level/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
