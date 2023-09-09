import { traslate } from "../../../data/dialogues.js";
import { COLORS, FONT_SIZE } from "../../../utils/constants.js";
import { textButton } from "../../module/textButton.js";
import { swapButtonPositionsLan } from "../../module/swapButtonPositions.js";
import { news } from "../intro/news.js";

export const buttonsMode = (scene,box) => {


  const mode = scene.add
    .image(1412, 550, "mode")
    .setScale(0.75)
    .setName("mode")
    .setScale(1);
  const mode2 = scene.add
    .image(1460, 690, "mode")
    .setScale(0.75)
    .setName("modeSecondary")
    .setScale(0.7);

  const modeText1 = textButton(
    scene,
    1435,
    569,
    "mode",
    COLORS.black,
    FONT_SIZE.small
  );
  const modeText2 = textButton(
    scene,
    1470,
    695,
    "mode",
    COLORS.black,
    FONT_SIZE.smaller
  );
  const modePrimary = textButton(
    scene,
    1215,
    520,
    "exploration",
    COLORS.black,
    FONT_SIZE.mediumSmall
  );
  const modeSecondary = textButton(
    scene,
    1310,
    660,
    "mission",
    COLORS.black,
    FONT_SIZE.small
  );

  mode.setInteractive();
  mode.on("pointerdown", () => changeButtonsPosition("exploration"));

  mode2.setInteractive();
  mode2.on("pointerdown", () => changeButtonsPosition("mission"));

  let isTransitionInProgress = false;
  function changeButtonsPosition(gameMode) {
    if (isTransitionInProgress) return;
    isTransitionInProgress = true;

    let boxVisible = scene.mode === "mission";
    let gameModeSecondary = boxVisible ? "mission" : "exploration";

    if (scene.mode !== gameMode) {
      scene.mode = gameMode;
      scene.mode2 = gameModeSecondary;
      box.setVisible(boxVisible);
      swapButtonPositionsLan(scene, mode, mode2);
      mode.setScale(gameMode === "exploration" ? 1 : 0.7);
      mode2.setScale(gameMode === "exploration" ? 0.7 : 1);
      modePrimary.setText(traslate(gameMode));
      modeSecondary.setText(traslate(gameModeSecondary));
    }
    setTimeout(async () => {
      isTransitionInProgress = false;
    }, 300);
  }

  return {
    modeText1,
    modeText2,
    modePrimary,
    modeSecondary,
  };
};
