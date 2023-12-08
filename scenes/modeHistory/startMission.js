import { alertCard } from "./components/alertCard.js";
import { crearPlataforma } from "../module/platform.js";
import { dimesionesPlataformaIndividual } from "../module/platform.js";
import { crearVideo } from "../module/videoInfo.js";
import { traslate } from "../../data/dialogues.js";
import { infoMission } from "./components/infoMission.js";
import { getInfoMission } from "./infoMission.js";
import { PROPERTY } from "../../utils/constants.js";
import { MISSIONS } from "./missions/index.js";

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
        traslate("narradorVideo"),
        getInfoMission(PROPERTY.video),
        scene
      );
      window.runTime = true;
      scene.avatar.runTime(scene);
      infoMission(scene);
      alertCard(scene);

      if (window.user.actualMission === 1) {
        return;
      }
      MISSIONS["mission" + window.user.actualMission](scene);
      return;
    },
    null,
    scene
  );
};
const crearBotonMision = (scene, x, y, example) => {
  const startN1 = crearPlataforma(x, y, "logoRedondo", example, 0.04);
  startN1.setDepth(10000);

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
