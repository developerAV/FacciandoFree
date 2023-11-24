import { COLORS, FONT } from "../../../utils/constants.js";
import { traslate } from "../../../data/dialogues.js";
import { getUserById } from "../../../services/user.js";

import { COLORS_HEX } from "../../../utils/constants.js";

export const navbar = async (scene, name = "cubicle", scale = 0.5) => {
  //const
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
  home.setInteractive();
  home.on("pointerdown", function () {
    scene.scene.restart();
    scene.scene.stop();
    scene.scene.start("intro");
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

  const information = scene.add.image(1380, 47, "botonNav").setScale(0.5);
  information.setInteractive();
  information.on("pointerdown", function () {
    scene.showVideo();
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
