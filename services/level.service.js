import { URI_API } from "../utils/constants.js";

export const getAllLevels = async () => {
  try {
    const response = await fetch(`${URI_API}/level`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};

export const putLevel = async (id) => {
  try {
    const response = await fetch(`${URI_API}/level/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ level: id }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
