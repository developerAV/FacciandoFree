import { Avatar } from "./player.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "../Firebase/firebase.js";
import "../Firebase/googleLogin.js";

import { preloads } from "./components/loanding/preload.js";
import { getAllLevels } from "../services/level.js";
import { getUserFirebase, postUser } from "../services/user.js";
import { getMissionByLevel } from "../services/mission.js";
export class Loading extends Phaser.Scene {
  constructor() {
    super({ key: "loading" });
  }

  preload() {
    preloads(this);
    this.load.spritesheet("dude", "../assets/images/player/game.png", {
      frameWidth: 25.92,
      frameHeight: 32,
    });
    this.load.audio("musica", "assets/music/GrassyWorld.mp3");
    this.load.video(
      "loading",
      "assets/videos/loading.mp4",
      "loadeddata",
      false,
      true
    );
    this.load.css("styles", "styles/index.css");
    this.load.image("language", "assets/images/language/language.png");
    this.load.image("btnEnglish", "assets/images/language/btn-english.png");
    this.load.image("btnSpanish", "assets/images/language/btn-spanish.png");
  }

  create() {
    // Añade aquí un mensaje de carga o una barra de progreso.

    window.avatarUpdateActivo = false;
    let video = this.add.video(800, 500, "loading");
    video.setAlpha(1);
    video.setBlendMode(Phaser.BlendModes.NORMAL);
    video.play(true);
    // Puedes personalizar el mensaje y la barra de progreso según tus necesidades.
    this.avatar = new Avatar(this, 250, 1000, 3);
    // list for auth state changes
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        window.userId = user.uid;
        window.user = await getUserFirebase(window.userId);

        if (!window.user) {
          window.user = await postUser(user);
          //await getUserFirebase(window.userId);
        }

        window.imageUrl = user.photoURL;
        window.name = user.displayName;

        window.mission = window.user.actualMission;

        window.listLevel = await getAllLevels();
        window.listMissions = await getMissionByLevel(
          window.listLevel[window.user.actualLevel - 1]._id
        );

        window.missionSelect = window.user.actualMission ?? 1;
        this.scene.start("intro");
        video.destroy();
      } else {
        this.time.delayedCall(
          1000,
          () => {
            this.scene.start("login");
            video.destroy();
          },
          [],
          this
        );

        // setupPosts([]);
        // loginCheck(user);
      }
    });
    //
  }
  update() {
    this.avatar.moveTo(0, 200, "right");
  }
}
