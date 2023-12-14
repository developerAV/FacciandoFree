import { traslate } from "../../data/dialogues.js";
export const crearVideo = async (mensaje, videoFile, scene) => {
  return new Promise((resolve, reject) => {
    let indice = 0;
    let video;
    let texto;
    window.avatarUpdateActivo = false;

    const container = scene.add.container(0, 0);

    //resetear camara
    scene.cameras.main.stopFollow();
    // scene.cameras.main.setZoom(1);

    scene.cameras.main.centerOn(0, 0);
    scene.cameras.main.setScroll(0, 0);

    video = scene.add.video(775, 700, videoFile);
    video.setAlpha(1);
    video.setBlendMode(Phaser.BlendModes.NORMAL);
    video.play(true);

    // zoom 2
    let scaleRatioX = 0.4; // Ajusta este valor para hacer el video más ancho
    let scaleRatioY = 0.2; // Puedes ajustar este valor según tus necesidades
    if (scene.cameras.main.zoom == 1.5) {
      scaleRatioX = 0.35; // Ajusta este valor para hacer el video más ancho
      scaleRatioY = 0.2; //zoom == 1.5
    }
    if (scene.cameras.main.zoom == 1) {
      scaleRatioX = 0.35; // Ajusta este valor para hacer el video más ancho
      scaleRatioY = 0.2; //zoom == 1
    }
    video.setScale(scaleRatioX, scaleRatioY);

    // Crear un objeto de texto encima del video
    texto = scene.add
      .text(600, 720, "", {
        font: `30px Arial`,
        fill: "#000",
        wordWrap: {
          width: 900, // Ajusta este valor para definir el límite de ancho
        },
      })
      .setScale(0.6);
    texto.setOrigin(0, 1);
    let efectoEsc = scene.time.addEvent({
      delay: 50, // Ajusta el valor para controlar la velocidad de escritura
      callback: escribirTexto,
      loop: true,
      callbackScope: scene,
    });
    responsiveVoice.speak(mensaje, traslate("voiceSpeak"));
    container.add(video);
    container.add(texto);
    container.setDepth(1000);
    container.setScrollFactor(0);
    function escribirTexto() {
      if (indice <= mensaje.length) {
        texto.setText(mensaje.substring(0, indice));

        indice++;
      } else {
        video.stop();
        scene.time.addEvent({
          delay: 2000, // Ajusta el valor para controlar la velocidad de escritura
          callback: destruir,
          loop: false,
          callbackScope: scene,
        });
      }
    }

    function destruir() {
      scene.tweens.add({
        targets: video,
        alpha: 0,
        duration: 500,
        onComplete: () => {
          video.destroy();
          texto.destroy();
          efectoEsc.remove();
          indice = 0;
          scene.cameras.main.startFollow(scene.avatar.avatarPlayer);
          window.avatarUpdateActivo = true;
          scene.avatar.avatarUpdateActivo = true;

          resolve(); // Resuelve la promesa si no se requiere zoom
        },
      });
    }
  });
};
