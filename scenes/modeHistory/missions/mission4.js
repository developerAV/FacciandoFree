import { crearPlataforma } from "../../module/platform.js";
import { getDiaglogMission } from "../../../data/traslateDialogs.js";
import { cardDialog } from "../components/dialogCard.js";
import { alertCard } from "../components/alertCard.js";
import { endMission } from "../endMission.js";
import { SCENE } from "../../../utils/constants.js";
import { cardEndMission } from "../components/cardEndMission.js";

/********************************************************
 ********************* 3ER PISO *************************
 ********************************************************/
export const mission4 = (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  //  alertCard(scene);
  const compain = scene.add.image(1005, 642, "dude").setScale(1.3);
  const redZone = crearPlataforma(900, 642, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 1005, 642);
    compain.destroy();
  });
};

/********************************************************
 ********************* COMMISION AREA *******************
 ********************************************************/
export const mission4Final = (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  window.moreDialogs = true;
  window.dialogNumber = 1;   
  

  const adriana = scene.add.image(935, 244, "dude").setScale(1.3);
  const redZone = crearPlataforma(950, 244, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 935, 244);
    adriana.destroy();
    window.moreDialogs = false;
    cardEndMission(scene);
    await endMission(SCENE.commission_area, {
      x: scene.avatar.avatarPlayer.x,
      y: scene.avatar.avatarPlayer.y,
    });
  });
};
