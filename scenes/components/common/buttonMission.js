import { COLORS } from "../../../utils/constants.js";
import { crearPlataforma } from "../../module/platform.js";

export const createButtonMission = (scene) => {
  let containerX = scene.add.container();
  const platform = scene.physics.add.staticGroup();
  // Crear el botón circular
  containerX.add(scene.add.circle(0, 0, 25, COLORS.white, 0.06));

  // agregar una imagen al botón circular
  const level = crearPlataforma(0, 0, "level", platform, 0.05);
  level.displayWidth = 10;
  level.displayHeight = 10;
  containerX.add(level);
  
  setInterval(() => {
    if (!scene.keyB) return;
    if (!containerX.list[0]) return;
    if (containerX.list[0].strokeColor === COLORS.white) {
      containerX.list[0].setStrokeStyle(8, COLORS.blue);
    } else {
      containerX.list[0].setStrokeStyle(4, COLORS.white);
    }
  }, 1000);
  
  // Configurar eventos y colisiones
  
  containerX.setDepth(100);
  return containerX;
};
