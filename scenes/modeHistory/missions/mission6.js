import { crearPlataforma, dimesionesPlataforma, dimesionesPlataformaIndividual } from "../../module/platform.js";
import { getDiaglogMission } from "../../../data/traslateDialogs.js";
import { cardDialog } from "../components/dialogCard.js";
import { alertCard } from "../components/alertCard.js";
import { endMission } from "../endMission.js";
import { SCENE } from "../../../utils/constants.js";
import { cardEndMission } from "../components/cardEndMission.js";
import { handleSteps } from "../handleSteps.js";
import { reflexImage } from "../startMission.js";
import { getIndexMission } from "../infoMission.js";
import { arrows } from "../arrows.js";

/********************************************************
 ********************* area de estudiantes ************************* floorHallway2
 ********************************************************/
export const mission6 = (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  const compain = scene.add.image(1005, 642, "dude").setScale(1.3);
  const redZone = crearPlataforma(1083, 638, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 1005, 642);//aca llama a la alerta de dialogo
    compain.destroy();

    const { index, step } = getIndexMission();
    arrows[index]?.["floorHallway2"]?.[step]?.forEach((arrow) => {
      reflexImage(scene, arrow.x, arrow.y, arrow.name);
    });
    scene.avatar.avatarPlayer.setDepth(1);


  });
};

export const mission6Medio = async (scene) => {

  let plataformas = scene.physics.add.staticGroup();
  window.dialogNumber = 1;
  const machuca = scene.add.image(1116, 711, "dude").setScale(2.3);
  const redZone = crearPlataforma(1100, 566, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    window.moreDialogs = true;
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    window.moreDialogs = false;
    await cardDialog(scene, dialogs, 1116, 711);
    const placa = crearPlataforma(469, 843, "placa", plataformas).setScale(0.25);
    dimesionesPlataformaIndividual(placa);
    scene.physics.add.overlap(scene.avatar.avatarPlayer, placa, async () => {
      placa.destroy();
      handleSteps(true)
      alertCard(scene);

      const redZone = crearPlataforma(1100, 566, "boton", plataformas);
      scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
        redZone.destroy();
        window.dialogNumber = 2;
        window.moreDialogs = true;
        const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
        window.moreDialogs = false;
        const placaPeque = scene.add.image(1050, 711, "placa").setScale(0.1);
        await cardDialog(scene, dialogs, 1116, 711, true);
        cardEndMission(scene);
        machuca.destroy();
        placaPeque.destroy();
        await endMission(SCENE.electronic_room, {
          x: scene.avatar.avatarPlayer.x,
          y: scene.avatar.avatarPlayer.y,
        });
      });
    });
  });
};
