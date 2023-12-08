import { crearPlataforma } from "../../module/platform.js";
import { getDiaglogMission } from "../../../data/traslateDialogs.js";
import { cardDialog } from "../components/dialogCard.js";
import { alertCard } from "../components/alertCard.js";
import { endMission } from "../endMission.js";
import { startMission } from "../startMission.js";
import { SCENE } from "../../../utils/constants.js";
/********************************************************
 *************** ADMINISTRATIVE_ROOM ********************
 ********************************************************/
export const mission1 = (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  alertCard(scene);
  const secretaria = scene.add.image(736, 697, "dude").setScale(1.3);
  const redZone = crearPlataforma(790, 697, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    redZone.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 736, 697);
    secretaria.destroy();
  });
};

/********************************************************
 ********************** CUBICLE *************************
 ********************************************************/
export const mission1Final = (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  const redZone = crearPlataforma(800, 500, "boton", plataformas);
  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    if (scene.box) {
      scene.box.destroy();
    }
    window.runTime = false;
    scene.avatar.runTime(false);
    window.avatarUpdateActivo = true;
    scene.avatar.moveTo(0, 0, "turn");
    redZone.destroy();
    /*  CARTEL DE QUE LA MISSION TERMINÓ*/
    const dialogs = ["0Termino la mission"]; //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 736, 697); //cambiar a pantalla grande
    await endMission(SCENE.cubicle, {
      x: scene.avatar.avatarPlayer.x,
      y: scene.avatar.avatarPlayer.y,
    });
    startMission(scene);
  });
};
