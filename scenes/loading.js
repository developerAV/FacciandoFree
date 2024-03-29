import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "../Firebase/firebase.js";
import "../Firebase/googleLogin.js";
import { Avatar } from "./player.js";

import { preloads } from "./components/loanding/preload.js";
import { getAllLevels } from "../services/level.service.js";
import { getUserFirebase, postUser } from "../services/user.service.js";
import { getMissionByLevel } from "../services/mission.service.js";
import { SCENE } from "../utils/constants.js";
export class Loading extends Phaser.Scene {
  constructor() {
    super({ key: "loading" });
  }

  preload() {
    this.load.spritesheet("dude", "../assets/images/player/game.png", {
      frameWidth: 25.92,
      frameHeight: 32,
    });
    this.load.spritesheet(
      "spriteBatista",
      "../assets/images/player/spriteBatista.png",
      {
        frameWidth: 31,
        frameHeight: 48,
      }
    );
    this.load.spritesheet(
      "spriteGirl",
      "../assets/images/player/spriteGirl.png",
      {
        frameWidth: 31,
        frameHeight: 48,
      }
    );
    this.load.spritesheet(
      "spriteBoy",
      "../assets/images/player/spriteBoy.png",
      {
        frameWidth: 31,
        frameHeight: 48,
      }
    );
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
    this.load.image(
      "redV",
      "assets/images/accessories/platform/redVertical.png"
    );
    this.load.image(
      "redH",
      "assets/images/accessories/platform/redHorizontal.png"
    );
  }

  create() {
    window.avatarUpdateActivo = false;
    const video = this.add.video(800, 500, "loading");
    video.setAlpha(1);
    video.setBlendMode(Phaser.BlendModes.NORMAL);
    video.play(true);
    // Puedes personalizar el mensaje y la barra de progreso según tus necesidades.
    // this.avatar = new Avatar(this, 250, 1000, 3);
    // list for auth state changes

    if (window.loadOut) {
      this.time.delayedCall(
        500,
        () => {
          window.avatarX = window.user.position.x ?? 800;
          window.avatarY = window.user.position.y ?? 500;
          this.scene.start(window.user.scene ?? "outside");
          video.destroy();
        },
        [],
        this
      );

      return;
    }

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
        if (!window.stateLogin) {
          if (!window.user.school) {
            this.scene.start("question");
            return;
          } else {
            this.scene.start("intro");
          }
        }
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
      }
    });
    //
  }
}
