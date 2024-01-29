import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma, dimesionesPlataformaIndividual } from "./module/platform.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { reflexImage } from "./modeHistory/startMission.js";
import { arrows } from "./modeHistory/arrows.js";
import { getIndexMission } from "./modeHistory/infoMission.js";


export class Hallway2 extends Phaser.Scene {
  constructor() {
    super({ key: "hallway2" });
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
    let boton = this.physics.add.staticGroup();


    crearPlataforma(
      835,
      305,
      "paredSuperior2Hallway2",
      paredPlataformaSuperior,
      scale
    );
    if (window.missionActive) {
      const { index, step } = getIndexMission();
      arrows[index]?.["hallway2"]?.[step]?.forEach((arrow) => {
        reflexImage(this, arrow.x, arrow.y, arrow.name);
      });
    }

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, SIZE_AVATAR.v1_2);
    // this.plataforma = new Platform();

    crearPlataforma(304, 501, "paredAuditorioHallway2", plataformas, scale);
    crearPlataforma(499, 715, "paredbatMujerHallway2", plataformas, scale);
    crearPlataforma(1335, 348, "paredEste", plataformas, scale);
    crearPlataforma(1072, 715, "paredInferiorHallway2", plataformas, scale);
    crearPlataforma(1276, 564, "paredEsteHallway2", plataformas, scale);
    const lineRed = crearPlataforma(1217, 550, "redV", boton, 0.5)
    const lineRed2 = crearPlataforma(865, 340, "redV", boton, 0.5);

    dimesionesPlataforma(paredPlataformaSuperior, 0.6, 75);



    let outside = crearPlataforma(600, 835, "redH", plataformas, 1);
    // dimesionesPlataformaIndividual(outside, 0.1, 1);

    createButtonCircle(this, "cubicle2", lineRed, 509, 773);

    createButtonCircle(this, "outside", outside, 515, 568);

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(
      this.avatar.avatarPlayer,
      paredPlataformaSuperior
    );

    createButtonCircle(this, SCENE.electronic_room, lineRed2, 476 , 850);
    createButtonCircle(this, SCENE.floor2, lineRed, 1465, 553);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    this.cameras.main.zoom = 2;
    shortMap(this, "mapaOutside");
    bigMap(this);

    this.physics.add.collider(this.avatar.avatarPlayer, boton);
    navbar(this, "hallway2");
  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    window.avatarUpdateActivo && this.avatar.update(this);
  }
}
