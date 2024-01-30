
import { COLORS, COLORS_HEX } from "../../../utils/constants.js";
import { getUserById } from "../../../services/user.service.js";
import { FONT } from "../../../utils/constants.js";

export const panelComment = async function (scene, listComments) {
  const childPanel = await createPanel2(scene, listComments);

  scene.scrollablePanel2 = scene.rexUI.add
    .scrollablePanel({
      x: 1050,
      y: 500,
      width: 1000,
      height: 450,

      scrollMode: "y",

      background: scene.rexUI.add.roundRectangle({
        strokeColor: COLORS.blue,
        radius: 10,
      }),

      panel: {
        child: childPanel,
        mask: { padding: 4 },
      },

      slider: {
        track: scene.rexUI.add.roundRectangle({
          width: 20,

          radius: 10,
          color: COLORS.blueDark,
          alpha: 0.5,
        }),
        thumb: scene.rexUI.add.roundRectangle({
          radius: 13,
          color: COLORS.white,
        }),
        space: {
          top: 0,
          right: 20,
          left: 20,
        },
      },
      mouseWheelScroller: {
        focus: false,
        speed: 0.1,
      },
      space: {
        left: 40,
        right: 0,
        top: 0,
        bottom: 0,
        panel: 10,
      },
    })
    .layout();
  scene.scrollablePanel2.setT(1);
  return;

}



function createPanel2(scene, listComments) {
  return new Promise(async (resolve) => {
    const xInit = 1;
    let yInit = 100;
    scene.container = scene.add.container();
    scene.container.setVisible(false);
    for (const listComment of listComments) {
      const user = await getUserById(listComment.user);


      const idUserFirebase = user ? user.idUserFirebase : "dude";
      const name = user ? user.name : "usuario eliminado";


      const { content = "No comment" } = listComment;

      const isCurrentUser = idUserFirebase === window.user.idUserFirebase;
      const color = isCurrentUser ? COLORS.blue : COLORS.white;
      const colorText = isCurrentUser ? COLORS_HEX.white : COLORS_HEX.blueDark2;
      const imgX = isCurrentUser ? 850 : 50;
      const nameX = isCurrentUser ? 650 : 80;

      const container2 = scene.add.container(xInit, yInit);
      const boxBg = scene.add.graphics();
      boxBg.fillGradientStyle(color, color, color, color, 0.9, 1, 1);
      boxBg.alpha = 0.8;

      const profile2 = scene.add.image(imgX, 45, idUserFirebase);
      profile2.setScale(0.7);

      const nameText = scene.add.text(nameX, 5, name, {
        font: `20px ${FONT}`,
        fill: colorText,
        wordWrap: { width: 500 },
        padding: { x: 10, y: 10 },
      });

      const commentText = scene.add.text(100, 30, content, {
        font: `24px ${FONT}`,
        fill: colorText,
        wordWrap: { width: 600 },
        padding: { x: 10, y: 10 },
      });

      yInit += commentText.height + 50;
      boxBg.fillRoundedRect(0, 0, 900, commentText.height + 35, 20);

      container2.add(boxBg);
      container2.add(profile2);
      container2.add(nameText);
      container2.add(commentText)

      scene.container.setSize(200, yInit);
      scene.container.add(container2);
    }
    scene.container.setVisible(true);
    resolve(scene.container);
    return scene.container;
  });
}