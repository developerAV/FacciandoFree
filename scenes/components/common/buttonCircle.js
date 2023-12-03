import { putUser } from "../../../services/user.js";
import { COLORS } from "../../../utils/constants.js";
import { handleSteps } from "../../modeHistory/handleSteps.js";
export const createButtonCircle = (
  scene,
  sceneName,
  platform,
  avatarX,
  avatarY
) => {
  const buttonCircle = {};

  buttonCircle.containerX = scene.add.container();
  buttonCircle.containerX.visible = false;

  // Crear el botón circular
  buttonCircle.containerX.add(scene.add.circle(0, 0, 25, COLORS.white, 0.6));

  // Crear el texto "Press X"
  const textX = scene.add.text(-14, -10, "Press\n    X", {
    fontFamily: "Arial",
    fontSize: 10,
    color: "#f2f2f2",
  });
  buttonCircle.containerX.add(textX);

  // Configurar el intervalo para alternar colores
  setInterval(() => {
    if (!scene.keyB) return;
    if (!buttonCircle.containerX.list[0]) return;
    if (buttonCircle.containerX.list[0].strokeColor === COLORS.white) {
      buttonCircle.containerX.list[0].setStrokeStyle(8, COLORS.blue);
      textX.setColor("#000");
    } else {
      buttonCircle.containerX.list[0].setStrokeStyle(4, COLORS.white);
      textX.setColor("#f2f2f2");
    }
  }, 1000);

  // Configurar eventos y colisiones
  scene.physics.add.collider(scene.avatar.avatarPlayer, platform, () => {
    window.sceneName = sceneName;
    window.avatarX = avatarX;
    window.avatarY = avatarY;
    buttonCircle.containerX.visible = true;
    scene.keyB = true;
    buttonCircle.containerX.x = scene.avatar.avatarPlayer.x + 80;
    buttonCircle.containerX.y = scene.avatar.avatarPlayer.y;

    buttonCircle.containerX.setSize(
      buttonCircle.containerX.x,
      buttonCircle.containerX.y
    );

    buttonCircle.containerX.list[0].setInteractive();
    buttonCircle.containerX.list[0].on("pointerdown", async () => {
      await handleSteps(); // cambiar de alerta a la mission actualizando los pasos
      scene.scene.restart();
      scene.scene.stop();
      scene.scene.start(sceneName);
    });
  });
  scene.input.keyboard.on("keydown-X", async () => {
    if (!scene.keyB) return;

    scene.avatar.avatarPlayer.destroy();
    scene.anims.remove("turn");
    scene.anims.remove("left");
    scene.anims.remove("right");
    scene.anims.remove("up");
    scene.anims.remove("down");

    await handleSteps(); // cambiar de alerta a la mission actualizando los pasos
    scene.scene.start(window.sceneName);
    // scene.scene.remove(scene.key);
  });

  scene.input.keyboard.on("keydown", () => {
    buttonCircle.containerX.visible = false;
    scene.keyB = false;
  });

  if (window.isMobile) {
    //buttonCentro se refiere circulo del centro del joystick(file: Player)
    scene.buttonCentro.on("pointerdown", () => {
      buttonCircle.containerX.visible = false;
    });

    scene.buttonCentro.on("pointermove", () => {
      buttonCircle.containerX.visible = false;
    });
  }
  buttonCircle.containerX.setDepth(100);
  return buttonCircle;
};

const mission = async () => {
  const mission = window.user.actualMission;
  const active = window.missionActive;
  const step = window.user.step;

  if (mission === 1 && active) {
    if (step === 1) {
      window.user.step = 2;
      putUser(window.user._id, { step: 2 });
    }
    if (step === 2) {
      window.user.step = 3;
      putUser(window.user._id, { step: 3 });
    }
    if (step === 4) {
      window.user.step = 5;
      putUser(window.user._id, { step: 5 });
    }
  }
};
