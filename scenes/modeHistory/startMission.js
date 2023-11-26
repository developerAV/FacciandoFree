import { alertCard } from "./components/alertCard.js";
import { crearPlataforma } from "../module/platform.js";
import { dimesionesPlataformaIndividual } from "../module/platform.js";
import { crearVideo } from "../module/videoInfo.js";
import { traslate } from "../../data/dialogues.js";
import { infoMission } from "./components/infoMission.js";
import { getPositionMap } from "./dialogs.js";

export const startMission = (scene) => {
  const example = scene.physics.add.staticGroup();

  const startN1 = crearPlataforma(
    getPositionMap("x", "button"),
    getPositionMap("y", "button"),
    "logoRedondo",
    example,
    0.04
  );
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
  scene.physics.add.overlap(
    scene.avatar.avatarPlayer,
    example,
    async () => {
      window.zoom = scene.cameras.main.zoom;
      console.log("zoom", window.zoom);
      scene.avatar.moveTo(0, 0, "turn");
      scene.iconMap.destroy();
      startN1.destroy();
      await crearVideo(traslate("mission1"), "avatarVideo1", scene);
      window.runTime = true;
      scene.avatar.runTime(scene);
      //scene.iconMap.setPosition(getPositionMap("x"), getPositionMap("y"));
      infoMission(scene);
      alertCard(scene);
    },
    null,
    scene
  );
};
