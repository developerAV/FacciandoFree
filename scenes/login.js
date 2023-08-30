import { loginGoogle } from "../Firebase/googleLogin.js";

export class Login extends Phaser.Scene {
  constructor() {
    super({ key: "login" });
  }

  preload() {

    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("google", "assets/images/login/google.png");
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





// Asegúrate de que 'this' se refiera a la instancia de Phaser adecuada

const googleButton = this.add.container(500, 500);
googleButton.setName("google");

// Configura el color de fondo del googleButton
const googleButtonFondo = this.add.graphics();
googleButtonFondo.fillStyle(0x000000, 0.7); // blanco, puedes ajustar el color según tus preferencias
googleButtonFondo.fillRoundedRect(0, 0, 250, 80, 10);

// Agregar el fondo al googleButton
googleButton.add(googleButtonFondo);

// Crea un texto para la información dentro del googleButton
const informacionTexto = this.add.text(
  0,
  30,
  ` Google `,
  {
    font: "80px Comic Sans MS, Cambria, Arial",
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

// Crea un sprite para la foto dentro del googleButton
const iconButton = this.add.sprite(260, 38, 'google'); // Ajusta el nombre de la textura según tu juego
iconButton.setScale(0.2);

// Ajusta la alineación del texto según tus necesidades
informacionTexto.setOrigin(0, 0.5);

// Agrega la foto y el texto al googleButton
googleButton.add(informacionTexto);
googleButton.add(iconButton);

// Establece la profundidad del googleButton para ponerlo encima de todo
googleButton.setDepth(1);
googleButton.setSize(330, 160);
googleButton.setInteractive();
googleButton.on("pointerdown", () => {
  loginGoogle(this); 
  console.log("login");
  
});
  }
}




