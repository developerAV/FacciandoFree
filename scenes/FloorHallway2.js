import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
let activeVideo = false;
const xy = 7
export class FloorHallway2 extends Phaser.Scene {
  constructor() {
    super({ key: "floorHallway2" });
  }

  preload() {
    //piso
    this.load.image("piso", "assets/images/2FloorHallway/piso.png");
    this.load.image("PasilloPiso2", "assets/images/2FloorHallway/PasilloPiso2.png");

    //
    this.load.image("escaleraArriba", "assets/images/2FloorHallway/escaleraArriba.png");
    this.load.image("escaleraAbajo", "assets/images/2FloorHallway/escaleraAbajo.png");
    this.load.image("escaleraAbajoAbajo", "assets/images/2FloorHallway/escaleraAbajoAbajo.png");
    this.load.image("puerta", "assets/images/2FloorHallway/puerta.png");
    this.load.image("puerta2", "assets/images/2FloorHallway/puerta2.png");
    this.load.image("mesaHorizontal", "assets/images/2FloorHallway/mesaHorizontal.png");
    this.load.image("mesaVertical", "assets/images/2FloorHallway/mesaVertical.png");
    
    this.load.image("mesasAbajo", "assets/images/2FloorHallway/mesasAbajo.png");
    this.load.image("mesaAbajoDerecha", "assets/images/2FloorHallway/mesaAbajoDerecha.png");
    this.load.image("mesaMedio", "assets/images/2FloorHallway/mesaMedio.png");
    this.load.image("banca", "assets/images/2FloorHallway/banca.png");

    //s
    this.load.image("sillaDeLado", "assets/images/2FloorHallway/sillaDeLado.png");
    this.load.image("sillaDeLado2", "assets/images/2FloorHallway/sillaDeLado2.png");
    this.load.image("sillaFrontal", "assets/images/2FloorHallway/sillaFrontal.png");
    
    //paredes
    this.load.image("paredes", "assets/images/2FloorHallway/paredes/paredes.png");
    this.load.image("hueco", "assets/images/2FloorHallway/paredes/hueco.png");
    this.load.image("paredSuperior", "assets/images/2FloorHallway/paredes/paredSuperior.png");
    this.load.image("esquinaSuperiorDerecha", "assets/images/2FloorHallway/paredes/esquinaSuperiorDerecha.png");
    this.load.image("pared", "assets/images/2FloorHallway/paredes/pared.png");
    this.load.image("salaEstudianteArriba", "assets/images/2FloorHallway/paredes/salaEstudianteArriba.png");
    this.load.image("paredLarga", "assets/images/2FloorHallway/paredes/paredLarga.png");
    this.load.image("muro", "assets/images/2FloorHallway/paredes/muro.png");
    this.load.image("paredInferior", "assets/images/2FloorHallway/paredes/paredInferior.png");
    this.load.image("separadorCurso", "assets/images/2FloorHallway/paredes/separadorCurso.png");
    this.load.image("cursos", "assets/images/2FloorHallway/paredes/cursos.png");
    this.load.image("paredCursoDerecha", "assets/images/2FloorHallway/paredes/paredCursoDerecha.png");
    this.load.image("paredCursoIzquierda", "assets/images/2FloorHallway/paredes/paredCursoIzquierda.png");
    this.load.image("cachoFaltante", "assets/images/2FloorHallway/paredes/cachoFaltante.png");
    this.load.image("faltante", "assets/images/2FloorHallway/paredes/faltante.png");

    //
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // instaciar la clase "Plataform" para usar la funcion de crearPlataforma
   // const plataforma = new Platform();
    
    
    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    
    this.add.image(590, 500, "piso").setScale(1);
    //Pared superior
    //paredes
    //plataforma.crearPlataforma(590, 500, "PasilloPiso2", plataformas)
   crearPlataforma(598, 137, "paredSuperior", paredPlataforma);
   crearPlataforma(1161.5, 273, "esquinaSuperiorDerecha", plataformas);
   crearPlataforma(1241, 409, "pared", plataformas);
   crearPlataforma(1306, 521, "salaEstudianteArriba", plataformas)
   crearPlataforma(1466, 758, "paredLarga", plataformas)
   crearPlataforma(1446, 665, "muro", plataformas)
   crearPlataforma(1446, 760, "muro", plataformas)
   crearPlataforma(1218, 900, "paredInferior", plataformas)
   crearPlataforma(26, 369, "separadorCurso", plataformas)
   crearPlataforma(554, 713, "cursos", plataformas)
   crearPlataforma(866, 531, "paredCursoIzquierda", plataformas)
   crearPlataforma(382, 476, "paredCursoDerecha", plataformas)
   crearPlataforma(445, 370, "hueco", plataformas,0.35)
   crearPlataforma(666, 481, "cachoFaltante", plataformas)
   crearPlataforma(138, 385, "faltante", plataformas)
    this.avatar = new Avatar(this, 800, 490, 1.3);

   crearPlataforma(1181, 356,  "escaleraArriba", plataformas)
   crearPlataforma(1205, 428,  "escaleraAbajoAbajo", plataformas,0.25)
   crearPlataforma(1181, 440,  "escaleraAbajo", plataformas)

   crearPlataforma(700, 256,  "puerta", plataformas,1.35)
   crearPlataforma(637, 256,  "puerta2", plataformas,1.35)
    
   crearPlataforma(990, 740,  "sillaDeLado2", plataformas)
   crearPlataforma(990, 770,  "sillaDeLado2", plataformas)
   crearPlataforma(990, 830,  "sillaDeLado2", plataformas)
   crearPlataforma(990, 860,  "sillaDeLado2", plataformas)
    
   crearPlataforma(1181, 565,  "sillaFrontal", plataformas)
   crearPlataforma(1220, 565,  "sillaFrontal", plataformas)
   crearPlataforma(1311, 565,  "sillaFrontal", plataformas)
   crearPlataforma(1350, 565,  "sillaFrontal", plataformas)
   crearPlataforma(1390, 577,  "sillaDeLado", plataformas)
   crearPlataforma(1333, 580,  "mesaHorizontal", plataformas,0.5)
   crearPlataforma(1207, 580,  "mesaHorizontal", plataformas,0.5)
   crearPlataforma(1010, 750,  "mesaVertical", plataformas,0.5)
   crearPlataforma(1197, 865,  "mesasAbajo", plataformas)
   crearPlataforma(1438, 834,  "mesaAbajoDerecha", plataformas)
   crearPlataforma(1438, 731,  "mesaMedio", plataformas)
   crearPlataforma(1000, 281,  "banca", plataformas,1.35)
    
    
   if (activeVideo) {
    crearVideo(mensaje.txtCubicle[window.lan], "avatarVideo", this, true);
  }

  this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
  this.cameras.main.zoom = 2;

  
    plataformas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.7,
        true
      );
      plataforma.body.setOffset(0, 30);
    });
    paredPlataforma.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.6,
        true
      );
      plataforma.body.setOffset(0, 25);
    });

    //instancia del avatar

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);
  }

  update() {
    // Llamamos a la función "update()" del avatar
    this.avatar.update(this);
  }
}
