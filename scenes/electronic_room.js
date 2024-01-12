import { Avatar } from "./player.js";
import { crearPlataforma, overlapPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { alertCard } from "./modeHistory/components/alertCard.js";
import { mission5Medio } from "./modeHistory/missions/mission5.js";

export class Laboratorio1 extends Phaser.Scene {
  constructor() {
    super({ key: "electronic_room" });
  }

  preload() {

  }

  create() {
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
    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);


    if (window.missionActive) {
      alertCard(this);
      console.log(window.user.actualMission);
      console.log(window.user.actualLevel);
      console.log(window.user.step);
      if (window.user.actualMission === 2 && window.user.actualLevel == 2 && window.user.step === 3) {
        mission5Medio(this);
      }

    }

    shortMap(this, "mapaOutside");
    bigMap(this);

  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
