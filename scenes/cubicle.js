import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { mensaje } from "../data/dialogues.js";
import { information } from "../data/informationSir.js";
import { crearVideo } from "./module/videoInfo.js";
import { crearCard } from "./module/card.js";
let lan = "en";
let activeVideo = false;
let newX;
let newY;
let buttonCentroX;
let buttonCentroY;
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
    this.cameras.main.fadeIn(500);
    this.cameras.main.transparent = true;
    // Crear una capa UI que estará por encima de la escena
    let uiLayer = this.add.layer();
    this.add.image(846, 533, "pisoCubiculo");

    let plataformas = this.physics.add.staticGroup();

    crearPlataforma(10, 417, "paredIzqC", plataformas);
    crearPlataforma(634, 796, "paredPuertaIzq", plataformas);

    this.avatar = new Avatar(this, 680, 870, 1.5);

    crearPlataforma(800, 137, "paredNorte", plataformas);
    crearPlataforma(302, 680, "escritoriosA", plataformas);
    crearPlataforma(561, 250, "escritoriosB", plataformas);
    crearPlataforma(1190, 250, "escritorioB6", plataformas);
    crearPlataforma(1502, 492, "escritoriosC", plataformas);
    crearPlataforma(1005, 611, "escritoriosD", plataformas);
    const paredsur = this.add.image(322, 720, "paredSurEste");
    crearPlataforma(690, 947, "paredPuertaSur", plataformas);
    crearPlataforma(761, 796, "paredPuertaDer", plataformas);
    const paredparedPuertaNor = this.add.image(698, 641, "paredPuertaNor");
    crearPlataforma(871, 829, "paredEscalera", plataformas);
    const paredSurDer = this.add.image(1298, 735, "paredSurDer");
    crearPlataforma(1589, 423, "paredDer", plataformas);
    crearPlataforma(877, 860, "escalera", plataformas);
    crearPlataforma(1050, 240, "impresora", plataformas);
    crearPlataforma(63, 192, "servidor", plataformas);
    crearPlataforma(156, 146, "anaquel", plataformas);
    crearPlataforma(480, 146, "anaquel", plataformas);
    crearPlataforma(680, 146, "anaquel", plataformas);
    crearPlataforma(830, 146, "anaquel", plataformas);
    crearPlataforma(930, 146, "anaquel", plataformas);
    crearPlataforma(1230, 146, "anaquel", plataformas);
    crearPlataforma(1200, 226, "sillaB6", plataformas);

    if (activeVideo) {
      crearVideo(mensaje.txtCubicle[lan], "avatarVideo", this, true);
    }
    this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    let teclado = this.input.keyboard;

    // Configurar una acción para la tecla "i"
    let miAccion = teclado.addKey(Phaser.Input.Keyboard.KeyCodes.I);

    // Configurar qué hacer cuando se presiona la tecla "i"
    miAccion.on(
      "down",
      function (event) {
        //resetear camara
        this.cameras.main.stopFollow();
        this.cameras.main.setZoom(1);

        // this.cameras.main.zoom = 1;
        this.cameras.main.centerOn(0, 0);
        this.cameras.main.setScroll(0, 0);

        // Puedes ejecutar cualquier código que quieras cuando se presione la tecla "i"
        crearVideo(mensaje.txtCubicle[lan], "avatarVideo", this, true);
      }.bind(this)
    );

    let plataforma2 = this.physics.add.staticGroup();

    let silla = crearPlataforma(330, 330, "sillaB6", plataforma2);
    this.contenedor1 = this.add.container(330, 160);
    let silla2 = crearPlataforma(530, 330, "sillaB6", plataforma2);
    this.contenedor2 = this.add.container(530, 160);

    crearCard(
      this,
      information.rober_moreira[lan],
      "fotoCarnet",
      silla,
      this.contenedor1
    );

    crearCard(
      this,
      information.jorge_morales[lan],
      "fotoCarnet",
      silla2,
      this.contenedor2
    );

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
 buttonCentroX = this.avatar.avatarPlayer.x + 10;
 buttonCentroY = this.avatar.avatarPlayer.y + 10;
    // Crea un círculo que servirá como botón


let isDragging = false;
let pointerOffsetX = 0;
let pointerOffsetY = 0;
const maxRange = 14; // Rango máximo de arrastre

// Crear el grupo de contenedores para la interfaz de usuario (UI)
this.buttonContainer = this.add.container(0, 0);

