import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";

export class Cubicle2 extends Phaser.Scene {
  constructor() {
    super({ key: "cubicle2" });
  }

  preload() {
    
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // Configurar fondo transparente
    this.cameras.main.transparent = true;

    const fondoaula = this.add.image(800, 500, "pisoCubiculo2");
    // const escalera2 = this.add.image(795, 632,  "escalera2");

    let scale = 1;
    let scaleComputer = 1.5;

    let plataformas = this.physics.add.staticGroup();
    let plataformaOverlap = this.physics.add.staticGroup();
    let escritorio = crearPlataforma(1390, 600, "escritorioB6", plataformas, 1);
    // escritorio.flipY = true;
    escritorio.flipX = true;
    crearPlataforma(762, 87, "paredNorteCu2", plataformas, scale);
    crearPlataforma(59, 417, "paredeIzCu2", plataformas, scale);
    crearPlataforma(255, 504, "paredeIzTotalCu2", plataformas, scale);
    crearPlataforma(1467, 419, "paredeIzCu2", plataformas, scale);
    this.add.image(750, 350, "cubiculo2Escritorios");
    this.add.image(1100, 350, "cubiculo2Escritorios2");

    let pared3 = crearPlataforma(
      1100,
      724,
      "cubicle2ParedCentro3",
      plataformas,
      scale
    );
    let escalera1Cu2 = crearPlataforma(
      782,
      874,
      "escalera1Cu2",
      plataformaOverlap,
      scale
    );
    let escalera2Cu2 = crearPlataforma(
      891,
      819,
      "escalera2Cu2",
      plataformaOverlap,
      scale
    );
    let paredSurEste = crearPlataforma(
      1260,
      900,
      "cubicle2ParedSurEste",
      plataformas,
      scale
    );
  
    let cubicle2ParedMedioVertical = crearPlataforma(
      1037,
      221,
      "cubicle2ParedMedioVertical",
      plataformas,
      scale
    );
    let cubicle2ParedEntrada = crearPlataforma(
      1147,
      562,
      "cubicle2ParedEntrada",
      plataformas,
      scale
    );
    let cubicle2ParedSurMedio = crearPlataforma(
      612,
      970,
      "cubicle2ParedSurMedio",
      plataformas,
      scale
    );
    let cubicle2ParedSurEste2 = crearPlataforma(
      1164,
      948,
      "cubicle2ParedSurEste2",
      plataformas,
      scale
    );

    let pared1 = crearPlataforma(
      591,
      524,
      "cubicle2ParedCentro1",
      plataformas,
      scale
    );
    let pared2 = crearPlataforma(
      975,
      524,
      "cubicle2ParedCentro2",
      plataformas,
      scale
    );
    dimesionesPlataformaIndividual(pared2, 0.2, 70);
    dimesionesPlataformaIndividual(pared1, 0.2, 70);
    dimesionesPlataformaIndividual(cubicle2ParedEntrada, 0.2, 20);
    let blur = crearPlataforma(758, 550, "redH", plataformaOverlap, 0.5);
    let notBlur = crearPlataforma(758, 610, "redH", plataformaOverlap, 0.5);

    let piso1 = crearPlataforma(721, 845, "redV", plataformas, 0.5);
    let piso1V = crearPlataforma(760, 840, "redV", plataformas, 0.5);
    let piso1V2 = crearPlataforma(800, 840, "redV", plataformas, 0.5);

    let piso3 = crearPlataforma(940, 825, "redV", plataformas, 0.5);
    let piso2 = crearPlataforma(480, 930, "redV", plataformas, 0.5);


    let piso1b = crearPlataforma(470, 800, "redV", plataformas, 1);
    let cubi = crearPlataforma(660, 320, "redV", plataformas, 2);
    dimesionesPlataformaIndividual(cubi, 1, 50);
    let cubi2 = crearPlataforma(870, 320, "redV", plataformas, 2);
    dimesionesPlataformaIndividual(cubi2, 1, 50);
    let cubi3 = crearPlataforma(1150, 320, "redV", plataformas, 2);
    dimesionesPlataformaIndividual(cubi3, 1, 50);
    
  
    
    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_2
    );
    let pared2Overlap = crearPlataforma(
      975,
      524,
      "cubicle2ParedCentro2",
      plataformaOverlap,
      scale
    );
    let pared1Overlap = crearPlataforma(
      591,
      524,
      "cubicle2ParedCentro1",
      plataformaOverlap,
      scale
    );

    dimesionesPlataformaIndividual(piso1, 0.9, 1);
    dimesionesPlataformaIndividual(piso1V, 0.9, 1);
    dimesionesPlataformaIndividual(piso1V2, 0.9, 1);

    dimesionesPlataformaIndividual(piso2, 0.1, 1);
    dimesionesPlataformaIndividual(piso3, 0.1, 1);
    // dimesionesPlataformaIndividual(piso1b, 0.1, 1);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      plataformaOverlap,
      () => {
        overlapPlataforma(this, pared2Overlap);
        overlapPlataforma(this, pared1Overlap);
      },
      null,
      this
    );

    createButtonCircle(this, SCENE.floor1, piso1, 585, 150);
    createButtonCircle(this, SCENE.floor2, piso2, 1097, 423);

    createButtonCircle(this, SCENE.floor3, piso3, 983, 549);
    createButtonCircle(this, SCENE.second_floor1, piso1b, 1181, 504);

    //   this.physics.add.overlap(this.avatar.avatarPlayer, blur, () => {

    //     //poner blur una platform
    //     pared1.alpha = 0.5;
    //     pared2.alpha = 0.5;

    //   }, null, this);
    //   this.physics.add.overlap(this.avatar.avatarPlayer, notBlur, () => {

    //     overlapPlataforma(this, pared2Overlap);
    //   pared1.alpha = 1;
    //   pared2.alpha = 1;

    // }, null, this);

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);
    this.cameras.main.zoom = 2;

    shortMap(this, "mapaOutside");
    bigMap(this);


    navbar(this, "Piso 2");
  }

  update() {
    this.avatar.update(this);
  }
}
