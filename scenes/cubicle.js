import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";

export class Cubicle extends Phaser.Scene {
  constructor() {
    super({ key: "cubicle" });
  }

  preload() {
    this.load.image("pisoCubiculo", "assets/images/cubicle/piso.png");
    this.load.image("paredColor", "assets/images/cubicle/cubiculocolor.jpg");
    this.load.image("paredIzqC", "assets/images/cubicle/paredIzq.png");  
    this.load.image("paredSurEste", "assets/images/cubicle/paredSurEste.png");  
    this.load.image("paredPuertaIzq", "assets/images/cubicle/paredPuertaIzq.png");  
    this.load.image("paredPuertaSur", "assets/images/cubicle/paredPuertaNorSur.png");  
    this.load.image("paredPuertaNor", "assets/images/cubicle/paredPuertaNor.png");  
    this.load.image("paredPuertaDer", "assets/images/cubicle/paredPuertaDer.png");  
    this.load.image("paredNorte", "assets/images/cubicle/paredNorte.png");  
    this.load.image("paredEscalera", "assets/images/cubicle/paredEscalera.png");  
    this.load.image("paredSurDer", "assets/images/cubicle/paredSurDer.png");  
    this.load.image("paredDer", "assets/images/cubicle/paredDer.png");  
   
    this.load.image("escritoriosA", "assets/images/cubicle/escritoriosA.png");  
    this.load.image("escritoriosB", "assets/images/cubicle/escritoriosB.png");  
    this.load.image("escritorioB6", "assets/images/cubicle/escritorioB6.png");  
    this.load.image("escritoriosC", "assets/images/cubicle/escritoriosC.png");  
    this.load.image("escritoriosD", "assets/images/cubicle/escritoriosD.png");  
    this.load.image("sillaB6", "assets/images/accessories/chair/0001.png");  

    this.load.image("escalera", "assets/images/cubicle/escalera.png");  
    this.load.image("impresora", "assets/images/cubicle/impresora.png");  
    this.load.image("servidor", "assets/images/cubicle/servidor.png");  
    this.load.image("anaquel", "assets/images/cubicle/anaquel.png");  

  
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);
    
    // Configurar fondo transparente
    this.cameras.main.transparent = true;
    
    const fondoaula = this.add.image(846, 533, "pisoCubiculo");
    // const escalera2 = this.add.image(795, 632,  "escalera2");
    
   


   
   let scale = 1;
   let scaleComputer = 1.5;
   
   
   
   let plataformas = this.physics.add.staticGroup();
//    let plataformasillas = this.physics.add.staticGroup();
//    let paredPlataforma = this.physics.add.staticGroup();
  

crearPlataforma(10, 417, "paredIzqC", plataformas, scale);
crearPlataforma(634, 796, "paredPuertaIzq", plataformas, scale);

//    crearPlataforma(420, 597, "cuadro", plataformas, scale);

this.avatar = new Avatar(this, 680, 870, 1.5);
// crearPlataforma(690, 641, "paredPuertaSur", plataformas, scale);
crearPlataforma(800, 137, "paredNorte", plataformas, scale);
crearPlataforma(302, 680, "escritoriosA", plataformas, scale);
crearPlataforma(561, 250, "escritoriosB", plataformas, scale);
crearPlataforma(1190, 250, "escritorioB6", plataformas, scale);
crearPlataforma(1502, 492, "escritoriosC", plataformas, scale);
crearPlataforma(1005, 611, "escritoriosD", plataformas, scale);
const paredsur = this.add.image(322, 720, "paredSurEste");
crearPlataforma(690, 947, "paredPuertaSur", plataformas, scale);
crearPlataforma(761, 796, "paredPuertaDer", plataformas, scale);
const paredparedPuertaNor = this.add.image(698, 641, "paredPuertaNor");

crearPlataforma(871, 829, "paredEscalera", plataformas, scale);

const paredSurDer = this.add.image(1298, 735, "paredSurDer",);
crearPlataforma(1589, 423, "paredDer", plataformas, scale);



crearPlataforma(877, 860, "escalera", plataformas, scale);

// const fondoColor = this.add.image(800, 500, "paredColor");
crearPlataforma(1050, 240, "impresora", plataformas, scale);
crearPlataforma(63, 192, "servidor", plataformas, scale);
crearPlataforma(156, 146, "anaquel", plataformas, scale);
crearPlataforma(480, 146, "anaquel", plataformas, scale);
crearPlataforma(680, 146, "anaquel", plataformas, scale);
crearPlataforma(830, 146, "anaquel", plataformas, scale);
crearPlataforma(930, 146, "anaquel", plataformas, scale);
crearPlataforma(1230, 146, "anaquel", plataformas, scale);

crearPlataforma(1200, 226, "sillaB6", plataformas, scale);




// // this.physics.add.collider(avatar, ladder, touchLadder, null, this);
//     // plataformas.children.iterate((plataforma) => {
  //     //   plataforma.refreshBody();
  //     //   plataforma.body.setSize(
    //     //     plataforma.body.width * 1,
    //     //     plataforma.body.height * 0.6,
//     //     true
//     //   );
//     //   plataforma.body.setOffset(0, 25);
//     // });

     this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
//     // this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
//     // this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

//     // // Configurar seguimiento de cámara al personaje
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

//     // // Configurar zoom de la cámara en función de la posición del personaje
    this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades
  

  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  
  }  

}
