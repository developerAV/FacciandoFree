import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";

import { shortMap, bigMap } from "./components/common/map.js";
import { SIZE_AVATAR } from "../utils/constants.js";

export class ComputerRoom extends Phaser.Scene {
  constructor() {
    super({ key: "computer_room" });
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
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    const fondoaula = this.add.image(800, 500, "background2").setScale(1.8);
    let scale = 1.8;
    let scaleComputer = 1.5;

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    // this.plataforma = new Platform();

    crearPlataforma(800, 110, "paredAula", paredPlataforma, scale);
    crearPlataforma(800, 130, "pizarraAula", plataformas, scale);
    this.avatar = new Avatar(this, 800, 1000, SIZE_AVATAR.v1_5);

    // crearPlataforma(800, 880, "mesaAula", plataformas);
    crearPlataforma(455, 613, "paredIzq", plataformas, scale);
    crearPlataforma(1145, 613, "paredDer", plataformas, scale);

    // lado derecho del salon de computadoras (mesas y sillas)
    // --- Mesas con computadoras
    crearPlataforma(1000, 960, "computer", plataformas, scaleComputer);
    crearPlataforma(1000, 810, "computer", plataformas, scaleComputer);
    crearPlataforma(1000, 660, "computer", plataformas, scaleComputer);
    crearPlataforma(1000, 510, "computer", plataformas, scaleComputer);
    crearPlataforma(1000, 360, "computer", plataformas, scaleComputer);

    // --- sillas lado derecho
    crearPlataforma(1070, 960 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(1070, 810 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(1070, 660 + 35, "chair2", plataformasillas, scaleComputer);
    crearPlataforma(1070, 510 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(1070, 360 + 35, "chair2", plataformasillas, scaleComputer);
    // --- sillas lado izquierdo
    crearPlataforma(955, 960 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(955, 810 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(955, 660 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(955, 510 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(955, 360 + 35, "chair1", plataformasillas, scaleComputer);

    // lado izquierdo del salon de computadoras (mesas y sillas)
    // --- Mesas con computadoras
    // crearPlataforma(600, 890, "computer", plataformas, scaleComputer);
    crearPlataforma(600, 810, "computer", plataformas, scaleComputer);
    crearPlataforma(600, 660, "computer", plataformas, scaleComputer);
    crearPlataforma(600, 510, "computer", plataformas, scaleComputer);
    crearPlataforma(600, 360, "computer", plataformas, scaleComputer);
    // --- sillas lado derecho
    // crearPlataforma(670, 890+35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(670, 810 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(670, 660 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(670, 510 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(670, 360 + 35, "chair1", plataformasillas, scaleComputer);
    // --- sillas lado izquierdo
    // crearPlataforma(555, 890+35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(555, 810 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(555, 660 + 35, "chair2", plataformasillas, scaleComputer);
    crearPlataforma(555, 510 + 35, "chair1", plataformasillas, scaleComputer);
    crearPlataforma(555, 360 + 35, "chair1", plataformasillas, scaleComputer);

    // Escritorio
    crearPlataforma(1000, 250, "escritorioAula", plataformas, scale);
    crearPlataforma(800, 986, "paredInf", plataformas, scale);

    paredPlataforma.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.6,
        true
      );
      plataforma.body.setOffset(0, 25);
    });

    plataformas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.5,
        true
      );
      plataforma.setOffset(0, 50); // la parte inferior
    });

    plataformasillas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.1,
        true
      );
      plataforma.setOffset(0, 35); // la parte inferior
    });

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);
    shortMap(this, "mapaOutside");
    bigMap(this);
    navbar(this, "computer_room");
  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update(this);
  }
}
