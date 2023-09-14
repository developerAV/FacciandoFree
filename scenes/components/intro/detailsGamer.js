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
  window.actualLevelUser = user.actualLevel - 1;
  let actualLevelUser = user.actualLevel - 1;
  const listLevel = window.listLevel;
  let listMissions = window.listMissions;
  let actuaMission = user.actualMission;

  const box = scene.add.container(width, height);

  box.setName("box");
  const boxBg = scene.add.graphics();
  boxBg.fillStyle(0x00051a, 0.42);
  box.add(boxBg);
  const boxBgLevel = scene.add.graphics();
  boxBgLevel.fillStyle(COLORS.white, 0.42);
  boxBgLevel.fillRoundedRect(0, 0, 500, 60, 30);
  boxBgLevel.lineStyle(4, COLORS.blue, 1);
  box.add(boxBgLevel);
  /*const graphicsLock = scene.add.graphics();
  graphicsLock.fillStyle(COLORS.white, 1);
  graphicsLock.fillRoundedRect(0, 90, 500, 500, 30);
  graphicsLock.lineStyle(4, COLORS.blue, 1);
  */
  const boxLock = this.add.graphics();
    
  // Dibuja un cuadro en el objeto gráfico
  boxLock.fillStyle(0x00ff00); // Color verde
  boxLock.fillRect(100, 100, 200, 200); // Tamaño y posición del cuadro
  
  // Aplicar un filtro de desenfoque al objeto gráfico
  const blurFilter = this.add.filter('Blur', 200); // 200 es el valor de desenfoque, ajusta según tus necesidades
  boxLock.filters = [blurFilter];
  

  const containerLock = scene.add.container();
  // const graphicsLock = scene.add.graphics();

  // // Dibuja un cuadro en el objeto gráfico
  // graphicsLock.fillStyle(0x00ff00); // Color verde
  // graphicsLock.fillRect(100, 100, 200, 200); // Tamaño y posición del cuadro

  const mock = scene.add.image(400, 300, 'dude');

  // graphicsLock.setName("graphicsLock");

  containerLock.add(mock)

  const fx = containerLock.postFX.addBlur(1, 0, 0, 0, 0xffffff, 6);
  scene.tweens.add({
    targets: fx,
    strength: 2,
    duration: 2000,
  });
  const arrowRight = scene.add.image(470, 30, "arrowRight").setScale(0.14);
  if (actualLevel === listLevel.length - 1) {
    arrowRight.setAlpha(0);
    arrowRight.setInteractive({ useHandCursor: true });
  }

  const arrowLeft = scene.add.image(30, 30, "arrowRight").setScale(0.14);
  arrowLeft.flipX = true;
  if (actualLevel === 0) {
    arrowLeft.setAlpha(0);
    arrowLeft.setInteractive({ useHandCursor: true });
  }
  arrowLeft
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", async () => {
      arrowLeft.disableInteractive();
      arrowLeft.setAlpha(0.7);
      if (actualLevel === 8) {
        arrowRight.setAlpha(1);
        arrowRight.setInteractive({ useHandCursor: true });
      }
      actualLevel--;
      window.user.actualLevel = actualLevel + 1;

      levelLabel.setText(listLevel[actualLevel].name[window.lan]);
      console.log(window.lan);
      listMissions = await getMissionByLevel(listLevel[actualLevel]._id);
      changueMission(0);
      window.listMissions = listMissions;

      arrowLeft.setAlpha(1);
      arrowLeft.setInteractive({ useHandCursor: true });
      scoreLabel.setText(
        `${traslate("missionScore")}: ${listMissions[0].score}`
      );
      timeLabel.setText(traslate("time"));
      missionLabel.setText(listMissions[0].name[window.lan]);
      description.setText(listMissions[0].description[window.lan]);
      if (actualLevel === 0) {
        arrowLeft.setAlpha(0);
        arrowLeft.setInteractive({ useHandCursor: true });
      }
    });
  arrowRight
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", async () => {
      arrowRight.disableInteractive();
      arrowRight.setAlpha(0.7);
      if (actualLevel === 0) {
        arrowLeft.setAlpha(1);
        arrowLeft.setInteractive({ useHandCursor: true });
      }
      actualLevel++;
      window.user.actualLevel = actualLevel + 1;
      levelLabel.setText(listLevel[actualLevel].name[window.lan]);
      listMissions = await getMissionByLevel(listLevel[actualLevel]._id);
      changueMission(0);
      window.listMissions = listMissions;
      arrowRight.setAlpha(1);
      arrowRight.setInteractive({ useHandCursor: true });
      scoreLabel.setText(
        `${traslate("missionScore")}: ${listMissions[0].score}`
      );
      timeLabel.setText(traslate("time"));
      missionLabel.setText(listMissions[0].name[window.lan]);
      description.setText(listMissions[0].description[window.lan]);
      if (actualLevel === listLevel.length - 1) {
        arrowRight.setAlpha(0);
        arrowRight.setInteractive({ useHandCursor: true });
      }
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

  const missionLabel = scene.add.text(
    165,
    80,
    listMissions[actuaMission - 1].name[window.lan],
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
    listMissions[actuaMission - 1].description[window.lan],
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
  const completed = scene.add.text(160, 410, traslate("fghghghfghdfghdfgh"), {
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

  const buttonContainer = scene.add.container(90, 530); // Reemplaza x e y con las coordenadas deseadas

  buttonContainer.setSize(90, 100);

  const mission1 = scene.add.sprite(0, 0, "level1").setScale(0.8);
  const mission2 = scene.add.sprite(120, 0, "level1").setScale(0.8);
  const mission3 = scene.add.sprite(240, 0, "level1").setScale(0.8);
  mission1.setAlpha(0.5);
  mission2.setAlpha(0.5);
  mission3.setAlpha(0.5);
  if (actuaMission === 1) mission1.setAlpha(1);
  if (actuaMission === 2) mission2.setAlpha(1);
  if (actuaMission === 3) mission3.setAlpha(1);
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
    mission1.setAlpha(0.5);
    mission2.setAlpha(0.5);
    mission3.setAlpha(0.5);

    if (mission === 0) mission1.setAlpha(1);
    if (mission === 1) mission2.setAlpha(1);
    if (mission === 2) mission3.setAlpha(1);

    window.missionSelect = mission + 1;
    completed.setColor(COLORS_HEX.green);
    window.completedMission = "completed";
    if (
      actuaMission <= listMissions[mission].order &&
      actualLevelUser <= actualLevel
    ) {
      completed.setColor(COLORS_HEX.red);
      window.completedMission = "incomplete";
    }
    if (actualLevelUser < actualLevel) {
      completed.setColor(COLORS_HEX.red);
      window.completedMission = "incomplete";
      //candado
    }

    completed.setText(traslate(window.completedMission));
    scoreLabel.setText(
      `${traslate("missionScore")}: ${listMissions[mission].score}`
    );
    timeLabel.setText(traslate("time"));
    missionLabel.setText(listMissions[mission].name[window.lan]);
    description.setText(listMissions[mission].description[window.lan]);
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
  boxBg.fillRoundedRect(0, 0, 500, 600, 30);

  box.add(containerLock);

  return {
    boxGamer: box,
    levelLabel,

    missionLabel,
    descriptionLabel,
    description,
    completed,
    scoreLabel,
    timeLabel,
  };
};
