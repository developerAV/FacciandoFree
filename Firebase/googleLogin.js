import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

import { auth } from "./firebase.js";

import { getUserFirebase } from "../services/user.js";
import { getAllLevels } from "../services/level.js";
import { postUser } from "../services/user.js";
import { getMissionByLevel } from "../services/mission.js";

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
    window.user = await getUserFirebase(credentials.user.uid);
    window.listMissions = await getMissionByLevel(
      window.listLevel[window.user.actualLevel - 1]._id
    );
    console.log("user", window.user);
    if (!window.user) {
      window.user = await postUser(credentials.user);
      //await getUserFirebase(window.userId);
    }

    if (!window.user.school) {
      console.log("no tiene escuela");
      escena.scene.start("question");
      return;
    } else {
      escena.scene.start("intro");
      console.log("tiene escuela");
    }

    return;
    // escena.scene.start("cubicle");
  } catch (error) {
    console.log(error);
  }
};
