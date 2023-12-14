import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";

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
      "paredSuperior2Hallway2",
      "assets/images/hallway2/pared_frontal.png"
    );
    this.load.image(
      "paredInferiorHallway2",
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

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataformaSuperior = this.physics.add.staticGroup();
    let plataformaOverlap = this.physics.add.staticGroup();

    crearPlataforma(
      835,
      305,
      "paredSuperior2Hallway2",
      paredPlataformaSuperior,
      scale
    );
    this.avatar = new Avatar(this, window.avatarX, window.avatarY, SIZE_AVATAR.v1_2);
    // this.plataforma = new Platform();

    crearPlataforma(304, 501, "paredAuditorio", plataformas, scale);
    crearPlataforma(499, 715, "paredbatMujer", plataformas, scale);
    crearPlataforma(1335, 348, "paredEste", plataformas, scale);
    crearPlataforma(1072, 715, "paredInferiorHallway2", plataformas, scale);
    crearPlataforma(1276, 564, "paredInferiorEste", plataformas, scale);
   let lineRed = crearPlataforma(1217, 490, "redV", plataformaOverlap, 0.5);
    dimesionesPlataforma(paredPlataformaSuperior, 0.6, 75);

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(
      this.avatar.avatarPlayer,
      paredPlataformaSuperior
    );



    this.physics.add.overlap(this.avatar.avatarPlayer, lineRed, () => {

      createButtonCircle(this, "floorHallway2", lineRed, 1105, 390);
      
    }, null, this);
    
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    this.cameras.main.zoom = 2;
    shortMap(this, "mapaOutside");
    bigMap(this);

    navbar(this, "hallway");
  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update(this);
  }
}
