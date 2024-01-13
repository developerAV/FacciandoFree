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

export const putMission = async (id) => {
  try {
    const response = await fetch(`${URI_API}/mission/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mission: id }),
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
