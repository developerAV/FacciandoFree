import { traslate } from "../../../data/dialogues.js";
import { COLORS_HEX, FONT, FONT_SIZE } from "../../../utils/constants.js";

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

  const levelLabel = scene.add.text(200, 10, traslate("level"), {
    font: `32px ${FONT}`,
    fill: COLORS_HEX.blue,
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const missionLabel = scene.add.text(165, 30, traslate("mission"), {
    font: `${FONT_SIZE.small} ${FONT}`,
    fill: COLORS_HEX.blue,
    wordWrap: {
      width: 450,
    },
    lineSpacing: 10,
    padding: {
      x: 10,
      y: 40,
    },
  });
  const descriptionLabel = scene.add.text(20, 100, traslate("description"), {
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
  const description = scene.add.text(
    20,
    110,
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
  const scoreLabel = scene.add.text(20, 310, traslate("missionScore"), {
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
  const timeLabel = scene.add.text(20, 360, `${traslate("time")}: ${times}`, {
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
  const completed = scene.add.text(160, 400, traslate("completed"), {
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

  box.add(levelLabel);
  box.add(missionLabel);
  box.add(descriptionLabel);
  box.add(description);
  box.add(completed);
  box.add(scoreLabel);
  box.add(timeLabel);

  return { boxGamer: box };
};
