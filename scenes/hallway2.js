import { Avatar } from "./player.js";
import { Platform } from "./module/platform.js";

export class Hallway2 extends Phaser.Scene {
  constructor() {
    super({ key: "hallway2" });
  }

  preload() {
    this.load.image("background3", "assets/images/hallway2/pasillo_piso.png");
    this.load.image("paredAuditorio", "assets/images/hallway2/pared_auditorio.png");
    this.load.image("paredbatMujer", "assets/images/hallway2/pared_batMujer.png");
    this.load.image("paredEste", "assets/images/hallway2/pared_este.png");
    this.load.image("paredSuperior", "assets/images/hallway2/pared_frontal.png");
    this.load.image("paredInferior", "assets/images/hallway2/pared_inferior.png");
    this.load.image("paredInferiorEste", "assets/images/hallway2/pared_comunidad.png");
  
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);
    
    // Configurar fondo transparente
    this.cameras.main.transparent = true;
    
    const fondoaula = this.add.image(800, 500, "background3");
    let scale = 1;
    let scaleComputer = 1.5;
    
    this.avatar = new Avatar(this, 600, 800);

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    this.plataforma = new Platform();


    this.plataforma.crearPlataforma(304, 501, "paredAuditorio", plataformas, scale);
    this.plataforma.crearPlataforma(499, 715, "paredbatMujer", plataformas, scale);
    this.plataforma.crearPlataforma(1335, 348 , "paredEste", plataformas, scale);
    this.plataforma.crearPlataforma(835, 305 , "paredSuperior", plataformas, scale);
    this.plataforma.crearPlataforma(1072, 715 , "paredInferior", plataformas, scale);
    this.plataforma.crearPlataforma(1276, 564 , "paredInferiorEste", plataformas, scale);

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

    // Configurar seguimiento de cámara al personaje
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    // Configurar zoom de la cámara en función de la posición del personaje
    this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades
  

  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
