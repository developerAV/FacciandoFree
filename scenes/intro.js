import { logout } from "../Firebase/logout.js";
import { blurButton } from "./module/blurButton.js";
export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }

  preload() {
    
    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("play", "assets/images/intro/Play.png");
    this.load.image("score", "assets/images/intro/score.png");
    this.load.image("avatar", "assets/images/intro/avatar.png");
    this.load.image("fullscreen", "assets/images/intro/fullscreen.png");
    this.load.image("mute", "assets/images/intro/mute.png");
    this.load.image("sound", "assets/images/intro/sound.png");
    this.load.image("logout", "assets/images/intro/logout.png");
    this.load.image("facciando", "assets/images/intro/facciando.png");
 
  
   
  }

  create() {
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "background").setScale(1.6);

    const tween = this.tweens.add({
      targets: background,
      x: 100,
      ease: "Power",
      duration: 100000,
      yoyo: true,
      repeat: -1,
    });

    //letras facciando
    this.add.image(800, 100, "facciando").setScale(1.5);

    // add music
    const play = this.add
      .image(800, 340, "play")
      .setScale(0.75)
      .setName("play");

    const score = this.add
      .image(800, 510, "score")
      .setScale(0.75)
      .setName("score");

    const avatar = this.add
      .image(800, 680, "avatar")
      .setScale(0.75)
      .setName("avatar");

    const btnSosund = this.add
      .image(0, 0, "sound")
      .setScale(0.65)
      .setName("sound");

    const fullscreenButton = this.add
      .image(900, 850, "fullscreen")
      .setScale(0.65)
      .setInteractive();

    //Full Screen
    fullscreenButton.on(
      "pointerup",
      () => {
        this.scale.toggleFullscreen(); // Cambiar entre pantalla completa y normal
      },
      this
    );

    //construir boton con enfoque y funciones (nameBoton, Escena)
    blurButton(play, this);
    blurButton(score, this);
    blurButton(avatar, this);
    // blurButton(btnSosund);
    // desenfoque(background);
    // Music

    const music = this.sound.add("musica", { loop: true });

    //music.play();

    // Agrega el botón de sonido a la escena
    btnSosund.setInteractive();
    btnSosund.on("pointerdown", () => {
      // Si la música está en mute, la activa y cambia el botón a sound on
      if (music.mute) {
        music.mute = false;
        btnSosund.setTexture("sound");
        return;
      }

      // Si la música no está en mute, la pone en mute y cambia el botón a sound off
      music.mute = true;
      btnSosund.setTexture("mute");
    });

    // Coloca el botón de sonido en la esquina superior derecha de la pantalla
    //btnSound.setOrigin(11, -9);
    btnSosund.setPosition(700, 850);

    // create();
    // Agregar el archivo CSS a la página
    // const stylesheet = document.createElement("link");
    // stylesheet.rel = "stylesheet";
    // stylesheet.href = "styles/index.css";
    // document.head.appendChild(stylesheet);





// Asegúrate de que 'this' se refiera a la instancia de Phaser adecuada

const logoutButton = this.add.container(1350, 50);
logoutButton.setName("logout");

// Configura el color de fondo del logoutButton
const logoutButtonFondo = this.add.graphics();
logoutButtonFondo.fillStyle(0x000000, 0.7); // blanco, puedes ajustar el color según tus preferencias
logoutButtonFondo.fillRoundedRect(0, 0, 130, 60, 10);

// Agregar el fondo al logoutButton
logoutButton.add(logoutButtonFondo);

// Crea un texto para la información dentro del logoutButton
const informacionTexto = this.add.text(
  0,
  30,
  ` Logout `,
  {
    font: "30px Comic Sans MS, Cambria, Arial",
    fill: "#ffffff",
    wordWrap: {
      width: 160, // Ajusta este valor para definir el límite de ancho
    },
    padding: {
      x: 10,
      y: 10,
    },
  }
);

// Crea un sprite para la foto dentro del logoutButton
const iconButton = this.add.sprite(130, 38, 'logout'); // Ajusta el nombre de la textura según tu juego
iconButton.setScale(0.2);

// Ajusta la alineación del texto según tus necesidades
informacionTexto.setOrigin(0, 0.5);

// Agrega la foto y el texto al logoutButton
logoutButton.add(informacionTexto);
logoutButton.add(iconButton);

// Establece la profundidad del logoutButton para ponerlo encima de todo
logoutButton.setDepth(1);
logoutButton.setSize(330, 160);
logoutButton.setInteractive();


logoutButton.on("pointerdown", () => {
  logout(this); 
  console.log("login");
  
});


  }
}


