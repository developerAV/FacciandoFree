import { loginGoogle } from "../../Firebase/googleLogin.js";

export const blurButton = (boton, escena) => {
  // Hacer que la imagen sea interactiva
  boton.setInteractive();
  if (boton.name != "logout") {
    // Establece el área de interacción del botón usando setSize()
    // Agregar eventos a la imagen
    boton.on("pointerover", () => {
      boton.setTint(0xcccccc);
    });

    boton.on("pointerout", () => {
      boton.clearTint();
    });
  }

  boton.on("pointerdown", function () {
    // Acción cuando se hace clic en la imagen
    // alert("Haz precionado el botón" + namebtn);
    if (boton.name === "play") {
      escena.cameras.main.fadeOut(500); // Desvanecer la pantalla durante 500 milisegundos
      escena.time.delayedCall(
        500,
        () => {
          escena.scene.start("cubicle");
        },
        [],
        escena
      );
    }
    if (boton.name === "score") {
      console.log("score");
      return;
    }
    if (boton.name === "logout") {
      console.log("sound");
      return;
    }
    if (boton.name === "avatar") {
      return;
    }
    if (boton.name === "music") {
      return;
    }
    if (boton.name === "googleEN" || boton.name === "googleES") {
      window.hook = false;
      loginGoogle(escena);
      return;
    }
  });
};
