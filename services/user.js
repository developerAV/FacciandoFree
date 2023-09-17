import { URI_API } from "../utils/constants.js";

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${URI_API}/user/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
export const getAllUsers = async () => {
  try {
    const response = await fetch(`${URI_API}/user`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
export const getUserFirebase = async (id) => {
  try {
    const response = await fetch(`${URI_API}/user/firebase/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
export const postUser = async (user) => {
  const newUser = await fetch(
    "https://server-api-kuoy-dev.fl0.io/facciando/user",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUserFirebase: user.uid,
        date_birth: "12/12/12",
        actualLevel: 1,
        name: user.displayName,
        actualMission: 1,
        imageUrl: user.photoURL,
      }),
    }
  );
  const data = await newUser.json();
  return data;
};

export const getTop10UserByScore = async () => {
  try {
    const response = await fetch(`${URI_API}/user/top10`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(
      "There was a problem with the fetch operation:",
      error.message
    );
  }
};
