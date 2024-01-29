import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { reflexImage, startMission } from "./modeHistory/startMission.js";
import { alertCard } from "./modeHistory/components/alertCard.js";
import { getIndexMission } from "./modeHistory/infoMission.js";
import { arrows } from "./modeHistory/arrows.js";
let activeVideo = false;

export class FloorHallway2 extends Phaser.Scene {
  constructor() {
    super({ key: "floorHallway2" });
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
    this.cameras.main.fadeIn(500);

    const paredesSupeiores = this.physics.add.staticGroup();
    const plataformas = this.physics.add.staticGroup();
    const escaleras = this.physics.add.staticGroup();
    const ptfmOverlap = this.physics.add.staticGroup();
    this.add.image(590, 500, "pisoFloorHallway2").setScale(1);

    crearPlataforma(598, 137, "paredSuperiorFloorHallway2", paredesSupeiores);
    crearPlataforma(1161.5, 273, "esquinaSuperiorDerecha", paredesSupeiores);
    crearPlataforma(1306, 521, "salaEstudianteArriba", paredesSupeiores);

    crearPlataforma(1241, 409, "pared", plataformas);
    crearPlataforma(1466, 758, "paredLarga", plataformas);
    crearPlataforma(1218, 900, "paredInferior", plataformas);
    crearPlataforma(138, 385, "faltante", paredesSupeiores);

    crearPlataforma(445, 370, "hueco", plataformas, 0.35);

    crearPlataforma(1000, 281, "banca", paredesSupeiores, 1.35);

    this.add.image(700, 256, "puerta").setScale(1.35);
    this.add.image(637, 256, "puerta2").setScale(1.35);
    crearPlataforma(866, 531, "paredCursoIzquierda", plataformas);

    crearPlataforma(1010, 750, "mesaVertical", plataformas, 0.5);
    crearPlataforma(1438, 731, "mesaMedio", plataformas);

    if (window.missionActive) {
      const { index, step } = getIndexMission();
      arrows[index]?.["floorHallway2"]?.[step]?.forEach((arrow) => {
        reflexImage(this, arrow.x, arrow.y, arrow.name);
      });
    }


    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_2
    );
    crearPlataforma(1446, 665, "muroFloor2", plataformas);

    crearPlataforma(554, 713, "cursos", plataformas);
    crearPlataforma(666, 481, "cachoFaltante", plataformas);
    crearPlataforma(382, 476, "paredCursoDerecha", plataformas);
    crearPlataforma(26, 369, "separadorCurso", plataformas);

    const escaleraArriba = crearPlataforma(
      1181,
      356,
      "escaleraArriba",
      escaleras
    );
    crearPlataforma(1205, 428, "escaleraAbajoAbajo", plataformas, 0.25);
    const escarleraAbajo = crearPlataforma(
      1181,
      440,
      "escaleraAbajo",
      escaleras
    );

    crearPlataforma(990, 740, "sillaDeLado2", plataformas);
    crearPlataforma(990, 770, "sillaDeLado2", plataformas);
    crearPlataforma(990, 830, "sillaDeLado2", plataformas);
    crearPlataforma(990, 860, "sillaDeLado2", plataformas);
    crearPlataforma(1181, 565, "sillaFrontal", plataformas);
    crearPlataforma(1220, 565, "sillaFrontal", plataformas);
    crearPlataforma(1311, 565, "sillaFrontal", plataformas);
    crearPlataforma(1350, 565, "sillaFrontal", plataformas);
    crearPlataforma(1390, 577, "sillaDeLado", plataformas);
    crearPlataforma(1333, 580, "mesaHorizontal", plataformas, 0.5);
    crearPlataforma(1207, 580, "mesaHorizontal", plataformas, 0.5);

    crearPlataforma(1197, 865, "mesasAbajo", plataformas);
    crearPlataforma(1438, 834, "mesaAbajoDerecha", plataformas);
    const muro = crearPlataforma(1446, 760, "muroFloor2", plataformas);
    muro.setDepth(9);
    const mesa = crearPlataforma(1010, 750, "mesaVertical", ptfmOverlap, 0.5);
    const huecoOverlap = crearPlataforma(445, 370, "hueco", ptfmOverlap, 0.35);
    const mesasOverlapM = crearPlataforma(1438, 731, "mesaMedio", ptfmOverlap);
    const paredOverlap = crearPlataforma(
      866,
      531,
      "paredCursoIzquierda",
      ptfmOverlap
    );

    if (activeVideo) {
      crearVideo(mensaje.txtCubicle[window.lan], "avatarVideo", this);
    }

    this.cameras.main.startFollow(this.avatar.avatarPlayer); //Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    dimesionesPlataforma(plataformas, 0.5, 22);
    dimesionesPlataforma(paredesSupeiores, 1, -42);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      ptfmOverlap,
      () => {
        overlapPlataforma(this, huecoOverlap);
        overlapPlataforma(this, paredOverlap);
        overlapPlataforma(this, mesa);
        overlapPlataforma(this, mesasOverlapM);

        // overlapPlataforma(this, paredMedia2Overlap)
      },
      null,
      this
    );

    createButtonCircle(this, SCENE.cubicle2, escarleraAbajo, 507, 925);
    createButtonCircle(this, SCENE.floor3, escaleraArriba, 871, 545);

    if (window.missionActive) {
      alertCard(this);
    }

    if (
      !window.missionActive && getIndexMission().index === "mission6"
    ) {
      startMission(this);
    }

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredesSupeiores);
    this.physics.add.collider(this.avatar.avatarPlayer, escaleras);

    shortMap(this, "mapaOutside");
    bigMap(this);
    navbar(this, SCENE.floor2, 0.5);
  }

  update() {

    window.avatarUpdateActivo && this.avatar.update(this);
  }
}
