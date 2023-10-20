import { COLORS } from "../../../utils/constants.js";

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
    window.avatarX = avatarX;
    window.avatarY = avatarY;
    console.log("avatarX: ", window.avatarX, "avatarY: ", window.avatarY);
    buttonCircle.containerX.visible = true;
    scene.keyB = true;
    buttonCircle.containerX.x = scene.avatar.avatarPlayer.x + 80;
    buttonCircle.containerX.y = scene.avatar.avatarPlayer.y;

    scene.input.keyboard.on("keydown-X", () => {
      if (!scene.keyB) return;
      scene.scene.start(sceneName);
      // scene.scene.remove(scene.key);
      console.log(
        "valor x:",
        buttonCircle.avatarX,
        "valor y: ",
        buttonCircle.avatarY
      );
    });

    buttonCircle.containerX.setSize(
      buttonCircle.containerX.x,
      buttonCircle.containerX.y
    );

    buttonCircle.containerX.list[0].setInteractive();
    buttonCircle.containerX.list[0].on("pointerdown", () => {
      scene.scene.start(sceneName);
    });
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

  return buttonCircle;
};
