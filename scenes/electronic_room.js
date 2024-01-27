import { Avatar } from "./player.js";
import { crearPlataforma, dimesionesPlataformaIndividual, overlapPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { alertCard } from "./modeHistory/components/alertCard.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { mission6Medio } from "./modeHistory/missions/mission6.js";
import { getIndexMission } from "./modeHistory/infoMission.js";

export class Laboratorio1 extends Phaser.Scene {
  constructor() {
    super({ key: "electronic_room" });
  }

  preload() {
    this.load.plugin(
      "rexglowfilterpipelineplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilterpipelineplugin.min.js",
      true
    );
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }

  create() {
    window.avatarUpdateActivo = true;

    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    this.add.image(800, 500, "pisoLab1").setScale(2);

    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    let ptfmOverlap = this.physics.add.staticGroup();

    //Pared superior
    crearPlataforma(800, 130, "paredSLaborario", paredPlataforma, 2);

    //mesas de la derecha

    //mesas de la izquierda
    /*
    */
    crearPlataforma(590, 700, "mesasLab", plataformas, 1.5);
    crearPlataforma(890, 410, "mesasLab", plataformas, 1.5);
    crearPlataforma(590, 410, "mesasLab", plataformas, 1.5);
    crearPlataforma(890, 700, "mesasLab", plataformas, 1.5);

    this.avatar = new Avatar(this, 800, 500, SIZE_AVATAR.v2);

    //escritorio
    crearPlataforma(1140, 850, "escritorio", plataformas, 2);

    //paredes
    //izquierda
    crearPlataforma(344, 665, "paredILaborario", plataformas, 2);

    //derecha
    crearPlataforma(1240, 670, "paredDLaborario", plataformas, 2);

    //paredes de abajo
    crearPlataforma(888, 947, "paredPILaborario", plataformas, 2);
    crearPlataforma(376, 944, "paredPDLaborario", plataformas, 2);

    let outRoom = crearPlataforma(466, 915, "redH", plataformas);
    dimesionesPlataformaIndividual(outRoom);


    dimesionesPlataforma(plataformas, 0.7, 30);
    dimesionesPlataforma(paredPlataforma, 0.6, 25);

    const mesaOverlap2 = crearPlataforma(590, 700, "mesasLab", ptfmOverlap, 1.5);
    const mesaOverlap1 = crearPlataforma(890, 700, "mesasLab", ptfmOverlap, 1.5);
    const mesaOverlap3 = crearPlataforma(590, 410, "mesasLab", ptfmOverlap, 1.5);
    const mesaOverlap4 = crearPlataforma(890, 410, "mesasLab", ptfmOverlap, 1.5);

    dimesionesPlataforma(ptfmOverlap, 1.5);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      ptfmOverlap,
      () => {
        overlapPlataforma(this, mesaOverlap1);
        overlapPlataforma(this, mesaOverlap2);
        overlapPlataforma(this, mesaOverlap3);
        overlapPlataforma(this, mesaOverlap4);
      },
      null,
      this
    );
    createButtonCircle(this, SCENE.second_floor1, outRoom, 861, 457);

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);


    if (window.missionActive) {
      alertCard(this);
      if (getIndexMission().index === "mission6" && window.user.step === 3) {
        mission6Medio(this);
      }
    }
    navbar(this, SCENE.electronic_room, 1);

  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
