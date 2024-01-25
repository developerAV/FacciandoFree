import { URI_API } from "../utils/constants.js";

export const getForum = async () => {
    try {
        const response = await fetch(`${URI_API}/forum`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
    }

export const getForumById = async (id) => {
    try {
        const response = await fetch(`${URI_API}/forum/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
    }

export const postForum = async (forum) => {
    try {
        const response = await fetch(`${URI_API}/forum`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(forum),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
    }

export const putForum = async (id, content) => {  
    try {
        const response = await fetch(`${URI_API}/forum/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(content),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error.message);
    }
    }
