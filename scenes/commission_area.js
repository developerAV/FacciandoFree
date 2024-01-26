import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
  changeNameOverlap,
} from "./module/platform.js";
import { traslate } from "../data/dialogues.js";
import { crearVideo } from "./module/videoInfo.js";
import { crearCard } from "./module/card.js";
import { getEmployees } from "../services/employee.service.js";
import { createButtonCircle } from "../scenes/components/common/buttonCircle.js";
import { navbar } from "./components/common/navbar.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { startMission } from "./modeHistory/startMission.js";
import { getIndexMission } from "./modeHistory/infoMission.js";
import { SIZE_AVATAR } from "../utils/constants.js";
import { mission5Final } from "./modeHistory/missions/mission5.js";
import { mission3 } from "./modeHistory/missions/mission3.js";
// let window.lan = "en";
let activeVideo = false;

export class CommissionArea extends Phaser.Scene {
  constructor() {
    super({ key: "commission_area" });

    this.preloadCubicle();
  }
  preloadCubicle() {
    getEmployees().then((data) => {
      this.dataEmployees = data;
    });
  }
  preload() {
    this.load.plugin(
      "rexglowfilterpipelineplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilterpipelineplugin.min.js",
      true
    );

  }

  async create() {
    window.avatarUpdateActivo = true;
    // this.cameras.main.fadeIn(500);
    this.cameras.main.transparent = true;
    // Crear una capa UI que estará por encima de la escena
    let uiLayer = this.add.layer();
    this.add.image(800, 528, "pisoComision");
    // this.add.image(800, 500, "pf");

    let plataformas = this.physics.add.staticGroup();
    let plataformasMedio = this.physics.add.staticGroup();
    let plataformasNorte = this.physics.add.staticGroup();
    let plataformasOverlap = this.physics.add.staticGroup();
    let puertaOverlap1 = this.physics.add.staticGroup();
    let puertaOverlap2 = this.physics.add.staticGroup();

    crearPlataforma(478, 72, "psec", plataformasNorte);
    crearPlataforma(1009, 40, "psoc", plataformasNorte);
    crearPlataforma(311, 454, "paredIzComision", plataformas);
    crearPlataforma(625, 790, "paredVerticalMedioComision", plataformas);
    crearPlataforma(1306, 208, "paredIzquierdaComision", plataformas);
    crearPlataforma(1128, 194, "paredCentroComisionTesis", plataformas);
    let escaleraComision = crearPlataforma(
      1254,
      532,
      "escaleraComision",
      plataformas
    );

    crearPlataforma(687, 72, "puertaSurComision", plataformas);
    crearPlataforma(632, 165, "paredIzqPuertaComision", plataformas);

    crearPlataforma(616, 295, "paredPuertaMedioComision", plataformas);

    crearPlataforma(728, 270, "paredVerticalComision", plataformas);

    crearPlataforma(472, 518, "paredCentroHorizontal", plataformas);
    crearPlataforma(615, 454, "paredCentroIzVertical", plataformas);
    crearPlataforma(680, 902, "paredSecretariaComision", plataformas);
    crearPlataforma(874, 966, "paredHorizontalSurComision", plataformas);
    crearPlataforma(1018, 852, "paredSurCentroVerticalComision", plataformas);
    crearPlataforma(470, 870, "paredSurHorizontalComision", plataformas);

    let paredCentro3Comision = crearPlataforma(
      767,
      670,
      "paredCentro3Comision",
      plataformasMedio
    );
    let paredCentro3ComisionOverlap = crearPlataforma(
      767,
      670,
      "paredCentro3Comision",
      plataformasOverlap
    );

    let paredCentro2Izcomision = crearPlataforma(
      1126,
      670,
      "paredCentro2Izcomision",
      plataformasMedio
    );
    let paredCentro2IzcomisionOverlap = crearPlataforma(
      1126,
      670,
      "paredCentro2Izcomision",
      plataformasOverlap
    );

    let paredCentro2Izquierdacomision = crearPlataforma(
      1165,
      396,
      "paredCentro2Izquierdacomision",
      plataformasMedio
    );
    let paredCentro2IzquierdacomisionOverlap = crearPlataforma(
      1165,
      396,
      "paredCentro2Izquierdacomision",
      plataformasOverlap
    );

    let paredCentro2comision = crearPlataforma(
      845,
      395,
      "paredCentro2comision",
      plataformasMedio
    );
    let paredCentro2Overlap = crearPlataforma(
      845,
      395,
      "paredCentro2comision",
      plataformasOverlap
    );

    crearPlataforma(930, 182, "paredMedioComision", plataformasMedio);
    let paredMedioOverlap = crearPlataforma(
      930,
      182,
      "paredMedioComision",
      plataformasOverlap
    );
    let mesa01 = crearPlataforma(834, 283, "table01", plataformasMedio);
    let mesa01Overlap = crearPlataforma(
      834,
      283,
      "table01",
      plataformasOverlap
    );
    let mesa02 = crearPlataforma(450, 350, "table01", plataformasMedio);
    let mesa02Overlap = crearPlataforma(
      450,
      350,
      "table01",
      plataformasOverlap
    );
    let mesaT01 = crearPlataforma(900, 850, "table02", plataformasMedio);
    let mesaT02 = crearPlataforma(370, 694, "table02", plataformasMedio);
    //mesaT02 girar horizontal
    mesaT02.flipX = true;
    let mesaT01Overlap = crearPlataforma(
      900,
      850,
      "table02",
      plataformasOverlap
    );
    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_2
    );

