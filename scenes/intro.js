import { logout } from "../Firebase/logout.js";
import { blurButton } from "./module/blurButton.js";
export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }

  preload() {
    this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
    // this.load.image("profile", "assets/images/intro/profile.jpg");
    this.load.image("backgroundIntro", "assets/images/intro/intro.png");
    this.load.image("play", "assets/images/intro/start.png");
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
    const backgroundIntro = this.add
      .sprite(800, 500, "backgroundIntro")
      .setScale(1);

    // const tween = this.tweens.add({
    //   targets: backgroundIntro,
    //   x: 100,
    //   ease: "Power",
    //   duration: 100000,
    //   yoyo: true,
    //   repeat: -1,
    // });

    //letras facciando
    // this.add.image(800, 100, "facciando").setScale(1.5);
    const profile = this.add.image(67, 64, "profile");
    // Crea una máscara circular del mismo tamaño que la imagen
    // Crea una máscara circular
    const radioCirculo =
      Math.min(profile.displayWidth, profile.displayHeight) / 2;
    const mascara = this.make.graphics();
    mascara.fillStyle(0xffffff); // Color blanco
    mascara.fillCircle(profile.x, profile.y, radioCirculo);

    // Aplica la máscara a la imagen
    profile.setMask(mascara.createGeometryMask());

    // add music
    const play = this.add
      .image(1412, 900, "play")
      .setScale(0.75)
      .setName("play")
      .setScale(1);

    
    const btnSosund = this.add
      .image(0, 0, "sound")
      .setScale(0.40)
      .setName("sound");

    const fullscreenButton = this.add
      .image(130, 960, "fullscreen")
      .setScale(0.40)
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
  
    // blurButton(btnSosund);
    // desenfoque(backgroundIntro);
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
    btnSosund.setPosition(50, 960);

    // create();
    // Agregar el archivo CSS a la página
    // const stylesheet = document.createElement("link");
    // stylesheet.rel = "stylesheet";
    // stylesheet.href = "styles/index.css";
    // document.head.appendChild(stylesheet);

    // Asegúrate de que 'this' se refiera a la instancia de Phaser adecuada

    // const logoutButton = this.add.container(1350, 50);
    // logoutButton.setName("logout");


  
    const logoutButton = textButton(this, 1282, 30, "logout","logout", 0x000000, true, 0.9, "30px Comic Sans MS, Cambria, Arial");
    const playText = textButton(this, 1320, 860, "start","start", 0x262c2e, false,0, "64px Comic Sans MS, Cambria, Arial");
    const name = textButton(this, 120, 30, "name", window.name, 0x262c2e, false,0, "30px Comic Sans MS, Cambria, Arial");
    const standard = textButton(this, 700, 30, "Standard","Standard", 0x262c2e, false,0.9, "30px Comic Sans MS, Cambria, Arial");
    const ranked = textButton(this, 900, 30, "Ranked","Ranked", 0x262c2e, false,0, "30px Comic Sans MS, Cambria, Arial");
    const avatar = textButton(this, 1100, 30, "Avatarx","Avatar", 0x262c2e, false,0, "30px Comic Sans MS, Cambria, Arial");
    avatar.setDepth(1);
  

    avatar.setInteractive();

    avatar.on("pointerdown", () => {
      console.log("click");
    });

    // Establece la profundidad del logoutButton para ponerlo encima de todo
    logoutButton.setDepth(1);
    
    logoutButton.setInteractive();

    logoutButton.on("pointerdown", () => {

      const confirmacion = confirm("¿Estás seguro de que deseas cerrar la sesión?"); // Utiliza el método confirm del navegador para mostrar un cuadro de diálogo de confirmación
    
      if (confirmacion) {
          // Si el usuario confirma, realiza la acción de cierre de sesión
       logout(this);
      } else {
          // Si el usuario cancela, no hagas nada o puedes mostrar un mensaje de cancelación
          console.log("Se canceló el cierre de sesión.");
      }
  
    
    });
  }
}

const textButton = (scene, width, height, nameButton, nameButtonLanguage,  colorBg, photo, bgClear, fontText) => {
  const button = scene.add.container(width, height);
  button.setName(nameButton);

  // Configura el color de fondo del button
  const buttonFondo = scene.add.graphics();
  buttonFondo.fillStyle(colorBg, bgClear); // blanco, puedes ajustar el color según tus preferencias
  buttonFondo.fillRoundedRect(0, 0, 180, 60, 30);

  // Agregar el fondo al button
  button.add(buttonFondo);

  // Crea un texto para la información dentro del button
  const informacionTexto = scene.add.text(20, 30, nameButtonLanguage, {
    font: fontText,
    fill: "#ffffff",
    wordWrap: {
      width: 200, // Ajusta este valor para definir el límite de ancho
    },
    padding: {
      x: 10,
      y: 10,
    },
  });

  if (photo) {
    const iconButton = scene.add.sprite(140, 36, nameButton); // Ajusta el nombre de la textura según tu juego
    iconButton.setScale(0.2);
    button.add(iconButton);
  }

  // Crea un sprite para la foto dentro del button

  // Ajusta la alineación del texto según tus necesidades
  informacionTexto.setOrigin(0, 0.5);

  // Agrega la foto y el texto al button
  button.add(informacionTexto);

  return informacionTexto;
};


