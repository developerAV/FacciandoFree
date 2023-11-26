import { COLORS, FONT } from "../../../utils/constants.js";
export const infoMission = (scene) => {
  let activeBox = false;
  const box = scene.add.container(1200, 400);
  const boxBtn = scene.add.container(1190, 500);
  box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(0x00051a, 0.6);
  boxBg.fillRoundedRect(0, 0, 180, 200, 10);

  const boxBgBtn = scene.add.graphics();
  boxBgBtn.fillStyle(COLORS.blueDark, 0.8);
  boxBgBtn.fillRoundedRect(0, 0, 5, 40, 0);
  boxBtn.add(boxBgBtn);
  boxBtn.setScrollFactor(0);

  const btn = scene.add.image(0, 0, "mode").setScale(0.1);
  btn.setScrollFactor(0);

  boxBtn.add(btn);
  box.add(boxBg);

  btn.setInteractive();
  btn.on("pointerdown", () => {
    activeBox = !activeBox;
    if (activeBox) {
      animateBoxMovement(activeBox, scene, box, boxBtn); // Iniciar la animación cuando activeBox es true
      return;
    }
    animateBoxMovement(activeBox, scene, box, boxBtn); // Iniciar la animación cuando activeBox es false
  });

  const topic = scene.add
    .text(5, 5, window.missionVisibleBox.name[window.lan], {
      font: `25px ${FONT}`,
      fill: "#03bed0",
      wordWrap: {
        width: 300,
      },
      padding: {
        x: 10,
        y: 10,
      },
    })
    .setScale(0.5);
  const message = scene.add
    .text(5, 10, window.missionVisibleBox.description[window.lan], {
      font: `25px ${FONT}`,
      fill: "#fff",
      wordWrap: {
        width: 300,
      },
      lineSpacing: 10,
      padding: {
        x: 10,
        y: 40,
      },
    })
    .setScale(0.5);

  box.add(topic);
  box.add(message);
  box.setScrollFactor(0);

  return { box };
};
function animateBoxMovement(activeBox, scene, box, btn) {
  if (activeBox) {
    scene.tweens.add({
      targets: btn,
      x: 990,
      duration: 500, // Duración de la animación en milisegundos
      ease: "Linear", // Tipo de easing
      onComplete: () => {},
    });
    scene.tweens.add({
      targets: box,
      x: 1000,
      duration: 500, // Duración de la animación en milisegundos
      ease: "Linear", // Tipo de easing
      onComplete: () => {
        // Acciones adicionales al completar la animación (si es necesario)
      },
    });
    return;
  }
  scene.tweens.add({
    targets: box,
    x: 1200,
    duration: 500,
    ease: "Linear",
    onComplete: () => {
      // Acciones adicionales al completar la animación (si es necesario)
    },
  });
  scene.tweens.add({
    targets: btn,
    x: 1190,
    duration: 500,
    ease: "Linear",
    onComplete: () => {
      // Acciones adicionales al completar la animación (si es necesario)
    },
  });
}
