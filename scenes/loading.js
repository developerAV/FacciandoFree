import { Avatar } from "./player.js";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import {
  getDocs,
  collection,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { auth, db } from "../Firebase/firebase.js";
import "../Firebase/googleLogin.js";

export class Loading extends Phaser.Scene {
  constructor() {
    super({ key: "loading" });
  }

  preload() {
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
        //post photoURL to https://server-api-kuoy-dev.fl0.io/facciando/user
        await fetch("https://server-api-kuoy-dev.fl0.io/facciando/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            idUserFirebase: user.uid,
            date_birth: "12/12/12",
            actualLevel: 1,
            name: 2,
            actualMission: 1,
            imageUrl: "" + user.photoURL,
          }),
        });

        try {
          this.time.delayedCall(
            10,
            () => {
              window.imageUrl = user.photoURL;
              window.name = user.displayName;
              this.scene.start("intro");
              video.destroy();
            },
            [],
            this
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        this.time.delayedCall(
          10,
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
