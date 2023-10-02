import { COLORS, FONT } from "../../../utils/constants.js";
import { traslate } from "../../../data/dialogues.js";
import { getUserById } from "../../../services/user.js";

import { COLORS_HEX } from "../../../utils/constants.js";

export const navbar = async (scene, name = "cubicle") => {
  const user = await getUserById(window.user?._id);

  const box = scene.add.container(0, 0);
  box.setName("box");
  const boxBg = scene.add.graphics();
  boxBg.fillStyle(COLORS.blueDark);
  boxBg.fillRoundedRect(0, 0, 1700, 100, 0);
  box.add(boxBg);

  const home = scene.add.image(40, 47, "botonNav").setScale(0.5);
  home.setInteractive();
  home.on("pointerdown", function () {
    scene.scene.start("intro");
  });
  box.add(home);

  const fullScreen = scene.add.image(1560, 47, "botonNav").setScale(0.5);
  fullScreen.setInteractive();
  fullScreen.on("pointerdown", function () {
    scene.scale.toggleFullscreen();
  });
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

  box.add(activarSonido);

  const information = scene.add.image(1380, 47, "botonNav").setScale(0.5);
  information.setInteractive();
  information.on("pointerdown", function () {
    alert("Información proceso de selección");
  });

  const nameScene = scene.add.text(100, 25, traslate(name), {
    font: `40px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
  });

  const scoreUserLabel = scene.add.text(740, 20, traslate("score") + ":", {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
  });
  const scoreUser = scene.add.text(760, 50, user.score, {
    font: `25px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 200,
    },
  });

  box.add(nameScene);
};
