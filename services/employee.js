const uri = "https://server-api-kuoy-dev.fl0.io/facciando/employee";

export async function getEmployees() {
  try {
    const response = await fetch(uri);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

