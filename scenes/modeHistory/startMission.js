import { alertCard } from "./components/alertCard.js";
import { crearPlataforma } from "../module/platform.js";
import { dimesionesPlataformaIndividual } from "../module/platform.js";
import { crearVideo } from "../module/videoInfo.js";
import { traslate } from "../../data/dialogues.js";
import { infoMission } from "./components/infoMission.js";
import { getIndexMission, getInfoMission } from "./infoMission.js";
import { PROPERTY } from "../../utils/constants.js";
import { MISSIONS } from "./missions/index.js";
import { arrows } from "./arrows.js";

export const startMission = (scene) => {


  const example = scene.physics.add.staticGroup();

  const { x, y } = getInfoMission(PROPERTY.buttonMission); //pbtiene las posiciones del boton de la mision

  const { startN1 } = crearBotonMision(scene, x, y, example);

  dimesionesPlataformaIndividual(startN1, 1, 0);
  scene.physics.add.overlap(
    scene.avatar.avatarPlayer,
    example,
    async () => {
      window.missionActive = true;
      const narradorVideo = getInfoMission(PROPERTY.narrador);
      scene.avatar.moveTo(0, 0, "turn");
      scene.iconMap.destroy();
      startN1.destroy();
      await crearVideo(
        traslate(narradorVideo),
        getInfoMission(PROPERTY.video),
        scene
      );
      window.runTime = true;
      scene.avatar.runTime(scene);
      infoMission(scene);
      alertCard(scene);

      const { index } = getIndexMission();

      if (index === "mission1") {
        reflexImage(scene, 1034, 619, "rigth");
        //scene.add.image(1467, 566, "up").scale(0.5);
        reflexImage(scene, 1467, 566, "up");
        scene.avatar.avatarPlayer.setDepth(1);
        scene.tree2.setDepth(2);
        return;
      }

      if (index === "mission3") {
        const { index, step } = getIndexMission();
        arrows[index]?.["cubicle"]?.[step]?.forEach((arrow) => {
          reflexImage(scene, arrow.x, arrow.y, arrow.name);
        });
        scene.avatar.avatarPlayer.setDepth(1);
        return;
      }

      MISSIONS[index](scene);


      return;
    },
    null,
    scene
  );
};
const crearBotonMision = (scene, x, y, example) => {
  const startN1 = crearPlataforma(x, y, "logoRedondo", example, 0.04);
  startN1.setDepth(50);

  const Between = Phaser.Math.Between;

  var postFxPlugin = scene.plugins.get("rexglowfilterpipelineplugin");

  var pipeline = postFxPlugin.add(startN1);

  startN1.glowTask = startN1.scene.tweens.add({
    targets: pipeline,
    intensity: 0.02,
    ease: "Linear",
    duration: Between(500, 1000),
    repeat: -1,
    yoyo: true,
  });
  dimesionesPlataformaIndividual(startN1, 1, 0);

  return { startN1 };
};

export const reflexImage = (scene, x, y, name) => {

  const grupo = scene.physics.add.staticGroup();

  const startN1 = crearPlataforma(x, y, name, grupo, 0.5);
  startN1.setDepth(0);


  const Between = Phaser.Math.Between;

  var postFxPlugin = scene.plugins.get("rexglowfilterpipelineplugin");

  var pipeline = postFxPlugin.add(startN1);

  startN1.glowTask = startN1.scene.tweens.add({
    targets: pipeline,
    intensity: 0.02,
    ease: "Linear",
    duration: Between(500, 1000),
    repeat: -1,
    yoyo: true,
  });

  return { startN1 };
}