import { COLORS } from "../../../utils/constants.js";
import { dialog } from "../dialogs.js";
const style = {
  width: 150,
  space: {
    left: 20,
    right: 20,
    bottom: 20,
    content: 20,
    action: 15,
  },

  background: {
    color: COLORS.black,
    strokeColor: COLORS.blue,
    radius: 7,
  },
  content: {
    space: { left: 5, right: 5, top: 5, bottom: 5 },
    text: {
      fontSize: 15,
    },
  },
};

export const alertCard = (scene) => {
  let x = 1000; //zoom == 2
  let y = 700; //zoom == 2
  if (scene.cameras.main.zoom == 1.5) {
    x = 1000; //zoom == 1.5
    y = 700; //zoom == 1.5
  }
  if (scene.cameras.main.zoom == 1) {
    x = 1000; //zoom == 1
    y = 700; //zoom == 1
  }

  const alert = scene.rexUI.add
    .confirmDialog(style)
    .setPosition(x, y)
    .resetDisplayContent({
      content: dialog(),
    })
    .layout()
    .setScrollFactor(0)
    .setDepth(1000);

  setTimeout(function () {
    alert.scaleDownDestroy(100);
  }, 4000); // 4000 milisegundos = 4 segundos
};
