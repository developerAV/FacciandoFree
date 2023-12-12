import { swapButtonPositionsLan } from "../../module/swapButtonPositions.js";

export const buttonsMode = (scene, box, boxGamer, boxScore) => {
  boxGamer.setVisible(false);
  boxScore.setVisible(false);
  const mode = scene.add
    .image(192, 820, "modox")
    .setName("mode")
    .setScale(0.5);
  const mode2 = scene.add
    .image(372, 820, "modox")
    .setName("modeSecondary")
    .setScale(0.5);

  const labelMode = scene.add.text(120, 800, "Exploración", {
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#ffffff",
  });
  const labelMode2 = scene.add.text(320, 800, "Misión", {
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#ffffff",
  });
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
      // swapButtonPositionsLan(scene, mode, mode2);
    if(window.mode === "exploration"){
      mode.setAlpha(0.5);
      mode2.setAlpha(1);
    }else{
      mode.setAlpha(1);
      mode2.setAlpha(0.5);
    }
    }
    setTimeout(async () => {
      isTransitionInProgress = false;
    }, 300);
  }
};
