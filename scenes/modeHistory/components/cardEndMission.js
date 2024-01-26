import { traslate } from "../../../data/dialogues.js";
import { COLORS, COLORS_HEX, FONT } from "../../../utils/constants.js";

export const cardEndMission = async (scene) => {
  window.runTime = false;
  scene.avatar.runTime(false);
  const boxEndMission = scene.add.container(600, 500);
  boxEndMission.setName("boxEndMission");

  const boxEndMissionBg = scene.add.graphics();
  boxEndMissionBg.fillStyle(COLORS.black, 0.9);
  boxEndMissionBg.fillRoundedRect(-150, -125, 700, 300, 5);

  boxEndMission.add(boxEndMissionBg);

  const text = scene.add
    .text(5, 5, traslate("missionCompleted"), {
      font: `100px ${FONT}`,
      fill: COLORS_HEX.white,
      align: "center",
    })
    .setScale(0.5);
  text.setScrollFactor(0);
  boxEndMission.add(text);

  boxEndMission.setScrollFactor(0);

  window.zoom == 1 ? boxEndMission.setScale(2) : boxEndMission.setScale(1);

  window.avatarUpdateActivo = false;



  setTimeout(async function () {
    await text.destroy();
    await boxEndMission.destroy();
    window.avatarUpdateActivo = true;
  }, 4000);
};
