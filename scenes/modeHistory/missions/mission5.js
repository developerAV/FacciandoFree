import { crearPlataforma } from "../../module/platform.js";
import { getDiaglogMission } from "../../../data/traslateDialogs.js";
import { cardDialog } from "../components/dialogCard.js";
import { alertCard } from "../components/alertCard.js";
import { endMission } from "../endMission.js";
import { SCENE } from "../../../utils/constants.js";
import { cardEndMission } from "../components/cardEndMission.js";

/********************************************************
 ********************* area de estudiantes *************************
 ********************************************************/
export const mission5 = (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  //  alertCard(scene);
  const compain = scene.add.image(1005, 642, "dude").setScale(1.3);
  const redZone = crearPlataforma(1083, 638, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 1005, 642);//aca llama a la alerta de dialogo
    compain.destroy();
  });
};

export const mission5Medio = async (scene) => {
  /*   const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    cardEndMission(scene, dialogs, 1005, 642);
    endMission(scene, SCENE.MISSION_5);
   */
  let plataformas = scene.physics.add.staticGroup();
  window.moreDialogs = true;
  window.dialogNumber = 1;
  const machuca = scene.add.image(1116, 711, "dude").setScale(1.3);
  const redZone = crearPlataforma(1100, 566, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 935, 244);
    machuca.destroy();
    window.moreDialogs = false;
    cardEndMission(scene);
  /*   await endMission(SCENE.commission_area, {
      x: scene.avatar.avatarPlayer.x,
      y: scene.avatar.avatarPlayer.y,
    }); */
  });
};
