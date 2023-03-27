import { Avatar } from "./player.js";
import { Platform } from "./module/platform.js";

export class Aula extends Phaser.Scene {
  constructor() {
    super({ key: "aula" });
  }

  preload() {
    this.load.image("background2", "assets/images/img_aula/piso.png");
    this.load.image("paredAula", "assets/images/img_aula/paredNorte.png");
    this.load.image("paredIzq", "assets/images/img_aula/paredIzq.png");
    this.load.image("paredDer", "assets/images/img_aula/paredDer.png");
    this.load.image("paredInf", "assets/images/img_aula/paredInf.png");
    this.load.image("mesaAula", "assets/images/img_aula/mesas.png");
    this.load.image("escritorioAula", "assets/images/img_aula/escritorio.png");
    this.load.image("pizarraAula", "assets/images/img_aula/pizarra.png");
    this.load.spritesheet("dude", "assets/images/dude.png", {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    const fondoaula = this.add.image(800, 500, "background2").setScale(1.8);

    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    let scale = 1.8;
    this.plataforma = new Platform();

    this.plataforma.crearPlataforma(800, 110, "paredAula", paredPlataforma,scale);
    this.plataforma.crearPlataforma(800, 130, "pizarraAula", plataformas,scale);
    this.avatar = new Avatar(this, 800, 1000);


    this.plataforma.crearPlataforma(800, 880, "mesaAula", plataformas,scale);
    this.plataforma.crearPlataforma(455, 613, "paredIzq", plataformas,scale);
    this.plataforma.crearPlataforma(1145, 613, "paredDer", plataformas,scale);
    this.plataforma.crearPlataforma(800, 986, "paredInf", plataformas,scale);
    this.plataforma.crearPlataforma(800, 735, "mesaAula", plataformas,scale);
    this.plataforma.crearPlataforma(800, 590, "mesaAula", plataformas,scale);
    this.plataforma.crearPlataforma(800, 445, "mesaAula", plataformas,scale);
    this.plataforma.crearPlataforma(1000, 300, "escritorioAula", plataformas,scale);

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
  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
