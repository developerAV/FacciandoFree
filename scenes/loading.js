import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
import { auth, db } from "../Firebase/firebase.js";
import '../Firebase/googleLogin.js';
export class Loading extends Phaser.Scene {
  constructor() {
    super({ key: "loading" });
  }

  preload() {
    this.load.video("loading", "assets/videos/loading.mp4", "loadeddata", false, true );
  }

  create() {
    // Añade aquí un mensaje de carga o una barra de progreso.

    let video = this.add.video(800, 500, "loading");
  video.setAlpha(1);
  video.setBlendMode(Phaser.BlendModes.NORMAL);
  video.play(true);
    // Puedes personalizar el mensaje y la barra de progreso según tus necesidades.

    // list for auth state changes
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // loginCheck(user);

        try {
            this.time.delayedCall(
            5000,
            () => {
             
                this.scene.start("intro");
                video.destroy();
              
            },
            [],
            this );
        } catch (error) {
          console.log(error);
        }
      } else {
        this.time.delayedCall(
        5000,
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


  }
}
