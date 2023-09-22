import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth } from "./firebase.js";

import { getUserFirebase } from "../services/user.js";
import { getAllLevels } from "../services/level.js";
import { postUser } from "../services/user.js";

export const loginGoogle = async (escena) => {
  const provider = new GoogleAuthProvider();

  try {
    
  // provider.setCustomParameters({
  //   prompt: "select_account",
  // });

    const credentials = await signInWithPopup(auth, provider);
 
    window.imageUrl = credentials.user.photoURL;
    window.name = credentials.user.displayName;

    window.userId = credentials.user.uid;
    window.listLevel = await getAllLevels();
    // console.log(window.listLevel);
    // let user = await getUserFirebase(credentials.user.uid);
    if (!window.user) {
      window.user = await postUser(credentials.user.uid);
      //await getUserFirebase(window.userId);
    }
    console.log(window.user.school);
    if(!window.user.school){
      console.log("no tiene escuela");
      escena.scene.start("question");
      return;
    }else{
      escena.scene.start("intro");
      console.log("tiene escuela");
    }
      
    return;
    // escena.scene.start("cubicle");


  } catch (error) {
    console.log(error);
  }
};
