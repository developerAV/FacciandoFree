import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";

export class Auditorium2 extends Phaser.Scene {
  constructor() {
    super({ key: "auditorium2" });
  }

  preload() {

  }

  create() {
    this.cameras.main.fadeIn(500);

    // Configurar fondo transparente
    this.cameras.main.transparent = true;

    this.add.image(800, 500, "Auditorio2");
    window.avatarUpdateActivo = true;

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    // this.plataforma = new Platform();

    crearPlataforma(800, 310, "paredSuperiorA2", plataformas);
    crearPlataforma(796, 739, "paredInferior", plataformas);
    crearPlataforma(428, 683, "paredIzq2", plataformas);
    crearPlataforma(1053, 500, "paredDer", plataformas, 0.997);
    crearPlataforma(768, 700, "fila1", plataformasillas);
    crearPlataforma(752, 652, "fila2", plataformasillas);
    crearPlataforma(769, 604, "fila3", plataformasillas);
    crearPlataforma(785, 556, "fila4", plataformasillas);
    crearPlataforma(816, 508, "fila5", plataformasillas);
    crearPlataforma(570, 380, "mesa", plataformasillas);
    crearPlataforma(900, 400, "mesa", plataformasillas);

    crearPlataforma(448, 491, "silla2", plataformasillas);
    crearPlataforma(464, 507, "silla2", plataformasillas);
    crearPlataforma(480, 523, "silla2", plataformasillas);
    crearPlataforma(496, 539, "silla2", plataformasillas);

    crearPlataforma(448, 427, "silla2", plataformasillas);
    crearPlataforma(464, 443, "silla2", plataformasillas);
    crearPlataforma(480, 459, "silla2", plataformasillas);
    crearPlataforma(496, 475, "silla2", plataformasillas);
    crearPlataforma(512, 491, "silla2", plataformasillas);
    crearPlataforma(528, 507, "silla2", plataformasillas);
    crearPlataforma(544, 523, "silla2", plataformasillas);

    crearPlataforma(480, 411, "silla2", plataformasillas);
    crearPlataforma(496, 427, "silla2", plataformasillas);
    crearPlataforma(512, 443, "silla2", plataformasillas);
    crearPlataforma(544, 475, "silla2", plataformasillas);
    crearPlataforma(560, 491, "silla2", plataformasillas);

    crearPlataforma(440, 401.5, "paredIzq1", plataformas);

    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_2
    );

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

    // Configurar seguimiento de cámara al personaje
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    this.cameras.main.zoom = 2;
    shortMap(this, "mapaOutside");
    bigMap(this);
    navbar(this, SCENE.auditorium2);
  }

  update() {
    this.avatar.update(this);
  }
}
