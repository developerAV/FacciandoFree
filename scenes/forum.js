import {
  COLORS,
  COLORS_HEX,
  FONT,
  FONT2,
  FONT_SIZE,
} from "../utils/constants.js";
import { textButton } from "./module/textButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { Avatar } from "./player.js";
import { swapButtonPositionsAvatar } from "./module/swapButtonPositions.js";
let currentIndex = 0;
const arrayAvatar = [
  "spriteBatista",
  "spriteBoy",
  "spriteGirl",
  "spriteGirl2",
  "spriteGirl3",
];
import { buttonLogout } from "./components/intro/buttonLogout/buttonLogout.js";
import { putUser } from "../services/user.service.js";

export class Forum extends Phaser.Scene {
  constructor() {
    super({ key: "forum" });
  }
  preload() {
    if (this.textures.exists("profile")) this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
  }
  create() {
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2, // Posición X centrada en la pantalla
      this.cameras.main.height / 2,
      this.cameras.main.width,
      this.cameras.main.height,
      0x00051a
    );
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "facciando").setScale(1.6);
    background.alpha = 0.1;

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

    const name = textButton(
      this,
      120,
      30,
      window.name,
      COLORS.grayDark,
      FONT_SIZE.small
    );
    const home = textButton(
      this,
      700,
      30,
      "home",
      COLORS.grayDark,
      FONT_SIZE.small
    );
    const ranked = textButton(
      this,
      870,
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
      FONT_SIZE.small,
      0.9
    );

    home.setInteractive();
    home.on("pointerdown", () => {
      this.scene.restart();
      this.scene.stop();
      this.scene.start("intro");
    });

    ranked.setInteractive();
    ranked.on("pointerdown", () => {
      this.scene.start("ranking");
    });

    const logoutButton = buttonLogout(this);
    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    buttonEnglish(btnLanguage, this);
 

    let avatarContainer = this.add.container(0, 0);
    this.buttonName = this.add.image(800, 700, "play").setScale(0.5);
    this.textName = this.add.text(745, 680, objetAvatar.avatar2.name, {
      fontFamily: FONT,
      fontSize: FONT_SIZE.small,
      color: COLORS_HEX.white,
    });

    this.buttonSave = this.add.image(1300, 900, "play").setScale(1);
    this.textSave = this.add.text(1245, 880, traslate("save"), {
      fontFamily: FONT,
      fontSize: FONT_SIZE.small,
      color: COLORS_HEX.white,
    });
  }
}
