import { traslate } from "../../../data/dialogues.js";
import { COLORS, COLORS_HEX, FONT } from "../../../utils/constants.js";
export const infoMission = (
  scene,
  topicText = "mission1",
  messageText = "dfasdfl;asdlfka;sldkf;laskdf"
) => {
  let activeBox = false;
  const box = scene.add.container(1200, 400);
  const boxBtn = scene.add.container(1190, 500);
  box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(0x00051a, 0.42);
  boxBg.fillRoundedRect(0, 0, 180, 200, 10);
  
  const boxBgBtn = scene.add.graphics();
  boxBgBtn.fillStyle(COLORS.blueDark, 0.8);
  boxBgBtn.fillRoundedRect(0, 0, 10, 40, 0);
  boxBtn.add(boxBgBtn);

  const btn = scene.add.image(0, 0, "mode").setScale(0.1);
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

  const topic = scene.add.text(20, 60, traslate(topicText), {
    font: `10px ${FONT}`,
    fill: "#03bed0",
    wordWrap: {
      width: 500,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const message = scene.add.text(20, 100, messageText, {
    font: `10px ${FONT}`,
    fill: "#fff",
    wordWrap: {
      width: 450,
    },
    lineSpacing: 10,
    padding: {
      x: 10,
      y: 40,
    },
  });

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
