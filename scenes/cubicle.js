import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
} from "./module/platform.js";
import { traslate } from "../data/dialogues.js";
import { crearVideo } from "./module/videoInfo.js";
import { crearCard } from "./module/card.js";
import { getEmployees } from "../services/employee.js";
import { createButtonCircle } from "../scenes/components/common/buttonCircle.js";
import { navbar } from "./components/common/navbar.js";
import { SCENE } from "../utils/constants.js";
import { alertCard } from "./modeHistory/components/alertCard.js";
import { shortMap, bigMap } from "./components/common/map.js";
// let window.lan = "en";
let activeVideo = false;

export class Cubicle extends Phaser.Scene {
  constructor() {
    super({ key: "cubicle" });

    this.preloadCubicle();
  }
  preloadCubicle() {
    getEmployees().then((data) => {
      this.dataEmployees = data;
    });
  }
  preload() {
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    this.load.image("pisoCubiculo", "assets/images/cubicle/piso.png");
    this.load.image("paredColor", "assets/images/cubicle/cubiculocolor.jpg");
    this.load.image("paredIzqC", "assets/images/cubicle/paredIzq.png");
    this.load.image("paredSurEste", "assets/images/cubicle/paredSurEste.png");
    this.load.image(
      "paredPuertaIzq",
      "assets/images/cubicle/paredPuertaIzq.png"
    );
    this.load.image(
      "paredPuertaSur",
      "assets/images/cubicle/paredPuertaNorSur.png"
    );
    this.load.image(
      "paredPuertaNor",
      "assets/images/cubicle/paredPuertaNor.png"
    );
    this.load.image(
      "paredPuertaDer",
      "assets/images/cubicle/paredPuertaDer.png"
    );
    this.load.image("paredNorte", "assets/images/cubicle/paredNorte.png");
    this.load.image("paredEscalera", "assets/images/cubicle/paredEscalera.png");
    this.load.image("paredSurDer", "assets/images/cubicle/paredSurDer.png");
    this.load.image("paredDer", "assets/images/cubicle/paredDer.png");

    this.load.image("escritoriosA", "assets/images/cubicle/escritoriosA.png");
    this.load.image("escritoriosB", "assets/images/cubicle/escritoriosB.png");
    this.load.image("escritorioB6", "assets/images/cubicle/escritorioB6.png");
    this.load.image("escritoriosC", "assets/images/cubicle/escritoriosC.png");
    this.load.image("escritoriosD", "assets/images/cubicle/escritoriosD.png");
    this.load.image("sillaB6", "assets/images/accessories/chair/0005.png");

    this.load.image("escalera", "assets/images/cubicle/escalera.png");
    this.load.image("impresora", "assets/images/cubicle/impresora.png");
    this.load.image("servidor", "assets/images/cubicle/servidor.png");
    this.load.image("anaquel", "assets/images/cubicle/anaquel.png");

    this.load.image("fotoCarnet", "assets/images/avatars/avatar1.png");
  }

  async create() {
    window.avatarUpdateActivo = true;
    // this.cameras.main.fadeIn(500);
    this.cameras.main.transparent = true;
    // Crear una capa UI que estará por encima de la escena
    let uiLayer = this.add.layer();
    this.add.image(846, 533, "pisoCubiculo");

    let plataformas = this.physics.add.staticGroup();
    let paredPlataformaSuperior = this.physics.add.staticGroup();

    crearPlataforma(10, 417, "paredIzqC", plataformas);
    crearPlataforma(634, 796, "paredPuertaIzq", plataformas);

    let paredNorte = crearPlataforma(
      800,
      137,
      "paredNorte",
      paredPlataformaSuperior
    );

    let escritoriosB = crearPlataforma(
      561,
      250,
      "escritoriosB",
      paredPlataformaSuperior
    );
    let escritoriosB6 = crearPlataforma(
      1190,
      250,
      "escritorioB6",
      paredPlataformaSuperior
    );
    let impresora = crearPlataforma(
      1050,
      240,
      "impresora",
      paredPlataformaSuperior
    );
    let servidorx = crearPlataforma(
      63,
      192,
      "servidor",
      paredPlataformaSuperior
    );

    crearPlataforma(1502, 492, "escritoriosC", plataformas);

    crearPlataforma(1200, 226, "sillaB6", plataformas);

    let sillasB = this.physics.add.staticGroup();

    let silla = crearPlataforma(330, 330, "sillaB6", sillasB);

    let silla2 = crearPlataforma(530, 330, "sillaB6", sillasB);

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.5);
    let escritorioD = crearPlataforma(1005, 611, "escritoriosD", plataformas);
    crearPlataforma(690, 947, "paredPuertaSur", plataformas);
    crearPlataforma(761, 796, "paredPuertaDer", plataformas);
    crearPlataforma(871, 829, "paredEscalera", plataformas);

