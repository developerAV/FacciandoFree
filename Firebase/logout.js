import { signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

// const logout = document.querySelector("#logout");

export const logout = async (escena) => {
  try {
    await signOut(auth);

    await escena.scene.start("login"); // Usar escena.scene en lugar de escena.escene
  } catch (error) {
    console.log(error);
  }
};
