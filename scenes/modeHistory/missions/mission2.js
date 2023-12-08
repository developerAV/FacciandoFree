import { crearPlataforma } from "../../module/platform.js";
import { SCENE } from "../../../utils/constants.js";
import { getDiaglogMission } from "../../../data/traslateDialogs.js";
import { cardDialog } from "../components/dialogCard.js";
import { endMission } from "../endMission.js";
import { traslate } from "../../../data/dialogues.js";
import { style } from "../../components/intro/buttonLogout/styles.js";

export const mission2 = async (scene) => {
  let plataformas = scene.physics.add.staticGroup();
  scene.add.image(834, 350, "dude").setScale(1.3);
  const redZone2 = crearPlataforma(834, 400, "boton", plataformas);

  scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone2, async () => {
    redZone2.destroy();
    const dialogs = getDiaglogMission(); //obtener los dialogos de la mision

    await cardDialog(scene, dialogs, 834, 350);
    console.log(window.user.step, "step");
    await scene.rexUI.add
      .confirmDialog(style)
      .setScrollFactor(0)
      .setPosition(800, 500)
      .setScale(0.5)
      .setDraggable("title")
      .resetDisplayContent({
        title: traslate("Elige una opcion"),
        content: traslate("¿Te interesan esas asignaturas?"),
        buttonA: traslate("yes"),
        buttonB: traslate("no"),
      })
      .layout()
      .modalPromise()
      .then(async function (data) {
        if (data.index === 0) {
          window.avatarUpdateActivo = false;
          const dialogs = getDiaglogMission("si"); //obtener los dialogos de la mision
          await cardDialog(scene, dialogs, 834, 350);

          return;
        }
        window.avatarUpdateActivo = false;
        const dialogs = getDiaglogMission("no"); //obtener los dialogos de la mision
        await cardDialog(scene, dialogs, 834, 350);
      });
    /*  CARTEL DE QUE LA MISSION TERMINÓ*/
    await cardDialog(scene, ["mission terminada"], 800, 500);
    /*  CARTEL DE QUE LA MISSION TERMINÓ*/
    window.runTime = false;
    scene.avatar.runTime(false);
    await endMission(SCENE.cubicle, {
      x: 800,
      y: 500,
    });
  });
};
