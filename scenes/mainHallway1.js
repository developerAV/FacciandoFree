import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { COLORS, COLORS_HEX, SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { alertCard } from "./modeHistory/components/alertCard.js";
import { traslate } from "../data/dialogues.js";

export class mainHallway1 extends Phaser.Scene {
  constructor() {
    super({ key: "mainHallway1" });
  }
  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }

  create() {
    window.avatarUpdateActivo = true;

    this.cameras.main.fadeIn(500);
    this.add.image(800, 367, "floor").setScale(1.61);

    let platform1 = this.physics.add.staticGroup();
    let platform2 = this.physics.add.staticGroup();
    let escaleras = this.physics.add.staticGroup();
    let ptfmOverlap = this.physics.add.staticGroup();
    let boton = this.physics.add.staticGroup();

    crearPlataforma(724, 72.5, "paredSuperior1", platform2, 1.61);
    crearPlataforma(1058, 103, "paredSuperior2", platform2, 1.61);
    const escaleraArriba = crearPlataforma(
      534,
      168,
      "escaleraArriba1",
      escaleras,
      1.61
    );
    crearPlataforma(473, 210, "paredMediaEscalera", platform1, 1.61);
    const escaleraAbajo = crearPlataforma(
      483,
      275,
      "escaleraAbajo1",
      escaleras,
      1.61
    );
    crearPlataforma(1064, 532, "paredMedia2", platform1, 1.61);
    const paredMediaOverlap = crearPlataforma(
      1064,
      532,
      "paredMedia2",
      ptfmOverlap,
      1.61
    );
    crearPlataforma(860, 135, "sillaBasura", platform2, 1.61);
    crearPlataforma(614, 532, "paredMedia1", platform1, 1.61);
    const paredMedia2Overlap = crearPlataforma(
      614,
      532,
      "paredMedia1",
      ptfmOverlap,
      1.61
    );
    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_4
    );
    crearPlataforma(795, 900, "paredBaja1", platform1, 1.61);
    crearPlataforma(1064, 907, "paredBaja2", platform1, 1.61);

    dimesionesPlataforma(platform2, 0.82, -22);
    dimesionesPlataforma(platform1, 0.82, 22);

    dimesionesPlataforma(ptfmOverlap);

    dimesionesPlataformaIndividual(escaleraAbajo, 0.2, 22);
    dimesionesPlataformaIndividual(escaleraArriba, 0.2, -22);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);
    this.cameras.main.zoom = 1.5;

    createButtonCircle(this, SCENE.cubicle, escaleraAbajo, 670, 806);
    createButtonCircle(this, SCENE.cubicle2, escaleraArriba, 701, 806);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      ptfmOverlap,
      () => {
        overlapPlataforma(this, paredMediaOverlap);
        overlapPlataforma(this, paredMedia2Overlap);
      },
      null,
      this
    );

    if (window.missionActive) {
      alertCard(this);
    }

    const botonAdministrative = crearPlataforma(775, 790, "redV", boton);
    const botonComission = crearPlataforma(1080, 790, "redV", boton);
    const botonOutside = crearPlataforma(930, 990, "redH", boton);

    //añadir un texto fijo
    this.add.text(1100, 725, traslate(SCENE.commission_area), {
      fontFamily: "Arial",
      fontSize: 50,
      color: COLORS_HEX.white,
      textAlign: "center",

      wordWrap: { width: 100 },
    });
    this.add.text(450, 750, traslate(SCENE.admin_room), {
      textAlign: "center",
      fontFamily: "Arial",
      fontSize: 50,
      color: COLORS_HEX.white,

      wordWrap: { width: 100 },
    });

    createButtonCircle(this, SCENE.commission_area, botonComission, 1183, 560);
    createButtonCircle(this, SCENE.admin_room, botonAdministrative, 1000, 486);
    createButtonCircle(this, SCENE.outside, botonOutside, 1465, 553);

    this.physics.add.collider(this.avatar.avatarPlayer, platform1);
    this.physics.add.collider(this.avatar.avatarPlayer, platform2);

    shortMap(this, "floor1Map");
    bigMap(this);
    this.physics.add.collider(this.avatar.avatarPlayer, boton);

    navbar(this, "mainHallway1", 0.65);
  }

  update() {
    this.avatar.update(this);
  }
}
