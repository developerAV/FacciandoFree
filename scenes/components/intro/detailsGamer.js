import { traslate } from "../../../data/dialogues.js";
import {
  COLORS,
  COLORS_HEX,
  FONT,
  FONT_SIZE,
} from "../../../utils/constants.js";

export const detailsGamer = (scene, width = 50, height = 200) => {
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

  const levelLabel = scene.add.text(200, 0, traslate("level"), {
    font: `32px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });


  const boxBgMission = scene.add.graphics();
  boxBgMission.fillStyle(COLORS.white, 0);
  boxBgMission.fillRoundedRect(0, 90, 500, 350, 30);
  boxBgMission.lineStyle(4, COLORS.blue, 4);
  box.add(boxBgMission);
 

  const missionLabel = scene.add.text(165, 80, traslate("mission"), {
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
    "Lorem ipsum dolor sit amet, consectetur adipis  cing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies",
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
  const scoreLabel = scene.add.text(20, 320, traslate("missionScore"), {
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
  const timeLabel = scene.add.text(20, 380, `${traslate("time")}: ${times}`, {
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

  const level1 = scene.add.sprite(0, 0, "level1").setScale(0.8);
  const level2 = scene.add.sprite(120, 0, "level1").setScale(0.8);
  const level3 = scene.add.sprite(240, 0, "level1").setScale(0.8);

  buttonContainer.add(level1);
  buttonContainer.add(level2);
  buttonContainer.add(level3);


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