    let areaPractica = crearPlataforma(
      994,
      339,
      "paredCentro2Norcomision",
      puertaOverlap1
    );

    let secretaria = crearPlataforma(
      923,
      630,
      "puertaParedNorCentro3Comision",
      puertaOverlap2
    );

    // this.add.image(836, 494, "accesorios");

    if (activeVideo) {
      crearVideo(traslate("infoCubicle"), "avatarVideo1", this);
    }
    this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    let teclado = this.input.keyboard;

    // Configurar una acción para la tecla "i"
    teclado.addKey(Phaser.Input.Keyboard.KeyCodes.I).on(
      "down",
      async function (event) {
        try {
          // Puedes ejecutar cualquier código que quieras cuando se presione la tecla "i"
          await crearVideo(traslate("infoCubicle"), "avatarVideo1", this);
          await crearVideo(traslate("infoCubicle"), "avatarVideo2", this);
        } catch (error) {
          console.error("Error:", error);
        }
      }.bind(this)
    );

    // dimesionesPlataformaIndividual(escritorioA, 0, 20);

    // crearCard(
    //   this,
    //   this.dataEmployees[0],
    //   "fotoCarnet",
    //   silla,
    //   330,
    //   160,
    // );

    dimesionesPlataforma(plataformasNorte, 0.2, 40);

    createButtonCircle(this, "mainHallway1", escaleraComision, 1050, 780);

    dimesionesPlataforma(plataformasMedio, 0.2, 40);
    dimesionesPlataformaIndividual(paredCentro2comision, 0.1, 120);
    dimesionesPlataformaIndividual(paredCentro2Izquierdacomision, 0.1, 120);
    dimesionesPlataformaIndividual(paredCentro3Comision, 0.1, 120);
    dimesionesPlataformaIndividual(paredCentro2Izcomision, 0.1, 120);
    dimesionesPlataformaIndividual(mesa01, 0.3, 60);
    dimesionesPlataformaIndividual(mesa02, 0.3, 60);
    dimesionesPlataformaIndividual(mesaT01, 0.6, 50);
    // dimesionesPlataformaIndividual(paredMedio, 0.2, 40);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      plataformasOverlap,
      () => {
        overlapPlataforma(this, paredMedioOverlap);
        overlapPlataforma(this, paredCentro2Overlap);
        overlapPlataforma(this, paredCentro2IzquierdacomisionOverlap);
        overlapPlataforma(this, paredCentro3ComisionOverlap);
        overlapPlataforma(this, paredCentro2IzcomisionOverlap);
        overlapPlataforma(this, mesa01Overlap);
        overlapPlataforma(this, mesa02Overlap);
        overlapPlataforma(this, mesaT01Overlap);
      },
      null,
      this
    );

    /*   this.physics.add.overlap(
      this.avatar.avatarPlayer,
      puertaOverlap1,
      () => {
        changeNameOverlap(
          this,
          areaPractica,
          "Area de Prácticas",
          "Pasillo Comisiones"
        );
      },
      null,
      this
    ); this.physics.add.overlap(
      this.avatar.avatarPlayer,
      puertaOverlap2,
      () => {
        changeNameOverlap(this, secretaria, "Pasillo Comisiones", "Secretaria");
      },
      null,
      this
    ); */

    if (!window.missionActive && getIndexMission().index === "mission4") {
      startMission(this);
    }

    if (window.missionActive) {
      if (getIndexMission().index === "mission3") mission3(this);
      if (getIndexMission().index === "mission5") mission5Final(this);

    }

    this.physics.add.collider(this.avatar.avatarPlayer, plataformasMedio);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasNorte);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);

    shortMap(this, "commisionMap");
    bigMap(this);

    navbar(this, "Pasillo Comisiones");
  }

  update() {
    this.avatar.update(this);
  }
}
