import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { SCENE } from "../utils/constants.js";

export class mainHallway1 extends Phaser.Scene {
  constructor() {
    super({ key: "mainHallway1" });
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
    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 2);
    crearPlataforma(795, 900, "paredBaja1", platform1, 1.61);
    crearPlataforma(1064, 907, "paredBaja2", platform1, 1.61);

    dimesionesPlataforma(platform2, 0.82, -22);
    dimesionesPlataforma(platform1, 0.82, 22);

    dimesionesPlataforma(ptfmOverlap);

    dimesionesPlataformaIndividual(escaleraAbajo, 0.2, 22);
    dimesionesPlataformaIndividual(escaleraArriba, 0.2, -22);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);
    this.cameras.main.zoom = 1.5;

    createButtonCircle(this, SCENE.cubicle, escaleraAbajo, 723, 876);
    createButtonCircle(this, SCENE.cubicle2, escaleraArriba, 1103, 436);

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

    const botonComission = crearPlataforma(1170, 790, "boton", boton);
    const botonAdministrative = crearPlataforma(690, 790, "boton", boton);
    const botonOutside = crearPlataforma(930, 1010, "boton", boton);

    createButtonCircle(this, SCENE.commission_area, botonComission, 1183, 560);
    createButtonCircle(this, SCENE.admin_room, botonAdministrative, 1000, 486);
    createButtonCircle(this, SCENE.computer_room, botonOutside, 1465, 553);
    //createButtonCircle(this, SCENE.outside, botonOutside, 1465, 553);

    this.physics.add.collider(this.avatar.avatarPlayer, platform1);
    this.physics.add.collider(this.avatar.avatarPlayer, platform2);
    this.physics.add.collider(this.avatar.avatarPlayer, boton);

    navbar(this, "mainHallway1", 0.65);




    
    
  }

  update() {
    this.avatar.update();
  }
}