// Crear los botones y agregarlos al grupo de contenedores
this.buttonPrimero = this.add.circle(buttonCentroX, buttonCentroY, 50, 0xffffff, 0.5);
this.buttonCentro = this.add.circle(buttonCentroX, buttonCentroY, 30, 0x808080, 0.5);
this.buttonContainer.add(this.buttonPrimero);
this.buttonContainer.add(this.buttonCentro);

 

const cursors = this.input.keyboard.createCursorKeys();

this.input.keyboard.on('keydown', (event) => {
    if (event.key === "ArrowRight") {
      this.buttonCentro.x = buttonCentroX + maxRange; // Mueve el botón hacia la derecha
      this.buttonCentro.y = buttonCentroY; // Mueve el botón hacia la derecha
    } else if (event.key === "ArrowLeft") {
      this.buttonCentro.x = buttonCentroX - maxRange; // Mueve el botón hacia la izquierda
      this.buttonCentro.y = buttonCentroY; // Mueve el botón hacia la izquierda
    } else if (event.key === "ArrowUp") {
      this.buttonCentro.y = buttonCentroY - maxRange; //4 Mueve el botón hacia arriba
      this.buttonCentro.x = buttonCentroX; // Mueve el botón hacia arriba
    } else if (event.key === "ArrowDown") {
      this.buttonCentro.y = buttonCentroY + maxRange; // Mueve el botón hacia abajo
      this.buttonCentro.x = buttonCentroX; // Mueve el botón hacia abajo
    }
});
this.input.keyboard.on('keyup', (event) => {
  if (
      event.key === "ArrowRight" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
  ) {
      // Detener el movimiento estableciendo la velocidad en 0 o realizando otras acciones según tus necesidades.
      // Por ejemplo, para detener el movimiento, puedes establecer la velocidad en 0:
      this.buttonCentro.y = buttonCentroY; // Mueve el botón hacia abajo
      this.buttonCentro.x = buttonCentroX; // Mueve el botón hacia abajo
  }
});


this.buttonCentro.setInteractive();

// Configurar eventos de inicio de arrastre (ratón y tacto)
this.buttonCentro.on('pointerdown', (pointer) => {
    isDragging = true;

    // Calcular el desplazamiento entre el botón y el puntero
    pointerOffsetX = this.buttonCentro.x - pointer.x;
    pointerOffsetY = this.buttonCentro.y - pointer.y;
    
});

// Configurar eventos de movimiento durante el arrastre (ratón y tacto)
this.input.on('pointermove', (pointer) => {
    if (isDragging) {
        // Calcular la nueva posición del botón
        newX = pointer.x + pointerOffsetX;
       newY = pointer.y + pointerOffsetY;

        // Limitar el rango máximo de arrastre
        newX = Phaser.Math.Clamp(newX, buttonCentroX - maxRange, buttonCentroX + maxRange);
        newY = Phaser.Math.Clamp(newY, buttonCentroY - maxRange, buttonCentroY + maxRange);

         if (newX > this.buttonCentro.x) {
      // Hacer algo cuando el botón se mueva hacia la derecha
      console.log('Botón movido hacia la derecha');
      // Agrega aquí la lógica que deseas realizar cuando el botón se mueva hacia la derecha
      this.avatar.moveRight(this.avatar);
    }else if (newX < this.buttonCentro.x) {
      // Hacer algo cuando el botón se mueva hacia la izquierda
      console.log('Botón movido hacia la izquierda');
      // Agrega aquí la lógica que deseas realizar cuando el botón se mueva hacia la izquierda
      this.avatar.moveLeft(this.avatar);
    }else if (newY < this.buttonCentro.y) {
      // Hacer algo cuando el botón se mueva hacia arriba
      console.log('Botón movido hacia arriba');
      // Agrega aquí la lógica que deseas realizar cuando el botón se mueva hacia arriba
      this.avatar.moveUp(this.avatar);
    }else if (newY > this.buttonCentro.y) {
      // Hacer algo cuando el botón se mueva hacia abajo
      console.log('Botón movido hacia abajo');
      // Agrega aquí la lógica que deseas realizar cuando el botón se mueva hacia abajo
      this.avatar.moveDown(this.avatar);
    }else{
     // this.avatar.stopMovement(this.avatar);
    }

        // Mover el botón al nuevo lugar
        this.buttonCentro.x = newX;
        this.buttonCentro.y = newY;
    }
});

// Configurar evento de finalización de arrastre (ratón y tacto)
this.input.on('pointerup', () => {
    isDragging = false;
    // Restablecer la posición del botón al centro
    this.buttonCentro.x = buttonCentroX;
    this.buttonCentro.y = buttonCentroY;
});
  }

  update() {
    this.avatar.update();
 
  
  }
}
