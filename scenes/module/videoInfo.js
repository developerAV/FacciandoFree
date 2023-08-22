export const crearVideo = (mensaje, videoFile, scene, keyZoom) => {
  let indice = 0;
  let video;
  let texto;

  scene.avatar.avatarUpdateActivo = false;

  video = scene.add.video(775, 850, videoFile);
  video.setAlpha(1);
  video.setBlendMode(Phaser.BlendModes.NORMAL);
  video.play(true);

  // Ajustar el tamaño del video
  var scaleRatioX = 0.86; // Ajusta este valor para hacer el video más ancho
  var scaleRatioY = 0.5; // Puedes ajustar este valor según tus necesidades
  video.setScale(scaleRatioX, scaleRatioY);

  // Crear un objeto de texto encima del video
  texto = scene.add.text(340, scene.cameras.main.height - 125, "", {
    font: "30px Arial",
    fill: "#000",
    wordWrap: {
      width: 1200, // Ajusta este valor para definir el límite de ancho
    },
  });
  texto.setOrigin(0, 1);
  let efectoEsc = scene.time.addEvent({
    delay: 50, // Ajusta el valor para controlar la velocidad de escritura
    callback: escribirTexto,
    loop: true,
    callbackScope: scene,
  });
  responsiveVoice.speak(mensaje, "Spanish Latin American Male");

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
      alpha: 0, // Cambiar la opacidad del video a 0
      duration: 500, // Duración de la animación en milisegundos
      onComplete: () => {
        // Al completar la animación, detener el video y destruir el objeto de video

        video.destroy();
        texto.destroy();
        efectoEsc.remove(); // Detener el efecto de escritura
        scene.avatar.avatarUpdateActivo = true;

        console.log(indice);
        indice = 0;
        // video.destroy();
        if (keyZoom) {
          scene.cameras.main.startFollow(scene.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
          // console.log(scene.cameras.main.zoom);
          //    const zoomInterval = setTimeout(() => {
          //      if (scene.cameras.main.zoom <= 2) {

          //        scene.cameras.main.zoom += 0.05;
          //        console.log(scene.cameras.main.zoom);
          //      } else {
          //        clearInterval(zoomInterval); // Detener el intervalo cuando el zoom alcanza 2
          //      }
          //    }, 150);
          function aumentarZoom() {
            if (scene.cameras.main.zoom <= 2) {
              scene.cameras.main.zoom += 0.01;
              // console.log(scene.cameras.main.zoom)
              setTimeout(aumentarZoom, 800);
            }
          }
          aumentarZoom();
        }
      },
    });
  }
};
