import { traslate } from "../../../data/dialogues.js";
import {
  COLORS,
  COLORS_HEX,
  FONT,
  FONT_SIZE,
} from "../../../utils/constants.js";
import { getMissionByLevel } from "../../../services/mission.js";

export const detailsGamer = async (scene, width = 50, height = 200) => {
  const user = window.user;
  let actualLevel = user.actualLevel - 1;
  const listLevel = window.listLevel;
  let listMissions = window.listMissions;
  console.log(listMissions);
  let actuaMission = user.actualMission;

  let times = 20;
  let score = 100;
  let lan = window.lan;
  const box = scene.add.container(width, height);
  box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(0x00051a, 0.42);
  boxBg.fillRoundedRect(0, 0, 500, 600, 30);

  box.add(boxBg);

  const boxBgLevel = scene.add.graphics();
  boxBgLevel.fillStyle(COLORS.white, 0.42);
  boxBgLevel.fillRoundedRect(0, 0, 500, 60, 30);
  boxBgLevel.lineStyle(4, COLORS.blue, 1);
  box.add(boxBgLevel);
  const arrowRight = scene.add.image(470, 30, "arrowRight").setScale(0.14);

  const arrowLeft = scene.add.image(30, 30, "arrowRight").setScale(0.14);
  arrowLeft.flipX = true;

  arrowLeft
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", async () => {
      arrowLeft.disableInteractive();
      arrowLeft.setAlpha(0.5); // Restaurar la opacidad original
      if (actualLevel > 0) {
        actualLevel--;
        levelLabel.setText(listLevel[actualLevel].name[lan]);
        listMissions = await getMissionByLevel(listLevel[actualLevel]._id);
        arrowLeft.setAlpha(1); // Restaurar la opacidad original
        arrowLeft.setInteractive({ useHandCursor: true });
        scoreLabel.setText(
          `${traslate("missionScore")}: ${listMissions[0].score}`
        );
        timeLabel.setText(`${traslate("time")}: ${listMissions[0].time}`);
        missionLabel.setText(listMissions[0].name[lan]);
        description.setText(listMissions[0].description[lan]);
      }
    });
  arrowRight
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", async () => {
      arrowRight.disableInteractive();
      arrowRight.setAlpha(0.5); // Restaurar la opacidad original
      if (actualLevel < listLevel.length - 1) {
        actualLevel++;
        levelLabel.setText(listLevel[actualLevel].name[lan]);
        listMissions = await getMissionByLevel(listLevel[actualLevel]._id);
        arrowRight.setAlpha(1); // Restaurar la opacidad original
        arrowRight.setInteractive({ useHandCursor: true });
        scoreLabel.setText(
          `${traslate("missionScore")}: ${listMissions[0].score}`
        );
        timeLabel.setText(`${traslate("time")}: ${listMissions[0].time}`);
        missionLabel.setText(listMissions[0].name[lan]);
        description.setText(listMissions[0].description[lan]);
      }
    });

  const levelLabel = scene.add.text(
    200,
    0,
    listLevel[user.actualLevel - 1].name[lan],
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

  const missionLabel = scene.add.text(
    165,
    80,
    listMissions[actuaMission - 1].name[lan],
    {
      font: `${FONT_SIZE.small} ${FONT}`,
      // backgroundColor: COLORS_HEX.white,
      // alpha: 0,
      fill: COLORS_HEX.white,
      wordWrap: {
        width: 450,
      },
      lineSpacing: 10,
      padding: {
        x: 10,
        y: 10,
      },
    }
  );
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
    listMissions[actuaMission - 1].description[lan],
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

  const scoreLabel = scene.add.text(
    20,
    320,
    `${traslate("missionScore")}: ${listMissions[actuaMission - 1].score}`,
    {
      font: `25px ${FONT}`,
      fill: COLORS_HEX.blue,
      wordWrap: {
        width: 200,
      },
      padding: {
        x: 10,
        y: 10,
      },
    }
  );
  const timeLabel = scene.add.text(
    20,
    380,
    `${traslate("time")}: ${listMissions[actuaMission - 1].time}`,
    {
      font: `25px ${FONT}`,
      fill: COLORS_HEX.blue,
      wordWrap: {
        width: 200,
      },
      padding: {
        x: 10,
        y: 10,
      },
    }
  );
  const completed = scene.add.text(160, 410, traslate("completed"), {
    font: `28px ${FONT}`,
    fill: COLORS_HEX.green,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });

  const buttonContainer = scene.add.container(90, 530); // Reemplaza x e y con las coordenadas deseadas

  buttonContainer.setSize(90, 100);

  const mission1 = scene.add.sprite(0, 0, "level1").setScale(0.8);
  const mission2 = scene.add.sprite(120, 0, "level1").setScale(0.8);
  const mission3 = scene.add.sprite(240, 0, "level1").setScale(0.8);

  mission1
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => changueMission(0));

  mission2
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => changueMission(1));
  mission3
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => changueMission(2));

  function changueMission(mission) {
    scoreLabel.setText(
      `${traslate("missionScore")}: ${listMissions[mission].score}`
    );
    timeLabel.setText(`${traslate("time")}: ${listMissions[mission].time}`);
    missionLabel.setText(listMissions[mission].name[lan]);
    description.setText(listMissions[mission].description[lan]);
  }

  buttonContainer.add(mission1);
  buttonContainer.add(mission2);
  buttonContainer.add(mission3);

  box.add(levelLabel);
  box.add(missionLabel);
  box.add(descriptionLabel);
  box.add(description);
  box.add(completed);
  box.add(scoreLabel);
  box.add(timeLabel);
  // box.add(level1);

  box.add(buttonContainer);
  box.add(arrowRight);
  box.add(arrowLeft);

  return { boxGamer: box };
};