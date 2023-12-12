import { getDiaglogMission } from "../../../data/traslateDialogs.js";
import { SCENE } from "../../../utils/constants.js";
import { crearPlataforma } from "../../module/platform.js";
import { cardDialog } from "../components/dialogCard.js";
import { endMission } from "../endMission.js";
/********************************************************
 ****************** COMISION AREA ***********************
 ********************************************************/
export const mission3 = (scene) => {
  const director = scene.add.image(370, 798, "dude").setScale(1.3);
  let plataformas = scene.physics.add.staticGroup();
  const redZone = crearPlataforma(500, 800, "boton", plataformas);

  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone, async () => {
    if (scene.box) {
      scene.box.destroy();
    }
    window.runTime = false;
    scene.avatar.runTime(false);
    scene.avatar.moveTo(0, 0, "turn");
    redZone.destroy();
    /*  CARTER DE QUE LA MISSION TERMINÓ*/
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision
    await cardDialog(scene, dialogs, 370, 798); //cambiar a pantalla grande
    director.destroy();

    await endMission(SCENE.floor3, {
      x: 800,
      y: 500,
    });
  });
};
