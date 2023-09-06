import { swapButtonPositionsLan } from "./swapButtonPositions.js";
export const buttonEnglish = (btnLanguage, scene) => {
  let btnEnglish;
  let btnSpanish;
  if (window.lan === "es") {
    btnSpanish = scene.add.image(1407, 70, "btnSpanish").setScale(0.05);
    btnEnglish = scene.add.image(1437, 125, "btnEnglish").setScale(0.05);
  } else {
    btnEnglish = scene.add.image(1407, 70, "btnEnglish").setScale(0.05);
    btnSpanish = scene.add.image(1437, 125, "btnSpanish").setScale(0.05);
  }
  btnEnglish.visible = false;
  btnSpanish.visible = false;

  scene.isSwappedLan = false;
  btnLanguage.on("pointerdown", () => {
    if (btnEnglish.visible || btnSpanish.visible) {
      btnEnglish.visible = false;
      btnSpanish.visible = false;
      return;
    }
    btnEnglish.visible = true;
    btnSpanish.visible = true;
  });
  // Función para intercambiar las posiciones de los botones

  // Evento de clic para btnEnglish o btnSpanish
  btnEnglish.setInteractive();
  btnEnglish.on("pointerdown", () => {
    if (btnEnglish.x === 1437 && btnEnglish.y === 125) {
      // Si btnEnglish está en la posición (1400, 155), entonces intercambia posiciones
      swapButtonPositionsLan(scene, btnEnglish, btnSpanish);
    }
    window.lan = "en";

    // scene.scene.restart();
    scene.updateScene();
  });

  btnSpanish.setInteractive();
  btnSpanish.on("pointerdown", () => {
    if (!scene.isSwappedLan) {
      // Si los botones no han sido intercambiados, entonces intercambia posiciones
      swapButtonPositionsLan(scene, btnEnglish, btnSpanish);
    }
    window.lan = "es";
    // scene.scene.restart();
    scene.updateScene();
  });
};
