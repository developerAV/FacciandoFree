import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";

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
   let plataformasillas = this.physics.add.staticGroup();
   let paredPlataforma = this.physics.add.staticGroup();
   

   this.stairs = this.physics.add.staticGroup();
   this.stairs.create(795, 632,  "escalera2");


    


   crearPlataforma(420, 597, "cuadro", plataformas, scale);
   crearPlataforma(566, 324, "paredNorte", plataformas, scale);
   crearPlataforma(140, 556, "paredIzq", plataformas, scale);
   crearPlataforma(1117, 229, "pared209", plataformas, scale);
   crearPlataforma(1421, 452, "paredDer", plataformas, scale);
   crearPlataforma(1195, 500, "paredHor1", plataformas, scale);
   crearPlataforma(1036, 545, "paredHor2", plataformas, scale);
   crearPlataforma(791, 543, "escalera1", plataformas, scale); 
   const escalera4 = this.add.image(1021, 605,  "escalera4");
   crearPlataforma(789, 771, "paredSur", plataformas, scale);
   this.avatar = new Avatar(this, 600, 800, 1.3);

// this.physics.add.collider(avatar, ladder, touchLadder, null, this);
    // plataformas.children.iterate((plataforma) => {
    //   plataforma.refreshBody();
    //   plataforma.body.setSize(
    //     plataforma.body.width * 1,
    //     plataforma.body.height * 0.6,
    //     true
    //   );
    //   plataforma.body.setOffset(0, 25);
    // });

     this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    // this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    // this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

    // // Configurar seguimiento de cámara al personaje
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    // // Configurar zoom de la cámara en función de la posición del personaje
    this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades
  

  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  
  }  

}
