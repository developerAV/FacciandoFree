import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";

export class mainHallway1 extends Phaser.Scene {
  constructor() {
    super({ key: "mainHallway1" });
  }

  /*   preload() {
    
  } */

  create() {
    window.avatarUpdateActivo = true;

    this.cameras.main.fadeIn(500);
    this.add.image(800, 367, "floor").setScale(1.61);

    let platform1 = this.physics.add.staticGroup();
    let platform2 = this.physics.add.staticGroup();
    let escaleras = this.physics.add.staticGroup();

    crearPlataforma(795, 900, "paredBaja1", platform1, 1.61);
    crearPlataforma(1064, 907, "paredBaja2", platform1, 1.61);
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
    crearPlataforma(860, 135, "sillaBasura", platform2, 1.61);

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 2);

    crearPlataforma(614, 532, "paredMedia1", platform1, 1.61);

    dimesionesPlataforma(platform2, 0.82, -22);
    dimesionesPlataforma(platform1, 0.82, 22);

    dimesionesPlataformaIndividual(escaleraAbajo, 0.2, 22);
    dimesionesPlataformaIndividual(escaleraArriba, 0.2, -22);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);
    this.cameras.main.zoom = 1.5;

    createButtonCircle(this, "cubicle", escaleraAbajo, 500, 500);

    createButtonCircle(this, "floorHallway2", escaleraArriba, 500, 500);

    this.physics.add.collider(this.avatar.avatarPlayer, platform1);
    this.physics.add.collider(this.avatar.avatarPlayer, platform2);
    navbar(this, "mainHallway1", 0.65);
  }

  update() {
    this.avatar.update();
  }
}
