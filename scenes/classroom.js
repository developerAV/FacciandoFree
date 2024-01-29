import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";

export class Aula extends Phaser.Scene {
  constructor() {
    super({ key: "aula" });
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

    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    let scale = 1.8;
    //this.plataforma = new Platform();

    crearPlataforma(800, 110, "paredAula", paredPlataforma, scale);
    crearPlataforma(800, 130, "pizarraAula", plataformas, scale);
    this.avatar = new Avatar(this, 800, SIZE_AVATAR.v1_2);

    crearPlataforma(800, 880, "mesaAula", plataformas, scale);
    crearPlataforma(455, 613, "paredIzq", plataformas, scale);
    crearPlataforma(1145, 613, "paredDer", plataformas, scale);
    crearPlataforma(800, 986, "paredInf", plataformas, scale);
    crearPlataforma(800, 735, "mesaAula", plataformas, scale);
    crearPlataforma(800, 590, "mesaAula", plataformas, scale);
    crearPlataforma(800, 445, "mesaAula", plataformas, scale);
    crearPlataforma(1000, 300, "escritorioAula", plataformas, scale);

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
