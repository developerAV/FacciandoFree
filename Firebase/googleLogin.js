import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";

export const loginGoogle = async(escena) => {

  const provider = new GoogleAuthProvider();
//"google sign in" mostrar en el prompt de google el usuario y no el dominio de la cuenta que se esta usando
  provider.setCustomParameters({
    prompt: "select_account",
  });


  try {
    const credentials = await signInWithPopup(auth, provider)
    // console.log(credentials);
    console.log("google sign in");
    escena.scene.start("intro");
    
  } catch (error) {
    console.log(error);
  }

}