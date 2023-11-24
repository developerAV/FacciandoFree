import { alertCard } from "./components/alertCard.js";
import { crearPlataforma } from "../module/platform.js";
import { dimesionesPlataformaIndividual } from "../module/platform.js";
import { getPositionMap } from "./dialogs.js";
import { crearVideo } from "../module/videoInfo.js";
import { traslate } from "../../data/dialogues.js";

export const startMission = (scene) => {
  const example = scene.physics.add.staticGroup();

  const startN1 = crearPlataforma(1005, 565, "logoRedondo", example, 0.04);

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

  dimesionesPlataformaIndividual(startN1);
  scene.physics.add.overlap(
    scene.avatar.avatarPlayer,
    example,
    () => {
      startN1.destroy();
      crearVideo(traslate("mission1"), "avatarVideo1", scene, true);
      scene.iconMap.setPosition(getPositionMap("x"), getPositionMap("y"));
      alertCard(scene);
    },
    null,
    scene
  );
};
