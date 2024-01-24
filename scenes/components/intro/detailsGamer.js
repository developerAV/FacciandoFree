import { traslate } from "../../../data/dialogues.js";
import {
  COLORS,
  COLORS_HEX,
  FONT,
  FONT_SIZE,
} from "../../../utils/constants.js";
import { getMissionByLevel } from "../../../services/mission.js";

const cursor = { useHandCursor: true };
export const detailsGamer = (scene, width = 50, height = 200) => {
  const user = window.user;
  let actualLevel = user.actualLevel - 1;
  window.actualLevelUser = user.actualLevel - 1;
  let actualLevelUser = user.actualLevel - 1;
  const listLevel = window.listLevel;

  let actuaMission = user.actualMission;

  window.missionVisibleBox = window.listMissions[actuaMission - 1];

  const box = scene.add.container(width, height);
  const boxBg = scene.add.graphics();
  const boxBgLevel = scene.add.graphics();

  box.setName("box");

  boxBg.fillStyle(0x00051a, 0.42);

  boxBgLevel.fillStyle(COLORS.white, 0.42);
  boxBgLevel.fillRoundedRect(0, 0, 500, 60, 30);
  boxBgLevel.lineStyle(4, COLORS.blue, 1);

  box.add(boxBg);
  box.add(boxBgLevel);

  const lock = scene.add.image(250, 300, "lock").setScale(0.8);
  lock.setAlpha(0.5);
  lock.visible = false;
  box.add(lock);

  // Dibuja un cuadro en el objeto gráfico
  const graphicsLock = scene.add.graphics();
  graphicsLock.fillStyle(COLORS.white, 0);
  graphicsLock.fillRoundedRect(0, 95, 500, 505, 30);
  graphicsLock.lineStyle(4, COLORS.blue, 1);

  const boxLock = scene.add.container(0, 0);
  boxLock.add(graphicsLock);

  const arrowRight = scene.add.image(470, 30, "arrowRight").setScale(0.14);
  const arrowLeft = scene.add.image(30, 30, "arrowRight").setScale(0.14);

  arrowLeft.flipX = true;

  if (actualLevel === listLevel.length - 1) {
    arrowRight.setAlpha(0);
    arrowRight.setInteractive(cursor);
  }
  if (actualLevel === 0) {
    arrowLeft.setAlpha(0);
    arrowLeft.setInteractive(cursor);
  }

  arrowLeft.setInteractive(cursor).on("pointerdown", async () => {
    arrowLeft.disableInteractive();
    arrowLeft.setAlpha(0.7);
    if (actualLevel === 8) {
      arrowRight.setAlpha(1);
      arrowRight.setInteractive(cursor);
    }
    actualLevel--;
    window.actualLevelUser = actualLevel + 1;

    levelLabel.setText(listLevel[actualLevel].name[window.lan]);
    window.listMissions = await getMissionByLevel(listLevel[actualLevel]._id);
    changueMission(0);
    window.listMissions = window.listMissions;
    window.missionVisibleBox = window.listMissions[0];

    arrowLeft.setAlpha(1);
    arrowLeft.setInteractive(cursor);

    missionLabel.setText(window.listMissions[0].name[window.lan]);
    description.setText(window.listMissions[0].description[window.lan]);
    if (actualLevel === 0) {
      arrowLeft.setAlpha(0);
      arrowLeft.setInteractive(cursor);
    }
    const misisionComplete1 = getMissionCompleted(0, window.actualLevelUser);
    const misisionComplete2 = getMissionCompleted(1, window.actualLevelUser);
    const misisionComplete3 = getMissionCompleted(2, window.actualLevelUser);
    mission1.setTexture(misisionComplete1 ? "insigniaOro" : "level1").setScale(misisionComplete1 ? 0.23 : 0.8);
    mission2.setTexture(misisionComplete2 ? "insigniaOro" : "level1").setScale(misisionComplete2 ? 0.23 : 0.8);
    mission3.setTexture(misisionComplete3 ? "insigniaOro" : "level1").setScale(misisionComplete3 ? 0.23 : 0.8);
  });
  arrowRight.setInteractive(cursor).on("pointerdown", async () => {
    arrowRight.disableInteractive();
    arrowRight.setAlpha(0.7);
    if (actualLevel === 0) {
      arrowLeft.setAlpha(1);
      arrowLeft.setInteractive(cursor);
    }
    actualLevel++;
    window.actualLevelUser = actualLevel + 1;
    levelLabel.setText(listLevel[actualLevel].name[window.lan]);
    window.listMissions = await getMissionByLevel(listLevel[actualLevel]._id);
    changueMission(0);

    window.missionVisibleBox = window.listMissions[0];
    arrowRight.setAlpha(1);
    arrowRight.setInteractive(cursor);
    scoreLabel.setText(`${traslate("missionScore")}: `);
    timeLabel.setText(traslate("time"));
    missionLabel.setText(window.listMissions[0].name[window.lan]);
    description.setText(window.listMissions[0].description[window.lan]);
    if (actualLevel === listLevel.length - 1) {
      arrowRight.setAlpha(0);
      arrowRight.setInteractive(cursor);
    }
    const misisionComplete1 = getMissionCompleted(0, window.actualLevelUser);
    const misisionComplete2 = getMissionCompleted(1, window.actualLevelUser);
    const misisionComplete3 = getMissionCompleted(2, window.actualLevelUser);
    mission1.setTexture(misisionComplete1 ? "insigniaOro" : "level1").setScale(misisionComplete1 ? .23 : 0.8);;
    mission2.setTexture(misisionComplete2 ? "insigniaOro" : "level1").setScale(misisionComplete2 ? .23 : 0.8);;
    mission3.setTexture(misisionComplete3 ? "insigniaOro" : "level1").setScale(misisionComplete3 ? .23 : 0.8);;
  });

  const levelLabel = scene.add.text(
    200,
    0,
    listLevel[user.actualLevel - 1].name[window.lan],
    {
      font: `32px ${FONT}`,
      fill: COLORS_HEX.white,
      wordWrap: {
        width: 200,
      },
      padding: {
        x: 10,
        y: 10,
      },
    }
  );

  const boxBgMission = scene.add.graphics();
  boxBgMission.fillStyle(COLORS.white, 0);
  boxBgMission.fillRoundedRect(0, 90, 500, 350, 30);
  boxBgMission.lineStyle(4, COLORS.blue, 4);
  box.add(boxBgMission);

  const {
    missionLabel,
    descriptionLabel,
    description,
    completed,
    scoreLabel,
    timeLabel,
    timeText,
    scoreText,
  } = addLabelsInScene(scene);

  const buttonContainer = scene.add.container(90, 530);

  buttonContainer.setSize(90, 100);

  const misisionComplete1 = getMissionCompleted(0, actualLevel + 1);
  const mission1 = scene.add.sprite(0, 0, misisionComplete1 ? "insigniaOro" : "level1").setScale(misisionComplete1 ? 0.23 : 0.8);

  const misisionComplete2 = getMissionCompleted(1, actualLevel + 1);
  const mission2 = scene.add.sprite(120, 0, misisionComplete2 ? "insigniaOro" : "level1").setScale(misisionComplete2 ? 0.23 : 0.8);

  const misisionComplete3 = getMissionCompleted(2, actualLevel + 1);
  const mission3 = scene.add.sprite(240, 0, misisionComplete3 ? "insigniaOro" : "level1").setScale(misisionComplete3 ? 0.23 : 0.8);

  mission1.setAlpha(0.5);
  mission2.setAlpha(0.5);
  mission3.setAlpha(0.5);

  if (actuaMission === 1) mission1.setAlpha(1);
  if (actuaMission === 2) mission2.setAlpha(1);
  if (actuaMission === 3) mission3.setAlpha(1);


  mission1.setInteractive(cursor).on("pointerdown", () => changueMission(0));
  mission2.setInteractive(cursor).on("pointerdown", () => changueMission(1));
  mission3.setInteractive(cursor).on("pointerdown", () => changueMission(2));

  buttonContainer.add(mission1);
  buttonContainer.add(mission2);
  buttonContainer.add(mission3);

  box.add(levelLabel);
  boxLock.add(missionLabel);
  boxLock.add(descriptionLabel);
  boxLock.add(description);
  boxLock.add(completed);
  boxLock.add(scoreLabel);
  boxLock.add(timeLabel);
  boxLock.add(scoreText);
  boxLock.add(timeText);

  boxLock.add(buttonContainer);
  box.add(arrowRight);
  box.add(arrowLeft);
  boxBg.fillRoundedRect(0, 0, 500, 600, 30);

  box.add(boxLock);

  function changueMission(mission) {
    mission1.setAlpha(0.5);
    mission2.setAlpha(0.5);
    mission3.setAlpha(0.5);

    if (mission === 0) mission1.setAlpha(1);
    if (mission === 1) mission2.setAlpha(1);
    if (mission === 2) mission3.setAlpha(1);
    window.missionVisibleBox = window.listMissions[mission];
    window.missionSelect = mission + 1;
    completed.setColor(COLORS_HEX.green);

    window.completedMission = getItemOfUser("completed");
    boxLock.visible = true;
    lock.visible = false;
    if (!window.completedMission) {
      completed.setColor(COLORS_HEX.red);
    }
    if (actualLevelUser < actualLevel) {
      boxLock.visible = false;
      lock.visible = true;
    }
    scoreText.setText(getItemOfUser("score"));
    timeText.setText(getItemOfUser("time"));
    completed.setText(traslate(window.completedMission));
    scoreLabel.setText(traslate("missionScore") + ": ");
    timeLabel.setText(traslate("time") + ": ");
    missionLabel.setText(window.missionVisibleBox.name[window.lan]);
    description.setText(window.missionVisibleBox.description[window.lan]);
  }
  return {
    boxGamer: box,
    levelLabel,
    missionLabel,
    descriptionLabel,
    description,
    completed,
    scoreLabel,
    timeLabel,
    timeText,
    scoreText,
  };
};
function getItemOfUser(item) {
  const id = window.missionVisibleBox._id;
  const index = window.user.missions.findIndex((mission) => mission._id === id);

  return window.user.missions[index][item];
}
const addLabelsInScene = (scene) => {
  const missionLabel = scene.add.text(165, 80, "", {
    font: `${FONT_SIZE.small} ${FONT}`,

    fill: COLORS_HEX.white,
    wordWrap: {
      width: 450,
    },
    lineSpacing: 10,
    padding: {
      x: 10,
      y: 10,
    },
  });
  const descriptionLabel = scene.add.text(20, 120, traslate("description"), {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.blue,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 20,
      y: 10,
    },
  });
  const description = scene.add.text(
    20,
    130,
    window.missionVisibleBox.description[window.lan],
    {
      font: `20px ${FONT}`,
      fill: COLORS_HEX.white,
      wordWrap: {
        width: 450,
      },
      lineSpacing: 10,
      padding: {
        x: 10,
        y: 40,
      },
    }
  );

  const scoreLabel = scene.add.text(20, 320, `${traslate("missionScore")}: `, {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.blue,
    wordWrap: {
      width: 400,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const scoreText = scene.add.text(255, 320, `${getItemOfUser("score")}`, {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const timeLabel = scene.add.text(20, 380, `${traslate("time")}: `, {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.blue,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const timeText = scene.add.text(120, 380, `${getItemOfUser("time")}`, {
    font: `25px ${FONT}`,

    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const completed = scene.add.text(160, 410, "", {
    font: `28px ${FONT}`,
    fill: COLORS_HEX.red,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });

  return {
    missionLabel,
    descriptionLabel,
    description,
    completed,
    scoreLabel,
    timeLabel,
    timeText,
    scoreText,
  };
};

const getMissionCompleted = (index, level) => {

  const indexMission = (level - 1) * 3 + index;

  const completeMission = window.user.missions[indexMission].completed

  return completeMission;

}