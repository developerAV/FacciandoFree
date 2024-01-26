import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import {
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
} from "./module/platform.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { startMission } from "./modeHistory/startMission.js";
import { getIndexMission } from "./modeHistory/infoMission.js";
export class Hallway300 extends Phaser.Scene {
  constructor() {
    super({ key: "hallway300" });
  }

  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    this.load.plugin(
      "rexglowfilterpipelineplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilterpipelineplugin.min.js",
      true
    );

  }

  create() {
    window.avatarUpdateActivo = true;
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // Configurar fondo transparente
    this.cameras.main.transparent = true;

    const fondoaula = this.add.image(800, 500, "backgroundHallway300");
    const fondoColor = this.add.image(800, 500, "pasilloPiso3");
    // const escalera2 = this.add.image(795, 632,  "escalera2");
    const escalera3 = this.add.image(878, 548, "escalera3");

    let scale = 1;
    let scaleComputer = 1.5;

    let plataformas = this.physics.add.staticGroup();
    let plataformaNorte = this.physics.add.staticGroup();
    let plataformaMedio = this.physics.add.staticGroup();
    let plataformaMedioOverlap = this.physics.add.staticGroup();

    let plataformaSur = this.physics.add.staticGroup();

    this.stairs = this.physics.add.staticGroup();
    this.stairs.create(796, 632, "escalera2");

    let cuadro = crearPlataforma(420, 597, "cuadro", plataformaMedio, scale);
    let cuadroOverlap = crearPlataforma(
      420,
      597,
      "cuadro",
      plataformaMedioOverlap,
      scale
    );

    crearPlataforma(566, 324, "paredNorte300", plataformaNorte, scale);
    crearPlataforma(140, 556, "paredIzq300", plataformas, scale);
    let pared209Plataforma = crearPlataforma(
      1117,
      229,
      "pared209",
      plataformaNorte,
      scale
    );
    crearPlataforma(1421, 452, "paredDer300", plataformas, scale);

    let paredHor1 = crearPlataforma(
      1195,
      500,
      "paredHor1",
      plataformaMedio,
      scale
    );
    let paredHor1Overlap = crearPlataforma(
      1195,
      500,
      "paredHor1",
      plataformaMedioOverlap,
      scale
    );

    crearPlataforma(1036, 545, "paredHor2", plataformas, scale);
    crearPlataforma(791, 543, "escalera1", plataformas, scale);
    this.add.image(1021, 605, "escalera4");
    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_2
    );
    this.add.image(796, 668, "escalera2Pared");
    crearPlataforma(789, 771, "paredSur", plataformaSur, scale);

    let cubicle2Floor = crearPlataforma(
      1005,
      565,
      "redV",
      plataformaMedioOverlap,
      0.5
    );
    let floorHallway2Pl = crearPlataforma(
      835,
      563,
      "redV",
      plataformaMedioOverlap,
      0.5
    );
    let auditorium2Pl = crearPlataforma(
      1155,
      690,
      "redH",
      plataformaMedioOverlap,
      0.5
    );

    createButtonCircle(this, SCENE.cubicle2, cubicle2Floor, 988, 816);
    createButtonCircle(this, "floorHallway2", floorHallway2Pl, 1105, 375);
    createButtonCircle(this, "auditorium2", auditorium2Pl, 1105, 375);

    // dimesionesPlataformaIndividual(pared209Plataforma, 0.6, 120);
    dimesionesPlataforma(plataformaNorte, 0.6, 120);
    dimesionesPlataforma(plataformaSur, 0.6, 10);
    dimesionesPlataformaIndividual(cuadro, 0.6, 5);
    dimesionesPlataformaIndividual(paredHor1, 0.5, 5);
    dimesionesPlataformaIndividual(cubicle2Floor, 0.1, 25);
    dimesionesPlataformaIndividual(floorHallway2Pl, 0.1, 25);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      plataformaMedioOverlap,
      () => {
        overlapPlataforma(this, cuadroOverlap);
        overlapPlataforma(this, paredHor1Overlap);
      },
      null,
      this
    );

    if (
      getIndexMission().index === "mission5" &&
      !window.missionActive
    ) {
      startMission(this);
    }

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformaNorte);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformaMedio);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformaSur);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);
    this.cameras.main.zoom = 2;

    shortMap(this, "mapaOutside");
    bigMap(this);
    navbar(this, SCENE.floor3);
  }

  update() {
    this.avatar.update(this);
  }
}
