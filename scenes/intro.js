import { logout } from "../Firebase/logout.js";
import { blurButton } from "./module/blurButton.js";
import { COLORS, FONT_SIZE } from "../utils/constants.js";
import { textButton, news } from "./module/textButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { swapButtonPositions } from "./module/swapButtonPositions.js";
import { traslate } from "../data/dialogues.js";

export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }

  preload() {
    this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
    // this.load.image("profile", "assets/images/intro/profile.jpg");
    this.load.image("backgroundIntro", "assets/images/intro/intro.png");
    this.load.image("backgroundIntro2", "assets/images/intro/intro2.png");
    this.load.image("play", "assets/images/intro/start.png");
    this.load.image("mode", "assets/images/intro/mode.png");
    this.load.image("score", "assets/images/intro/score.png");
    //this.load.image("avatar", "assets/images/intro/avatar.png");
    this.load.image("fullscreen", "assets/images/intro/fullscreen.png");
    this.load.image("mute", "assets/images/intro/mute.png");
    this.load.image("sound", "assets/images/intro/sound.png");
    this.load.image("logout", "assets/images/intro/logout.png");
    this.load.image("facciando", "assets/images/intro/facci.png");

    this.load.image("avatar", "assets/images/player/avatar.png");
    this.load.image("avatar2", "assets/images/player/avatar2.png");
  }

  create() {
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2, // Posición X centrada en la pantalla
      this.cameras.main.height / 2, // Posición Y centrada en la pantalla
      this.cameras.main.width, // Ancho igual al ancho de la pantalla
      this.cameras.main.height, // Altura igual a la altura| de la pantalla
      0x00051a // Color en formato hexadecimal (en este caso, negro)
    );
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "facciando").setScale(1.6);
    background.alpha = 0.4;

    const tween = this.tweens.add({
      targets: background,
      x: 100,
      ease: "Power",
      duration: 100000,
      yoyo: true,
      repeat: -1,
    });
    const bg = this.add.image(800, 65, "backgroundIntro2");

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
    const mode = this.add
      .image(1412, 550, "mode")
      .setScale(0.75)
      .setName("mode")
      .setScale(1);
    const mode2 = this.add
      .image(1460, 690, "mode")
      .setScale(0.75)
      .setName("modeMission")
      .setScale(0.7);

    const btnSosund = this.add
      .image(0, 0, "sound")
      .setScale(0.4)
      .setName("sound");

    const fullscreenButton = this.add
      .image(130, 960, "fullscreen")
      .setScale(0.4)
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

    let { topicBox, messageBox, box } = news(
      this,
      50,
      200,
      traslate("news"),
      traslate("newContent"),
      "avatar",
      "avatar2"
    );

    const modeText1 = textButton(
      this,
      1435,
      569,
      "mode",
      COLORS.black,
      FONT_SIZE.small
    );
    const modeText2 = textButton(
      this,
      1470,
      695,
      "mode",
      COLORS.black,
      FONT_SIZE.smaller
    );
    const modeExploration = textButton(
      this,
      1215,
      520,
      "exploration",
      COLORS.black,
      FONT_SIZE.mediumSmall
    );
    const modeMission = textButton(
      this,
      1310,
      660,
      "mission",
      COLORS.black,
      FONT_SIZE.small
    );
    const logoutButton = textButton(
      this,
      1282,
      30,
      "logout",
      COLORS.black,
      FONT_SIZE.small,
      0.9,
      true
    );
    const playText = textButton(
      this,
      1280,
      860,
      "start",
      COLORS.grayDark,
      FONT_SIZE.medium
    );
    const name = textButton(
      this,
      120,
      30,
      window.name,
      COLORS.grayDark,
      FONT_SIZE.small
    );
    const standard = textButton(
      this,
      700,
      30,
      "home",
      COLORS.grayDark,
      FONT_SIZE.small,
      0.9
    );
    const ranked = textButton(
      this,
      900,
      30,
      "ranking",
      COLORS.grayDark,
      FONT_SIZE.small
    );
    const avatar = textButton(
      this,
      1100,
      30,
      "avatar",
      COLORS.grayDark,
      FONT_SIZE.small
    );

    avatar.setDepth(1);

    avatar.setInteractive();

    avatar.on("pointerdown", () => {
      console.log("click");
    });

    // Establece la profundidad del logoutButton para ponerlo encima de todo
    logoutButton.setDepth(1);

    logoutButton.setInteractive();
    logoutButton.on("pointerdown", () => {
      const confirmacion = confirm(traslate("confirmLogout"));
      if (confirmacion) {
        logout(this);
      }
    });

    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    btnLanguage.setInteractive();

    buttonEnglish(btnLanguage, this);
    this.updateScene = () => {
      playText.setText(traslate("start"));
      logoutButton.setText(traslate("logout"));
      name.setText(window.name);
      standard.setText(traslate("home"));
      ranked.setText(traslate("ranking"));
      avatar.setText(traslate("avatar"));
      modeText1.setText(traslate("mode"));
      modeText2.setText(traslate("mode"));
      modeExploration.setText(traslate("exploration"));
      modeMission.setText(traslate("mission"));
      topicBox.setText(traslate("news"));
      messageBox.setText(traslate("newContent"));
      return;
    };
    this.updateScene();

    this.isSwapped = false;
    let isTransitionInProgress = false;
    mode.setInteractive();
    mode.on("pointerdown", () => {
      this.mode = "exploration";
      box.setVisible(true);

      if (isTransitionInProgress) {
        return;
      }
      if (mode.x === 1460 && mode.y === 690) {
        isTransitionInProgress = true; // Marca que la transición está en curso

        swapButtonPositions(this, mode, mode2);
        mode.setScale(1);
        mode2.setScale(0.7);
        modeExploration.setText(traslate("exploration"));
        modeMission.setText(traslate("mission"));
      }
      setTimeout(() => {
        isTransitionInProgress = false;
      }, 300);
    });
    mode2.setInteractive();

    mode2.on("pointerdown", () => {
      this.mode = "mission";
      box.setVisible(false);
      if (isTransitionInProgress) {
        return;
      }
      if (!this.isSwapped) {
        isTransitionInProgress = true; // Marca que la transición está en curso

        modeExploration.setText(traslate("mission"));
        modeMission.setText(traslate("exploration"));
        // Si los botones no han sido intercambiados, entonces intercambia posiciones
        swapButtonPositions(this, mode, mode2);
        mode.setScale(0.7);
        mode2.setScale(1);
      }
      setTimeout(() => {
        isTransitionInProgress = false;
      }, 300);
    });
  }
}
