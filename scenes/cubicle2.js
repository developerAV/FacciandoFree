import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma } from "./module/platform.js";
import { SCENE } from "../utils/constants.js";
import { shortMap, bigMap } from "./components/common/map.js";

export class Cubicle2 extends Phaser.Scene {
  constructor() {
    super({ key: "cubicle2" });
  }

  preload() {
    this.load.image("pisoCubiculo2", "assets/images/cubicle2/pisoC2.png");
    this.load.image("paredCu2", "assets/images/cubicle2/paredesColor.png");
    this.load.image("paredNorteCu2", "assets/images/cubicle2/paredNorteCu2.png");
    this.load.image("paredeIzCu2", "assets/images/cubicle2/paredeIzCu2.png");
    this.load.image("paredeIzTotalCu2", "assets/images/cubicle2/paredeIzTotalCu2.png");
    this.load.image("cubicle2ParedCentro1", "assets/images/cubicle2/cubicle2ParedCentro1.png");
    this.load.image("cubicle2ParedCentro2", "assets/images/cubicle2/cubicle2ParedCentro2.png");
    this.load.image("cubicle2ParedCentro3", "assets/images/cubicle2/cubicle2ParedCentro3.png");
    this.load.image("escalera1Cu2", "assets/images/cubicle2/escalera1Cu2.png");
    this.load.image("escalera2Cu2", "assets/images/cubicle2/escalera2Cu2.png");
    this.load.image("cubicle2ParedSurEste", "assets/images/cubicle2/cubicle2ParedSurEste.png");
  

  
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);
    
    // Configurar fondo transparente
    this.cameras.main.transparent = true;
    
    const fondoaula = this.add.image(800, 500, "pisoCubiculo2");
   this.add.image(800, 500, "paredCu2");
    // const escalera2 = this.add.image(795, 632,  "escalera2");
    
   


   
   let scale = 1;
   let scaleComputer = 1.5;
   
   
   
   let plataformas = this.physics.add.staticGroup();
   let plataformaOverlap = this.physics.add.staticGroup();

   crearPlataforma(762, 87, "paredNorteCu2", plataformas, scale);
   crearPlataforma(59, 417, "paredeIzCu2", plataformas, scale);
   crearPlataforma(255, 504, "paredeIzTotalCu2", plataformas, scale);
   crearPlataforma(1467, 419, "paredeIzCu2", plataformas, scale);
   let pared1 = crearPlataforma(591, 524, "cubicle2ParedCentro1", plataformas, scale);
   let pared2 = crearPlataforma(975, 524, "cubicle2ParedCentro2", plataformas, scale);
   let pared3 = crearPlataforma(1100, 724, "cubicle2ParedCentro3", plataformas, scale);
   let escalera1Cu2 = crearPlataforma(782, 874, "escalera1Cu2", plataformaOverlap, scale);
   let escalera2Cu2 = crearPlataforma(891, 819, "escalera2Cu2", plataformaOverlap, scale);
   let paredSurEste = crearPlataforma(1260, 900, "cubicle2ParedSurEste", plataformas, scale);
   


  let blur = crearPlataforma(758, 550, "redH", plataformaOverlap, 0.5);
  let notBlur = crearPlataforma(758, 610, "redH", plataformaOverlap, 0.5);

this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.5);


this.physics.add.overlap(this.avatar.avatarPlayer, blur, () => {

  //poner blur una platform
  pared1.alpha = 0.5;
  pared2.alpha = 0.5;
  console.log("blur");
  
}, null, this);
this.physics.add.overlap(this.avatar.avatarPlayer, notBlur, () => {

  pared1.alpha = 1;
  pared2.alpha = 1;

  console.log("NotBlur");
  
}, null, this);



     this.physics.add.collider(this.avatar.avatarPlayer, plataformas);

    // this.cameras.main.startFollow(this.avatar.avatarPlayer);
    // this.cameras.main.zoom = 2; 
  
    shortMap(this, "mapaOutside");
    bigMap(this);
  }

  update() {

    this.avatar.update(this);
  
  }  

}
