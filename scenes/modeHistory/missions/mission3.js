import { crearPlataforma } from "../../module/platform.js";
import { PROPERTY, SCENE } from "../../../utils/constants.js";
import { endMission } from "../endMission.js";
import { traslate } from "../../../data/dialogues.js";
import { cardEndMission } from "../components/cardEndMission.js";
import { getInfoMission } from "../infoMission.js";
import { crearVideo } from "../../module/videoInfo.js";
import { alertCard } from "../components/alertCard.js";
import { startMission } from "../startMission.js";

export const mission3 = (scene) => {
    alertCard(scene)
    let plataformas = scene.physics.add.staticGroup();
    const redZone2 = crearPlataforma(800, 500, "boton", plataformas);

    scene.physics.add.overlap(scene.avatar.avatarPlayer, redZone2, async () => {
        redZone2.destroy();

        scene.avatar.moveTo(0, 0, "turn");
        await crearVideo(
            traslate("mission3final"),
            getInfoMission(PROPERTY.video),
            scene
        );
        await cardEndMission(scene);
        await endMission(SCENE.cubicle, {
            x: 800,
            y: 500,
        });
        startMission(scene);
    });
};
