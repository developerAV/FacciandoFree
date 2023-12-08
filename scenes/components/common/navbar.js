import { COLORS, FONT, FONT2, SCENE } from "../../../utils/constants.js";
import { traslate } from "../../../data/dialogues.js";
import { getUserById, putUser } from "../../../services/user.js";
import { info } from "./info.js";

import { COLORS_HEX } from "../../../utils/constants.js";
//import { buttonLogout } from "../intro/buttonLogout/buttonLogout.js";
import { style } from "../intro/buttonLogout/styles.js";

export const navbar = async (scene, name = "cubicle", scale = 0.5) => {
  let box = scene.add.container(400, 250); //zoom == 2
  if (scene.cameras.main.zoom == 1.5) {
    box = scene.add.container(265, 165); //zoom == 1.5
  }
  if (scene.cameras.main.zoom == 1) {
    box = scene.add.container(200, 100); //zoom == 1
  }

  box.setScrollFactor(0);
  box.setName("box");
  const boxBg = scene.add.graphics();
  boxBg.fillStyle(COLORS.blueDark);
  boxBg.fillRoundedRect(0, 0, 1700, 100, 0);
  box.add(boxBg);

  const home = scene.add.image(40, 47, "botonNav").setScale(0.5);
  home.setInteractive({ useHandCursor: true });
  home.on("pointerdown", async function () {
    home.disableInteractive();
    window.avatarUpdateActivo = false;
    scene.rexUI.add
      .confirmDialog(style)
      .setScrollFactor(0)
      .setPosition(800, 500)
      .setScale(0.5)
      .setDraggable("title")
      .resetDisplayContent({
        title: traslate("goHome"),
        content: !window.missionActive
          ? traslate("goToMenu")
          : traslate("contentGoHome"),
        buttonA: traslate("yes"),
        buttonB: traslate("no"),
      })
      .layout()
      .modalPromise()
      .then(async function (data) {
        window.avatarUpdateActivo = true;

        if (data.index === 0) {
          window.user = await getUserById(window.user._id);
          if (window.missionActive && window.user.step !== 1) {
            window.missionActive = false;
            window.user.step = 1;
            await putUser(window.user._id, { step: 1 });
          }
          window.avatarX = undefined;
          window.avatarY = undefined;
          window.time = 0;
          window.runTime = false;

          scene.avatar.avatarPlayer.destroy();
          window.loadAvatar = false;
          scene.scene.start(SCENE.intro);
          return;
        }
        home.setInteractive({ useHandCursor: true });
      });
  });
  home.setScrollFactor(0);
  box.add(home);

  const fullScreen = scene.add.image(1560, 47, "botonNav").setScale(0.5);
  fullScreen.setInteractive();
  fullScreen.on("pointerdown", function () {
    scene.scale.toggleFullscreen();
  });
  fullScreen.setScrollFactor(0);
  box.add(fullScreen);

  const activarSonido = scene.add.image(1470, 47, "sound").setScale(0.5);
  activarSonido.setInteractive();
  activarSonido.on("pointerdown", function () {
    if (scene.sound.mute) {
      scene.sound.mute = false;
      activarSonido.setTexture("mute");
      return;
    }
    scene.sound.mute = true;
    activarSonido.setTexture("sound");
  });
  activarSonido.setScrollFactor(0);
  box.add(activarSonido);

  const information = scene.add.image(1380, 47, "botonInfo").setScale(0.5);
  information.setInteractive();
  information.on("pointerdown", function () {
    info(scene);
  });
  information.setScrollFactor(0);
  box.add(information);

  scene.nameScene = scene.add.text(100, 25, traslate(name), {
    font: `40px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 500,
    },
  });
  box.add(scene.nameScene);

  const scoreUserLabel = scene.add.text(740, 20, traslate("score") + ":", {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
  });
  const scoreUser = scene.add.text(760, 50, window.user.score, {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
  });

  box.add(scoreUserLabel);
  box.add(scoreUser);

  box.setScale(scale);
  box.setDepth(1000);
  return box;
};
