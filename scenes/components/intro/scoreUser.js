import { traslate } from "../../../data/dialogues.js";
import { COLORS, COLORS_HEX, FONT } from "../../../utils/constants.js";
import { getUserById } from "../../../services/user.js";
export const scoreUser = async (scene, x = 1070, y = 200) => {
  const user = await getUserById(window.user?._id);

  const box = scene.add.container(x, y);
  box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(COLORS.blueDark, 0.42);
  boxBg.fillRoundedRect(0, 0, 500, 200, 10);

  box.add(boxBg);

  const scoreUserLabel = scene.add.text(10, 10, traslate("score"), {
    font: `45px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
  });

  const message = scene.add.text(0, 30, `${user?.score} / 1000`, {
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
  });

  // Agrega la foto y el texto al button
  box.add(scoreUserLabel);
  box.add(message);
  var bar = scene.add.rexLineProgressCanvas(240, 125, 450, 30, {
    barColor: COLORS.blue,
    trackStrokeColor: COLORS.black,
    skewX: 0,
    value: user?.score / 1000,
  });

  var graphics = scene.add
    .graphics({
      lineStyle: {
        width: 1,
        color: COLORS.white,
        alpha: 1,
      },
    })
    .strokeRectShape(bar.getBounds());

  box.add(bar);
  box.add(graphics);

  return { boxScore: box, scoreUserLabel };
};