    crearPlataforma(1589, 423, "paredDer", plataformas);
    let escaleraX = crearPlataforma(877, 860, "escalera", plataformas);
    crearPlataforma(156, 146, "anaquel", plataformas);
    crearPlataforma(480, 146, "anaquel", plataformas);
    crearPlataforma(680, 146, "anaquel", plataformas);
    crearPlataforma(830, 146, "anaquel", plataformas);
    crearPlataforma(930, 146, "anaquel", plataformas);
    crearPlataforma(1230, 146, "anaquel", plataformas);

    const paredparedPuertaNor = this.add.image(698, 641, "paredPuertaNor");
    let escritorioA = crearPlataforma(302, 680, "escritoriosA", plataformas);

    let paredSurDerecha = crearPlataforma(
      1298,
      735,
      "paredSurDer",
      plataformas
    );
    let paredSurIzq = crearPlataforma(322, 720, "paredSurEste", plataformas);

    if (activeVideo) {
      crearVideo(traslate("infoCubicle"), "avatarVideo1", this);
    }
    this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    let teclado = this.input.keyboard;

    // Configurar una acción para la tecla "i"
    teclado.addKey(Phaser.Input.Keyboard.KeyCodes.I).on(
      "down",
      async function (event) {
        try {
          // Puedes ejecutar cualquier código que quieras cuando se presione la tecla "i"
          await crearVideo(traslate("infoCubicle"), "avatarVideo1", this);
          await crearVideo(traslate("infoCubicle"), "avatarVideo2", this);
          // await aumentarZoom();
          // Aquí continúa con el código después de que ambos videos hayan terminado
        } catch (error) {
          console.error("Error:", error);
        }
      }.bind(this)
    );
    // showVideo = () => {
    //     //resetear camara
    //     this.cameras.main.stopFollow();
    //     this.cameras.main.setZoom(1);

    //     // this.cameras.main.zoom = 1;
    //     this.cameras.main.centerOn(0, 0);
    //     this.cameras.main.setScroll(0, 0);
    //   crearVideo(traslate("infoCubicle"), "avatarVideo", this, true);
    // };
    dimesionesPlataformaIndividual(escritorioA, 0, 20);
    dimesionesPlataformaIndividual(escritorioD, 0, 25);
    dimesionesPlataformaIndividual(paredSurDerecha, 1, 145);
    dimesionesPlataformaIndividual(paredSurIzq, 1, 145);
    dimesionesPlataforma(sillasB, 0.2, 0);
    dimesionesPlataforma(paredPlataformaSuperior, 0.6, 45);
    // dimesionesPlataformaIndividual(servidorx, 0.6, 45);
    dimesionesPlataformaIndividual(impresora, 0.6, 60);
    dimesionesPlataformaIndividual(escritoriosB, 0.6, 60);
    dimesionesPlataformaIndividual(escritoriosB6, 0.6, 60);
    crearCard(this, this.dataEmployees[0], "fotoCarnet", silla, 330, 160);

    crearCard(this, this.dataEmployees[1], "fotoCarnet", silla2, 530, 160);

    this.physics.add.collider(
      this.avatar.avatarPlayer,
      paredPlataformaSuperior
    );
    window.avatarX = this.avatar.avatarPlayer.x;
    window.avatarY = this.avatar.avatarPlayer.y;

    createButtonCircle(this, SCENE.floor1, escaleraX, 592, 251);

    createButtonCircle(this, "aula", escritorioD, 800, 500);

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredNorte);

    navbar(this, "cubicle");
    shortMap(this, "mapaOutside");
    bigMap(this);

    if (window.missionActive) {
      alertCard(this);
    }
  }

  update() {
    this.avatar.update(this);
  }
}
