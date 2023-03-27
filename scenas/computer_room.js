import { Avatar } from "./player.js";
import { Platform } from "./module/platform.js";

export class ComputerRoom extends Phaser.Scene {
  constructor() {
    super({ key: "computer_room" });
  }

  preload() {
    this.load.image("background2", "assets/images/img_aula/piso.png");
    this.load.image("paredAula", "assets/images/img_aula/paredNorte.png");
    this.load.image("paredIzq", "assets/images/img_aula/paredIzq.png");
    this.load.image("paredDer", "assets/images/img_aula/paredDer.png");
    this.load.image("paredInf", "assets/images/img_aula/paredInf.png");
    this.load.image("pizarraAula", "assets/images/img_aula/pizarra.png");
    this.load.image("computer", "assets/images/computer_room/computers.png");
    this.load.image("chair1", "assets/images/computer_room/chairV1.png");
    this.load.image("chair2", "assets/images/computer_room/chairV2.png");
    this.load.image("escritorioAula", "assets/images/img_aula/escritorio.png");



  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    const fondoaula = this.add.image(800, 500, "background2").setScale(1.8);
let scale = 1.8;
    let scaleComputer = 1.5;

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    this.plataforma = new Platform();

    this.plataforma.crearPlataforma(800, 110, "paredAula", paredPlataforma,scale);
    this.plataforma.crearPlataforma(800, 130, "pizarraAula", plataformas, scale);
    this.avatar = new Avatar(this, 800, 1000);



    // this.plataforma.crearPlataforma(800, 880, "mesaAula", plataformas);
    this.plataforma.crearPlataforma(455, 613, "paredIzq", plataformas, scale);
    this.plataforma.crearPlataforma(1145, 613, "paredDer", plataformas, scale);
    
    
    // lado derecho del salon de computadoras (mesas y sillas)
    // --- Mesas con computadoras
    this.plataforma.crearPlataforma(1000, 960, "computer", plataformas, scaleComputer);
    this.plataforma.crearPlataforma(1000, 810, "computer", plataformas, scaleComputer);
    this.plataforma.crearPlataforma(1000, 660, "computer", plataformas, scaleComputer);
    this.plataforma.crearPlataforma(1000, 510, "computer", plataformas, scaleComputer);
    this.plataforma.crearPlataforma(1000, 360, "computer", plataformas, scaleComputer);
    
    
    // --- sillas lado derecho
    this.plataforma.crearPlataforma(1070, 960+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(1070, 810+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(1070, 660+35, "chair2", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(1070, 510+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(1070, 360+35, "chair2", plataformasillas, scaleComputer);
    // --- sillas lado izquierdo
    this.plataforma.crearPlataforma(955, 960+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(955, 810+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(955, 660+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(955, 510+35, "chair1", plataformasillas, scaleComputer);
    this.plataforma.crearPlataforma(955, 360+35, "chair1", plataformasillas, scaleComputer);
    
    

// lado izquierdo del salon de computadoras (mesas y sillas)
// --- Mesas con computadoras
// this.plataforma.crearPlataforma(600, 890, "computer", plataformas, scaleComputer);
this.plataforma.crearPlataforma(600, 810, "computer", plataformas, scaleComputer);
this.plataforma.crearPlataforma(600, 660, "computer", plataformas, scaleComputer);
this.plataforma.crearPlataforma(600, 510, "computer", plataformas, scaleComputer);
this.plataforma.crearPlataforma(600, 360, "computer", plataformas, scaleComputer);
// --- sillas lado derecho
// this.plataforma.crearPlataforma(670, 890+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(670, 810+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(670, 660+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(670, 510+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(670, 360+35, "chair1", plataformasillas, scaleComputer);
// --- sillas lado izquierdo
// this.plataforma.crearPlataforma(555, 890+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(555, 810+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(555, 660+35, "chair2", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(555, 510+35, "chair1", plataformasillas, scaleComputer);
this.plataforma.crearPlataforma(555, 360+35, "chair1", plataformasillas, scaleComputer);

// Escritorio
    this.plataforma.crearPlataforma(1000, 250, "escritorioAula", plataformas,scale);
this.plataforma.crearPlataforma(800, 986, "paredInf", plataformas, scale);

paredPlataforma.children.iterate((plataforma) => {
  plataforma.refreshBody();
  plataforma.body.setSize(
    plataforma.body.width * 1,
    plataforma.body.height * 0.6,
    true
  );
  plataforma.body.setOffset(0, 25);
});

plataformas.children.iterate((plataforma) => {
  plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.3,
        true
      );
      plataforma.setOffset(0, 25); // la parte inferior
    });

    plataformasillas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.1,
        true
      );
      plataforma.setOffset(0, 30); // la parte inferior
    });

    
   


    


    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);
  }

  
  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}