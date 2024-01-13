import { URI_API } from "../utils/constants.js";

export async function getEmployees() {
  try {
    const response = await fetch(`${URI_API}/employee`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
