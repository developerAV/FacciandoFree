import { COLORS, PROPERTY } from "../../../utils/constants.js";
import { getInfoMission } from "../infoMission.js";
import { FONT } from "../../../utils/constants.js";
const style = {
  font: `28px ${FONT}`,
  fill: "#fff",
  wordWrap: {
    width: 450,
  },
  lineSpacing: 10,
  padding: {
    x: 10,
    y: 40,
  },
};

export const alertCard = (scene) => {
  let x = 970; //zoom == 2
  let y = 660; //zoom == 2
  let scala = 1;
  if (scene.cameras.main.zoom == 1.5) {
    x = 1055; //zoom == 1.5
    y = 723; //zoom == 1.5
    scala = 1.2;
  }
  if (scene.cameras.main.zoom == 1) {
    x = 800; //zoom == 1
    y = 500; //zoom == 1
    scala = 2;
  }
  scene.box = scene.add.container(x, y);
  scene.box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(COLORS.blueDark, 0.75);
  boxBg.fillRoundedRect(0, 0, 220, 75, 5);
  scene.box.add(boxBg);
  //añadir un border al box
  const border = scene.add.graphics();
  border.lineStyle(2, COLORS.blue, 1);
  border.strokeRoundedRect(0, 0, 220, 75, 5);
  scene.box.add(border);

  const message = scene.add
    .text(0, 0, getInfoMission(PROPERTY.step), style)
    .setScale(0.5);
  scene.box.add(message);
  scene.box.setDepth(20);
  // alert.getElement("background").setStrokeStyle(3, COLORS.blue);
  scene.box.setScale(scala);
  scene.box.setScrollFactor(0);

  setTimeout(function () {
    if (scene.box) {
      scene.box.destroy();
    }
  }, 4000); // 4000 milisegundos = 4 segundos
}