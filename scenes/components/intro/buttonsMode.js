import { swapButtonPositionsLan } from "../../module/swapButtonPositions.js";

export const buttonsMode = (scene, box, boxGamer, boxScore) => {
  boxGamer.setVisible(false);
  boxScore.setVisible(false);
  const mode = scene.add
    .image(220, 820, "mode")
    .setScale(0.75)
    .setName("mode")
    .setScale(0.25);
  const mode2 = scene.add
    .image(350, 820, "mode2")
    .setScale(0.75)
    .setName("modeSecondary")
    .setScale(0.25);

  mode.setInteractive();
  mode.on("pointerdown", () => changeButtonsPosition("exploration"));

  mode2.setInteractive();
  mode2.on("pointerdown", () => changeButtonsPosition("mission"));

  let isTransitionInProgress = false;
  function changeButtonsPosition(gameMode) {
    if (isTransitionInProgress) return;
    isTransitionInProgress = true;

    let boxVisible = window.mode === "mission";

    let gameModeSecondary = boxVisible ? "mission" : "exploration";

    if (window.mode !== gameMode) {
      window.mode = gameMode;
      window.mode2 = gameModeSecondary;
      box.setVisible(boxVisible);
      boxGamer.setVisible(!boxVisible);
      boxScore.setVisible(!boxVisible);
      swapButtonPositionsLan(scene, mode, mode2);
    }
    setTimeout(async () => {
      isTransitionInProgress = false;
    }, 300);
  }
};
