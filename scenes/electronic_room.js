import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";

export class Laboratorio1 extends Phaser.Scene {
  constructor() {
    super({ key: "electronic_room" });
  }

  preload() {
    this.load.image("pisoLab1", "assets/images/electronic_room/pisoLab1.png");
    this.load.image(
      "escritorio",
      "assets/images/electronic_room/escritorio.png"
    );
    this.load.image(
      "mesasLab",
      "assets/images/electronic_room/mesasLaboratio1.png"
    );
    this.load.image(
      "paredILaborario",
      "assets/images/electronic_room/paredIzq.png"
    );
    this.load.image(
      "paredDLaborario",
      "assets/images/electronic_room/paredDer.png"
    );
    this.load.image(
      "paredSLaborario",
      "assets/images/electronic_room/paredSuperior.png"
    );
    this.load.image(
      "paredPILaborario",
      "assets/images/electronic_room/puertaDer.png"
    );
    this.load.image(
      "paredPDLaborario",
      "assets/images/electronic_room/puertaIzq.png"
    );
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // instaciar la clase "Plataform" para usar la funcion de crearPlataforma
    //const plataforma = new Platform();

    this.add.image(800, 500, "pisoLab1").setScale(2);

    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();

    //Pared superior
    crearPlataforma(800, 130, "paredSLaborario", paredPlataforma, 2);

    //mesas de la derecha
    crearPlataforma(590, 410, "mesasLab", plataformas, 1.5);
    crearPlataforma(890, 410, "mesasLab", plataformas, 1.5);

    this.avatar = new Avatar(this, 800, 500, 2);

    //escritorio
    crearPlataforma(1140, 850, "escritorio", plataformas, 2);

    //mesas de la izquierda
    crearPlataforma(590, 700, "mesasLab", plataformas, 1.5);
    crearPlataforma(890, 700, "mesasLab", plataformas, 1.5);

    //paredes
    //izquierda
    crearPlataforma(344, 665, "paredILaborario", plataformas, 2);

    //derecha
    crearPlataforma(1240, 670, "paredDLaborario", plataformas, 2);

    //paredes de abajo
    crearPlataforma(888, 947, "paredPILaborario", plataformas, 2);
    crearPlataforma(376, 944, "paredPDLaborario", plataformas, 2);

    plataformas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.7,
        true
      );
      plataforma.body.setOffset(0, 30);
    });
    paredPlataforma.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.6,
        true
      );
      plataforma.body.setOffset(0, 25);
    });

    //instancia del avatar

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);
    shortMap(this, "mapaOutside");
    bigMap(this);

  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
