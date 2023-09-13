import { blurButton } from "./module/blurButton.js";
import { COLORS, FONT_SIZE } from "../utils/constants.js";
import { textButton } from "./module/textButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { buttonLogout } from "./components/intro/buttonLogout.js";
import { buttonsMode } from "./components/intro/buttonsMode.js";
import { news } from "./components/intro/news.js";
import { detailsGamer } from "./components/intro/detailsGamer.js";

export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }
  preload() {
    this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
  }
  async create() {
    this.mode = "exploration";
    this.mode2 = "mission";
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2, // Posición X centrada en la pantalla
      this.cameras.main.height / 2,
      this.cameras.main.width,
      this.cameras.main.height,
      0x00051a
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

    const profile = this.add.image(67, 64, "profile");
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

    // Music
    const music = this.sound.add("musica", { loop: true });
    //music.play();

    // Agrega el botón de sonido a la escena
    btnSosund.setInteractive();
    btnSosund.on("pointerdown", () => {
      if (music.mute) {
        music.mute = false;
        btnSosund.setTexture("sound");
        return;
      }

      music.mute = true;
      btnSosund.setTexture("mute");
    });
    btnSosund.setPosition(50, 960);

    const playText = textButton(
      this,
      1270,
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

    const logoutButton = buttonLogout(this);
    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    buttonEnglish(btnLanguage, this);

    const { box } = news(this);

    const {
      boxGamer,
      levelLabel,
      missionLabel,
      descriptionLabel,
      description,
      completed,
      scoreLabel,
      timeLabel,
    } = await detailsGamer(this);

    const { modeText1, modeText2, modePrimary, modeSecondary } = buttonsMode(
      this,
      box,
      boxGamer
    );

    this.updateScene = () => {
      playText.setText(traslate("start"));
      logoutButton.setText(traslate("logout"));
      name.setText(window.name);
      standard.setText(traslate("home"));
      ranked.setText(traslate("ranking"));
      avatar.setText(traslate("avatar"));
      modeText1.setText(traslate("mode"));
      modeText2.setText(traslate("mode"));
      modePrimary.setText(traslate(this?.mode));
      modeSecondary.setText(traslate(this?.mode2));

      levelLabel.setText(traslate("actualLevel"));
      missionLabel.setText(traslate("missionName"));
      descriptionLabel.setText(traslate("description"));
      description.setText(traslate("descriptionMission"));
      completed.setText(traslate("completedT"));
      scoreLabel.setText(traslate("scoreMission"));
      timeLabel.setText(traslate("time"));

      return;
    };
    this.updateScene();
  }
}
