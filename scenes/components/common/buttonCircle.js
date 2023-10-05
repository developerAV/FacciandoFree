import { COLORS } from "../../../utils/constants.js";
export const buttonCircle = (scene, sceneName, platform, avatarX, avatarY) => {
  const containerX = scene.add.container();
  containerX.visible = false;
  window.avatarX = avatarX;
  window.avatarY = avatarY;
  scene.buttonCentro = scene.add.circle(0, 0, 25, COLORS.white, 0.6);
  //text press x
  scene.textx = scene.add.text(-14, -10, "Press\n    X", {
    fontFamily: "Arial",
    fontSize: 10,
    color: "#f2f2f2",
  });
  setInterval(() => {
    if (scene.buttonCentro.strokeColor == COLORS.white) {
      scene.buttonCentro.setStrokeStyle(8, COLORS.blue);
      scene.textx.setColor("#000");
      return;
    }
    scene.buttonCentro.setStrokeStyle(4, COLORS.white);
    scene.textx.setColor("#f2f2f2");
  }, 1000);

  containerX.add(scene.buttonCentro);
  containerX.add(scene.textx);
  containerX.setDepth(1);

  scene.physics.add.collider(scene.avatar.avatarPlayer, platform, () => {
    //posicionar pressx
    containerX.visible = true;
    scene.keyB = true;
    containerX.x = scene.avatar.avatarPlayer.x + 80;
    containerX.y = scene.avatar.avatarPlayer.y;

    // scene.scene.start(sceneName);
    console.log("valor x:", window.avatarX, "valor y: ", window.avatarY);

    //presionando la tecla x cambie de escena
  
      scene.input.keyboard.on("keydown-X", () => {
        if(!scene.keyB) return;
        scene.scene.start(sceneName);
        console.log("valor x:", window.avatarX, "valor y: ", window.avatarY);
      });
    

    containerX.setSize(containerX.x, containerX.y);

    scene.buttonCentro.setInteractive();
    scene.buttonCentro.on("pointerdown", () => {
      scene.scene.start(sceneName);
      console.log("valor x:", window.avatarX, "valor y: ", window.avatarY);
    });
  });
  
  scene.input.keyboard.on("keydown", () => {
    containerX.visible = false;
    scene.keyB = false;
  });
  return containerX;
};
