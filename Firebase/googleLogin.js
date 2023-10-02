//firebase
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebase.js";

//services
import { getUserFirebase } from "../services/user.js";
import { getAllLevels } from "../services/level.js";
import { postUser } from "../services/user.js";
import { getMissionByLevel } from "../services/mission.js";

import { navbar } from "../scenes/components/common/navbar.js";

export const loginGoogle = async (escena) => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);

    window.imageUrl = credentials.user.photoURL;
    window.name = credentials.user.displayName;
    window.userId = credentials.user.uid;
    window.listLevel = await getAllLevels();
    window.user = await getUserFirebase(credentials.user.uid);
    window.listMissions = await getMissionByLevel(
      window.listLevel[window.user.actualLevel - 1]._id
    );
    if (!window.user) {
      window.user = await postUser(credentials.user);
    }

    if (!window.user.school) {
      escena.scene.start("question");
      return;
    } else {
      escena.scene.start("intro");
    }

    return;
  } catch (error) {
    console.log(error);
  }
};
