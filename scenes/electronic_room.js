import { Avatar } from "./player.js";
import { Platform } from "./module/platform.js";

export class Laboratorio1 extends Phaser.Scene {
  constructor() {
    super({ key: "lab1" });
  }

  preload() {
    this.load.image("pisoLab1", "assets/images/electronic_room/pisoLab1.png");
    this.load.image("escritorio", "assets/images/electronic_room/escritorio.png");
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
    const plataforma = new Platform();

    this.add.image(800, 500, "pisoLab1").setScale(2);

    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    
    //Pared superior
    plataforma.crearPlataforma(800, 130, "paredSLaborario", paredPlataforma, 2);

    //mesas de la derecha
    plataforma.crearPlataforma(590, 410, "mesasLab", plataformas, 1.5)
    plataforma.crearPlataforma(890, 410, "mesasLab", plataformas, 1.5)

    this.avatar = new Avatar(this, 800, 500);

    //escritorio
    plataforma.crearPlataforma(1140, 850, "escritorio", plataformas, 2);

    //mesas de la izquierda
    plataforma.crearPlataforma(590, 700, "mesasLab", plataformas, 1.5)
    plataforma.crearPlataforma(890, 700, "mesasLab", plataformas, 1.5)

    //paredes
    //izquierda
    plataforma.crearPlataforma(344, 665, "paredILaborario", plataformas, 2);

    //derecha
    plataforma.crearPlataforma(1240, 670, "paredDLaborario", plataformas, 2);

    //paredes de abajo
    plataforma.crearPlataforma(888, 947, "paredPILaborario", plataformas, 2);
    plataforma.crearPlataforma(376, 944, "paredPDLaborario", plataformas, 2);

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
