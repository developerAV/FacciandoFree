import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";

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


   crearPlataforma(762, 87, "paredNorteCu2", plataformas, scale);
   crearPlataforma(59, 417, "paredeIzCu2", plataformas, scale);
   crearPlataforma(255, 504, "paredeIzTotalCu2", plataformas, scale);
   crearPlataforma(1467, 417, "paredeIzCu2", plataformas, scale);

this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.5);






     this.physics.add.collider(this.avatar.avatarPlayer, plataformas);

    // this.cameras.main.startFollow(this.avatar.avatarPlayer);
    // this.cameras.main.zoom = 2; 
  

  }

  update() {

    this.avatar.update(this);
  
  }  

}
