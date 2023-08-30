import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "./Firebase/firebase.js";
import './Firebase/googleLogin.js';

import { Login } from "./scenes/login.js";
import { Intro } from "./scenes/intro.js";
import { Aula } from "./scenes/classroom.js";
import { ComputerRoom } from "./scenes/computer_room.js";
import { Laboratorio1 } from "./scenes/electronic_room.js";
import { mainHallway1 } from "./scenes/mainHallway1.js";
import { Hallway2 } from "./scenes/hallway2.js";
import { FloorHallway2 } from "./scenes/FloorHallway2.js";
import { AdministrativeRoom } from "./scenes/administrative_room.js";
import { Hallway300 } from "./scenes/hallway300.js";
import { Cubicle } from "./scenes/cubicle.js";
import { Auditorium2 } from "./scenes/auditoruim2.js";


// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  if (user) {
    // loginCheck(user);
    try {
      // console.log("user logged in: ", user);
      game.scene.start("intro");
      // const querySnapshot = await getDocs(collection(db, "posts"));
      // setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    console.log("user logged out");
    // setupPosts([]);
    // loginCheck(user);
  }
});


const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1000,
  backgroundColor: "#000",
  // transparent: true, // Comentado porque no se usa
  scene: [
    Login,
    Intro,
    Aula,
    ComputerRoom,
    Laboratorio1,
    Hallway2,
    mainHallway1,
    FloorHallway2,
    AdministrativeRoom,
    Hallway300,
    Cubicle,
    Auditorium2,
  ],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
};
window.isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
window.lan = "en";
const game = new Phaser.Game(config);


