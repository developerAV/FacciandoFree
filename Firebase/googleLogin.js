import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth } from "./firebase.js";

export const loginGoogle = async (escena) => {
  const provider = new GoogleAuthProvider();
  //"google sign in" mostrar en el prompt de google el usuario y no el dominio de la cuenta que se esta usando
  provider.setCustomParameters({
    prompt: "select_account",
  });

  try {
  

    const credentials = await signInWithPopup(auth, provider);
    window.imageUrl = credentials.user.photoURL;
    window.name = credentials.user.displayName;

    window.userId = credentials.uid;
    window.listLevel = await getAllLevels();
    window.user = await getUserFirebase(window.userId);

    escena.scene.start("intro");
  } catch (error) {
    console.log(error);
  }
};
