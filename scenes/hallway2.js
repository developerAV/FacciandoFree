import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";

export class Hallway2 extends Phaser.Scene {
  constructor() {
    super({ key: "hallway2" });
  }

  preload() {
    this.load.image("background3", "assets/images/hallway2/pasillo_piso.png");
    this.load.image(
      "paredAuditorio",
      "assets/images/hallway2/pared_auditorio.png"
    );
    this.load.image(
      "paredbatMujer",
      "assets/images/hallway2/pared_batMujer.png"
    );
    this.load.image("paredEste", "assets/images/hallway2/pared_este.png");
    this.load.image(
      "paredSuperior2",
      "assets/images/hallway2/pared_frontal.png"
    );
    this.load.image(
      "paredInferior",
      "assets/images/hallway2/pared_inferior.png"
    );
    this.load.image(
      "paredInferiorEste",
      "assets/images/hallway2/pared_comunidad.png"
    );
  }

  create() {
    window.avatarUpdateActivo = true;
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // Configurar fondo transparente
    this.cameras.main.transparent = true;

    const fondoaula = this.add.image(800, 500, "background3");
    let scale = 1;
    let scaleComputer = 1.5;

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.5);

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    // this.plataforma = new Platform();

    crearPlataforma(304, 501, "paredAuditorio", plataformas, scale);
    crearPlataforma(499, 715, "paredbatMujer", plataformas, scale);
    crearPlataforma(1335, 348, "paredEste", plataformas, scale);
    crearPlataforma(835, 305, "paredSuperior2", plataformas, scale);
    crearPlataforma(1072, 715, "paredInferior", plataformas, scale);
    crearPlataforma(1276, 564, "paredInferiorEste", plataformas, scale);

    plataformas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.6,
        true
      );
      plataforma.body.setOffset(0, 25);
    });

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

 
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    this.cameras.main.zoom = 2; 
  
    navbar(this, "hallway ");
  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update(this);
  }
}
