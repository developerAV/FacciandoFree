import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { dimesionesPlataforma, dimesionesPlataformaIndividual, overlapPlataforma } from "./module/platform.js";

export class Hallway300 extends Phaser.Scene {
  constructor() {
    super({ key: "hallway300" });
  }

  preload() {
    this.load.image("backgroundHallway300", "assets/images/hallway300/Piso.png");
    this.load.image("pardColor", "assets/images/hallway300/paredesColor.png");
    this.load.image("paredSur", "assets/images/hallway300/paredsur.png");
    this.load.image("paredNorte", "assets/images/hallway300/parednorte.png");
    this.load.image("cuadro", "assets/images/hallway300/cuadro.png");
    this.load.image("paredIzq", "assets/images/hallway300/paredIzq.png");
    this.load.image("pared209", "assets/images/hallway300/pared209.png");
    this.load.image("paredDer", "assets/images/hallway300/paredes-308-309.png");
    this.load.image("paredHor1", "assets/images/hallway300/paredHorizontal210.png");
    this.load.image("paredHor2", "assets/images/hallway300/paredHorizontal210-2.png");
    this.load.image("escalera1", "assets/images/hallway300/escalera1.png");
    this.load.image("escalera2", "assets/images/hallway300/escalera2.png");
    this.load.image("escalera3", "assets/images/hallway300/escalera3.png");
    this.load.image("escalera4", "assets/images/hallway300/escalera4.png");

  
  }

  create() {
    window.avatarUpdateActivo = true;
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);
    
    // Configurar fondo transparente
    this.cameras.main.transparent = true;
    
    const fondoaula = this.add.image(800, 500, "backgroundHallway300");
    const fondoColor = this.add.image(800, 500, "pasilloPiso3");
    // const escalera2 = this.add.image(795, 632,  "escalera2");
    const escalera3 = this.add.image(878, 548,  "escalera3");
   


   
   let scale = 1;
   let scaleComputer = 1.5;
   
   
   
   let plataformas = this.physics.add.staticGroup();
   let plataformaNorte = this.physics.add.staticGroup();
   let plataformaMedio = this.physics.add.staticGroup();
   let plataformaMedioOverlap = this.physics.add.staticGroup();

   let plataformaSur = this.physics.add.staticGroup();
   

   this.stairs = this.physics.add.staticGroup();
   this.stairs.create(795, 632,  "escalera2");


    


  let cuadro = crearPlataforma(420, 597, "cuadro", plataformaMedio, scale);
  let cuadroOverlap = crearPlataforma(420, 597, "cuadro", plataformaMedioOverlap, scale);

   crearPlataforma(566, 324, "paredNorte", plataformaNorte, scale);
   crearPlataforma(140, 556, "paredIzq", plataformas, scale);
  let pared209Plataforma =  crearPlataforma(1117, 229, "pared209", plataformaNorte, scale);
   crearPlataforma(1421, 452, "paredDer", plataformas, scale);

   let paredHor1 = crearPlataforma(1195, 500, "paredHor1", plataformaMedio, scale);
   let paredHor1Overlap = crearPlataforma(1195, 500, "paredHor1", plataformaMedioOverlap, scale);
   
   crearPlataforma(1036, 545, "paredHor2", plataformas, scale);
   crearPlataforma(791, 543, "escalera1", plataformas, scale); 
   const escalera4 = this.add.image(1021, 605,  "escalera4");
   this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.3);
   crearPlataforma(789, 771, "paredSur", plataformaSur, scale);

    // dimesionesPlataformaIndividual(pared209Plataforma, 0.6, 120);
    dimesionesPlataforma(plataformaNorte, 0.6, 120)
    dimesionesPlataforma(plataformaSur, 0.6, 10)
    dimesionesPlataformaIndividual(cuadro, 0.6, 5); 
    dimesionesPlataformaIndividual(paredHor1, 0.5, 5);

    this.physics.add.overlap(this.avatar.avatarPlayer, plataformaMedioOverlap, () => {
      overlapPlataforma(this, cuadroOverlap);
      overlapPlataforma(this, paredHor1Overlap);
      
    }, null, this);


     this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
     this.physics.add.collider(this.avatar.avatarPlayer, plataformaNorte);
     this.physics.add.collider(this.avatar.avatarPlayer, plataformaMedio);
     this.physics.add.collider(this.avatar.avatarPlayer, plataformaSur);

    this.cameras.main.startFollow(this.avatar.avatarPlayer);
    this.cameras.main.zoom = 2; 
    navbar(this, "hallway 300");

  }

  update() {

    this.avatar.update(this);
  
  }  

}
