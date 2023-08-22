import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { mensaje } from "../data/dialogues.js";
import { information } from "../data/informationSir.js";
import { crearVideo } from "./module/videoInfo.js";
import { crearCard } from "./module/card.js";
let lan = "en";
let avatarEnMovimiento = false;
let activeVideo = false;

export class Cubicle extends Phaser.Scene {
  constructor() {
    super({ key: "cubicle" });
  }

  preload() {
    this.load.image("pisoCubiculo", "assets/images/cubicle/piso.png");
    this.load.image("paredColor", "assets/images/cubicle/cubiculocolor.jpg");
    this.load.image("paredIzqC", "assets/images/cubicle/paredIzq.png");
    this.load.image("paredSurEste", "assets/images/cubicle/paredSurEste.png");
    this.load.image(
      "paredPuertaIzq",
      "assets/images/cubicle/paredPuertaIzq.png"
    );
    this.load.image(
      "paredPuertaSur",
      "assets/images/cubicle/paredPuertaNorSur.png"
    );
    this.load.image(
      "paredPuertaNor",
      "assets/images/cubicle/paredPuertaNor.png"
    );
    this.load.image(
      "paredPuertaDer",
      "assets/images/cubicle/paredPuertaDer.png"
    );
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

    this.load.image("fotoCarnet", "assets/images/avatars/avatar1.png");
    this.load.video(
      "avatarVideo",
      "assets/videos/valentin.mp4",
      "loadeddata",
      false,
      true
    );
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    // Configurar fondo transparente
    this.cameras.main.transparent = true;

    const piso = this.add.image(846, 533, "pisoCubiculo");
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

    const paredSurDer = this.add.image(1298, 735, "paredSurDer");
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
    const posicionX = this.cameras.main.scrollX;

    // Obtener la posición actual de la cámara en el eje Y
    const posicionY = this.cameras.main.scrollY;

    console.log(
      `Posición actual de la cámara - X: ${posicionX}, Y: ${posicionY}`
    );

    if (activeVideo) {
      crearVideo(mensaje.txtCubicle[lan], "avatarVideo", this, true);
    } else {
      this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje

      this.cameras.main.zoom = 2;
    }

    // Crear un objeto de teclado
    let teclado = this.input.keyboard;

    // Configurar una acción para la tecla "i"
    let miAccion = teclado.addKey(Phaser.Input.Keyboard.KeyCodes.I);

    // Configurar qué hacer cuando se presiona la tecla "i"
    miAccion.on(
      "down",
      function (event) {
        // Realiza la acción que desees aquí
        console.log("La tecla 'i' ha sido presionada");
        //resetear camara
        this.cameras.main.stopFollow();
        this.cameras.main.setZoom(1);

        // this.cameras.main.zoom = 1;
        this.cameras.main.centerOn(0, 0);
        this.cameras.main.setScroll(0, 0);

        // Puedes ejecutar cualquier código que quieras cuando se presione la tecla "i"

        crearVideo(mensaje.txtCubicle[lan], "avatarVideo", this, true);
      }.bind(this)
    ); // Usa bind para mantener el contexto de "this"
    let plataforma2 = this.physics.add.staticGroup();
   let silla =  crearPlataforma(330, 330, "sillaB6", plataforma2, scale);
   this.contenedor1 = this.add.container(330, 160);
   let silla2 =  crearPlataforma(530, 330, "sillaB6", plataforma2, scale);
   this.contenedor2 = this.add.container(530, 160);
    crearCard(
      this,
      information.rober_moreira[lan].status,
      information.rober_moreira[lan].name,
      information.rober_moreira[lan].age,
      information.rober_moreira[lan].description,
      "fotoCarnet",
      silla,
      this.contenedor1
    );
    crearCard(
      this,
      information.jorge_morales[lan].status,
      information.jorge_morales[lan].name,
      information.jorge_morales[lan].age,
      information.jorge_morales[lan].description,
      "fotoCarnet",
      silla2,
      this.contenedor2
    );

    // // this.physics.add.collider(avatar, ladder, touchLadder, null, this);
    //     // plataformas.children.iterate((plataforma) => {
    //     //   plataforma.refreshBody();i
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

    // video.x = this.avatar.avatarPlayer.x - 50; // Ajusta el valor según tus necesidades
    // video.y = this.avatar.avatarPlayer.y + 50; // Ajusta el valor según tus necesidades
  }

  update() {
    // Ajustar el zoom de la cámara en función de la posición del personaje
    // this.cameras.main.zoom = 1 + (this.avatar.avatarPlayer.y - 300) / 600; // Ajustar el valor 300 y 600 según tus necesidades

    // Llamamos a la función "update()" del avatar
    this.avatar.update();
  }
}
