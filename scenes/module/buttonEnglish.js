import { swapButtonPositionsLan } from "./swapButtonPositions.js";
export const buttonEnglish = (btnLanguage, scene) => {
  const lan = window.lan == "en";

  //si el lenguaje es "en" tomará el primer valor, sino, el segundo
  let x = lan ? 1407 : 1437;
  let y = lan ? 70 : 125;
  let x2 = lan ? 1437 : 1407;
  let y2 = lan ? 125 : 70;

  const btnEnglish = scene.add.image(x, y, "btnEnglish").setScale(0.05);
  const btnSpanish = scene.add.image(x2, y2, "btnSpanish").setScale(0.05);

  btnEnglish.visible = false;
  btnSpanish.visible = false;
  scene.isSwappedLan = false;

  btnLanguage.setInteractive();
  btnLanguage.on("pointerdown", () => {
    btnEnglish.visible = !btnEnglish.visible;
    btnSpanish.visible = !btnSpanish.visible;
  });

  btnEnglish.setInteractive();
  btnEnglish.on("pointerdown", () => changeButtonsPosition("en"));

  btnSpanish.setInteractive();
  btnSpanish.on("pointerdown", () => changeButtonsPosition("es"));

  let trasitionInProgress = false;
  async function changeButtonsPosition(lan) {
    if (trasitionInProgress) return;
    trasitionInProgress = true;

    if (window.lan != lan) {
      //si el lenguaje que pasamos es diferente al lenguaje actual
      await swapButtonPositionsLan(scene, btnEnglish, btnSpanish); // se cambiará la posición de los botones
      window.lan = lan; //cambiamos el lenguaje al que pasamos
      scene.updateScene();
    }

    setTimeout(async () => {
      trasitionInProgress = false;
    }, 300);
  }
};
