import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
} from "./module/platform.js";
import { traslate } from "../data/dialogues.js";
import { crearVideo } from "./module/videoInfo.js";
import { crearCard } from "./module/card.js";
import { getEmployees } from "../services/employee.js";
import { createButtonCircle } from "../scenes/components/common/buttonCircle.js";
import { navbar } from "./components/common/navbar.js";
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
    this.load.image("pisoComision", "assets/images/commission_area/PisoComisiones.png");
    this.load.image("pf", "assets/images/commission_area/pf.png");
    this.load.image("psec", "assets/images/commission_area/paredSurEsteComision.png");
    this.load.image("psoc", "assets/images/commission_area/paredSurOesteComision.png");
    this.load.image("puertaSurComision", "assets/images/commission_area/puertaSurComision.png");
    this.load.image("paredIzqPuertaComision", "assets/images/commission_area/paredIzPuertaComisiones.png");
    this.load.image("paredMedioComision", "assets/images/commission_area/paredMedioComision.png");
    this.load.image("paredVerticalComision", "assets/images/commission_area/paredVerticalComision.png");
    this.load.image("paredCentro2comision", "assets/images/commission_area/paredCentro2comision.png");
    this.load.image("paredCentro2Izcomision", "assets/images/commission_area/paredCentro2Izcomision.png");
    this.load.image("paredCentro2Izquierdacomision", "assets/images/commission_area/paredCentro2Izquierdacomision.png");
    this.load.image("paredCentro2Norcomision", "assets/images/commission_area/paredCentro2Norcomision.png");
    this.load.image("paredCentro3Comision", "assets/images/commission_area/paredCentro3Comision.png");
    this.load.image("puertaParedNorCentro3Comision", "assets/images/commission_area/puertaParedNorCentro3Comision.png");
   
  
  }

  async create() {
    window.avatarUpdateActivo = true;
    // this.cameras.main.fadeIn(500);
    this.cameras.main.transparent = true;
    // Crear una capa UI que estará por encima de la escena
    let uiLayer = this.add.layer();
    this.add.image(800, 528, "pisoComision");
    this.add.image(800, 500, "pf");
    
    let plataformas = this.physics.add.staticGroup();
    
    crearPlataforma(478, 72, "psec", plataformas);
    crearPlataforma(1009, 40, "psoc", plataformas);
    crearPlataforma(687, 72, "puertaSurComision", plataformas);
    crearPlataforma(632, 165, "paredIzqPuertaComision", plataformas);
    crearPlataforma(930, 182, "paredMedioComision", plataformas);
    crearPlataforma(728, 270, "paredVerticalComision", plataformas);
    crearPlataforma(845, 394, "paredCentro2comision", plataformas);
    crearPlataforma(1165, 394, "paredCentro2Izquierdacomision", plataformas);
    
    crearPlataforma(1126, 670, "paredCentro2Izcomision", plataformas);
    crearPlataforma(766, 670, "paredCentro3Comision", plataformas);
     

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.5);
   
    this.add.image(994, 338, "paredCentro2Norcomision");
    this.add.image(923, 630, "puertaParedNorCentro3Comision");


    if (activeVideo) {
      crearVideo(traslate("infoCubicle"), "avatarVideo1", this, true);
    }
    // this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    // this.cameras.main.zoom = 2;

    let teclado = this.input.keyboard;

    // Configurar una acción para la tecla "i"
    teclado.addKey(Phaser.Input.Keyboard.KeyCodes.I).on(
      "down",
      async function (event) {
        try {
          // Puedes ejecutar cualquier código que quieras cuando se presione la tecla "i"
          await crearVideo(
            traslate("infoCubicle"),
            "avatarVideo1",
            this,
            false
          );
          await crearVideo(traslate("infoCubicle"), "avatarVideo2", this, true);
          // await aumentarZoom();
          // Aquí continúa con el código después de que ambos videos hayan terminado
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

  

    window.avatarX = this.avatar.avatarPlayer.x;
    window.avatarY = this.avatar.avatarPlayer.y;

//   createButtonCircle(this, "hallway2", escaleraX, 500, 500);
//   createButtonCircle(this, "aula", escritorioD, 800, 500);
    
    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);

    // navbar(this, "cubicle");
  }

  update() {
    this.avatar.update(this);
  }
}
