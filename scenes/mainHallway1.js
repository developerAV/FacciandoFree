import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";

export class mainHallway1 extends Phaser.Scene {
  constructor() {
    super({ key: "mainHallway1" });
  }

  preload() {
    this.load.image("floor", "assets/images/mainHallway1/floor.png");
    this.load.image(
      "paredBaja1",
      "assets/images/mainHallway1/paredBajaDerecha.png"
    );
    this.load.image(
      "paredBaja2",
      "assets/images/mainHallway1/paredBajaIzquierda.png"
    );

    this.load.image(
      "paredMedia1",
      "assets/images/mainHallway1/paredMediaIzquierda.png"
    );
    this.load.image(
      "paredMedia2",
      "assets/images/mainHallway1/paredMediaDerecha.png"
    );
    this.load.image(
      "paredMedia3",
      "assets/images/mainHallway1/paredMediaEscalera.png"
    );

    this.load.image(
      "paredSuperior1",
      "assets/images/mainHallway1/paredSuperiorIzquierda.png"
    );
    this.load.image(
      "paredSuperior2",
      "assets/images/mainHallway1/paredSuperiorDerecha.png"
    );

    this.load.image(
      "sillaBasura",
      "assets/images/mainHallway1/sillaBasura.png"
    );
    this.load.image(
      "escaleraAbajo",
      "assets/images/mainHallway1/escaleraAbajo.png"
    );
    this.load.image(
      "escaleraArriba",
      "assets/images/mainHallway1/escaleraArriba.png"
    );

    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // instaciar la clase "Plataform" para usar la funcion de crearPlataforma
    //const plataforma = new Platform();
  }

  create() {
    this.add.image(800, 367, "floor").setScale(1.61);
    this.add.image(794, 908, "paredBaja1").setScale(1.61);
    this.add.image(1064, 908, "paredBaja2").setScale(1.61);

    this.add.image(724, 72.5, "paredSuperior1").setScale(1.61);
    this.add.image(1058, 103, "paredSuperior2").setScale(1.61);

    this.add.image(534, 168, "escaleraArriba").setScale(1.61);
    this.add.image(473, 210, "paredMedia3").setScale(1.61);
    this.add.image(483, 275, "escaleraAbajo").setScale(1.61);

    this.add.image(614, 532, "paredMedia1").setScale(1.61);
    this.add.image(1064, 532, "paredMedia2").setScale(1.61);

    this.add.image(860, 135, "sillaBasura").setScale(1.61);

    this.avatar = new Avatar(this, 800, 500, 2);

  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
