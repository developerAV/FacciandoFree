import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
  overlapPlataforma,
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
    // this.load.image("pf", "assets/images/commission_area/pf.png");
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
    this.load.image("paredIzComision", "assets/images/commission_area/paredIzComision.png");
    this.load.image("paredVerticalMedioComision", "assets/images/commission_area/paredVerticalMedioComision.png");
    this.load.image("paredCentroHorizontal", "assets/images/commission_area/paredCentroHorizontal.png");
    this.load.image("paredCentroIzVertical", "assets/images/commission_area/paredCentroIzVertical.png");
    this.load.image("paredSecretariaComision", "assets/images/commission_area/paredSecretariaComision.png");
    this.load.image("paredHorizontalSurComision", "assets/images/commission_area/paredHorizontalSurComision.png");
    this.load.image("paredSurCentroVerticalComision", "assets/images/commission_area/paredSurCentroVerticalComision.png");
    this.load.image("paredSurHorizontalComision", "assets/images/commission_area/paredSurHorizontalComision.png");
    this.load.image("escaleraComision", "assets/images/commission_area/escaleraComision.png");
    this.load.image("paredIzquierdaComision", "assets/images/commission_area/paredIzquierdaComision.png");
    this.load.image("paredCentroComisionTesis", "assets/images/commission_area/paredCentroComisionTesis.png");
    this.load.image("paredPuertaMedioComision", "assets/images/commission_area/paredPuertaMedioComision.png");
   
  
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
    
    crearPlataforma(478, 72, "psec", plataformasNorte);
    crearPlataforma(1009, 40, "psoc", plataformasNorte);
    crearPlataforma(311, 454, "paredIzComision", plataformas);
    crearPlataforma(625, 790, "paredVerticalMedioComision", plataformas);
    crearPlataforma(1306, 208, "paredIzquierdaComision", plataformas);
    crearPlataforma(1128, 194, "paredCentroComisionTesis", plataformas);
    crearPlataforma(1254, 532, "escaleraComision", plataformas);
    
    
    crearPlataforma(687, 72, "puertaSurComision", plataformas);
    crearPlataforma(632, 165, "paredIzqPuertaComision", plataformas);
  
    crearPlataforma(616, 295, "paredPuertaMedioComision", plataformas);


    crearPlataforma(728, 270, "paredVerticalComision", plataformas);
    crearPlataforma(1165, 394, "paredCentro2Izquierdacomision", plataformas);
    
    crearPlataforma(1126, 670, "paredCentro2Izcomision", plataformas);
    crearPlataforma(767, 670, "paredCentro3Comision", plataformas);
    
    crearPlataforma(472, 518, "paredCentroHorizontal", plataformas);
    crearPlataforma(614, 452, "paredCentroIzVertical", plataformas);
    crearPlataforma(680, 902, "paredSecretariaComision", plataformas);
    crearPlataforma(874, 966, "paredHorizontalSurComision", plataformas);
    crearPlataforma(1018, 852, "paredSurCentroVerticalComision", plataformas);
    crearPlataforma(470, 870, "paredSurHorizontalComision", plataformas);
    
    
    let paredCentro2comision = crearPlataforma(845, 395, "paredCentro2comision", plataformasMedio);
    let paredCentro2Overlap =crearPlataforma(845, 395, "paredCentro2comision", plataformasOverlap);
    
   crearPlataforma(930, 182, "paredMedioComision", plataformasMedio);
    let paredMedioOverlap = crearPlataforma(930, 182, "paredMedioComision", plataformasOverlap);
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
        
        } catch (error) {
          console.error("Error:", error);
        }
      }.bind(this)
    );

    dimesionesPlataforma(plataformasNorte, 0.2, 40); 
    
    window.avatarX = this.avatar.avatarPlayer.x;
    window.avatarY = this.avatar.avatarPlayer.y;
    
    dimesionesPlataforma(plataformasMedio, 0.2, 40);
    dimesionesPlataformaIndividual(paredCentro2comision, 0.1, 120);

    
  this.physics.add.overlap(this.avatar.avatarPlayer, plataformasOverlap,  () => {
    overlapPlataforma(this, paredMedioOverlap);
    overlapPlataforma(this, paredCentro2Overlap);
  }, null, this);
   
  this.physics.add.collider(this.avatar.avatarPlayer, plataformasMedio);
  this.physics.add.collider(this.avatar.avatarPlayer, plataformasNorte);
  this.physics.add.collider(this.avatar.avatarPlayer, plataformas);

    // navbar(this, "cubicle");
  }

  update() {
    this.avatar.update(this);
  }
}
