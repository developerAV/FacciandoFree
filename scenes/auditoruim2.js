import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";

export class Auditorium2 extends Phaser.Scene {
  constructor() {
    super({ key: "auditorium2" });
  }

  preload() {
    //piso
    this.load.image("Auditorio2", "assets/images/auditorium2/Auditorio2.png");
    //paredes
    this.load.image(
      "paredDer",
      "assets/images/auditorium2/paredes/paredDer.png"
    );
    this.load.image(
      "paredInferior",
      "assets/images/auditorium2/paredes/paredInferior.png"
    );
    this.load.image(
      "paredIzq1",
      "assets/images/auditorium2/paredes/paredIzq1.png"
    );
    this.load.image(
      "paredIzq2",
      "assets/images/auditorium2/paredes/paredIzq2.png"
    );
    this.load.image(
      "paredSuperior",
      "assets/images/auditorium2/paredes/paredSuperior.png"
    );

    //
    this.load.image("fila1", "assets/images/auditorium2/fila1.png");
    this.load.image("fila2", "assets/images/auditorium2/fila2.png");
    this.load.image("fila3", "assets/images/auditorium2/fila3.png");
    this.load.image("fila4", "assets/images/auditorium2/fila4.png");
    this.load.image("fila5", "assets/images/auditorium2/fila5.png");
    this.load.image("mesa", "assets/images/auditorium2/mesa.png");
    this.load.image("silla2", "assets/images/auditorium2/silla2.png");
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // Configurar fondo transparente
    this.cameras.main.transparent = true;

    this.add.image(800, 500, "Auditorio2");

    this.avatar = new Avatar(this, 600, 800, 1.5);

    let plataformas = this.physics.add.staticGroup();
    let plataformasillas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();
    // this.plataforma = new Platform();

    crearPlataforma(800, 310, "paredSuperior", plataformas);
    crearPlataforma(796, 739, "paredInferior", plataformas);
    crearPlataforma(428, 683, "paredIzq2", plataformas);
    crearPlataforma(1053, 500, "paredDer", plataformas, 0.997);
    crearPlataforma(768, 700, "fila1", plataformasillas);
    crearPlataforma(752, 652, "fila2", plataformasillas);
    crearPlataforma(769, 604, "fila3", plataformasillas);
    crearPlataforma(785, 556, "fila4", plataformasillas);
    crearPlataforma(816, 508, "fila5", plataformasillas);
    crearPlataforma(570, 380, "mesa", plataformasillas);
    crearPlataforma(900, 400, "mesa", plataformasillas);

    crearPlataforma(448, 491, "silla2", plataformasillas);
    crearPlataforma(464, 507, "silla2", plataformasillas);
    crearPlataforma(480, 523, "silla2", plataformasillas);
    crearPlataforma(496, 539, "silla2", plataformasillas);
    
    crearPlataforma(448, 427, "silla2", plataformasillas);
    crearPlataforma(464, 443, "silla2", plataformasillas);
    crearPlataforma(480, 459, "silla2", plataformasillas);
    crearPlataforma(496, 475, "silla2", plataformasillas);
    crearPlataforma(512, 491, "silla2", plataformasillas);
    crearPlataforma(528, 507, "silla2", plataformasillas);
    crearPlataforma(544, 523, "silla2", plataformasillas);
    
    crearPlataforma(480, 411, "silla2", plataformasillas);
    crearPlataforma(496, 427, "silla2", plataformasillas);
    crearPlataforma(512, 443, "silla2", plataformasillas);
    crearPlataforma(544, 475, "silla2", plataformasillas);
    crearPlataforma(560, 491, "silla2", plataformasillas);

    crearPlataforma(440, 401.5, "paredIzq1", plataformas);

    plataformas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.6,
        true
      );
      plataforma.body.setOffset(0, 25);
    });

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, plataformasillas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

    // Configurar seguimiento de cámara al personaje   
     this.cameras.main.startFollow(this.avatar.avatarPlayer);

    // Configurar zoom de la cámara en función de la posición del personaje
    this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades
  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
