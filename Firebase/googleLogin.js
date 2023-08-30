import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
// import { showMessage } from "./showMessage.js";

// const googleButton = document.querySelector("#googleLogin");
export const loginGoogle = async(escena) => {

  const provider = new GoogleAuthProvider();
  try {
    const credentials = await signInWithPopup(auth, provider)
    // console.log(credentials);
    console.log("google sign in");
    escena.scene.start("intro");
    // Close the login modal
    // const modalInstance = bootstrap.Modal.getInstance(googleButton.closest('.modal'));
    // modalInstance.hide();

    // show welcome message
    // showMessage("Welcome " + credentials.user.displayName);
  } catch (error) {
    console.log(error);
  }

}