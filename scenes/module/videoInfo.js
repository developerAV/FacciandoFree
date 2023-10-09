import { traslate } from "../../data/dialogues.js";
export const crearVideo = async (mensaje, videoFile, scene, keyZoom) => {
  return new Promise((resolve, reject) => {
    let indice = 0;
    let video;
    let texto;

    window.avatarUpdateActivo = false;
  //resetear camara
  scene.cameras.main.stopFollow();
  scene.cameras.main.setZoom(1);

  scene.cameras.main.centerOn(0, 0);
  scene.cameras.main.setScroll(0, 0);

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
  responsiveVoice.speak(mensaje, traslate("voiceSpeak"));

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
       
          if(keyZoom){
            function aumentarZoom(){
              scene.cameras.main.startFollow(scene.avatar.avatarPlayer);
            window.avatarUpdateActivo = true;
            scene.avatar.avatarUpdateActivo = true;
            if (scene.cameras.main.zoom <= 2) {
              scene.cameras.main.zoom += 0.01;
              setTimeout(aumentarZoom, 800);
            }
            }
            aumentarZoom();
          }
       
          resolve(); // Resuelve la promesa si no se requiere zoom
        
      },
    });
  }

});
 
};
  