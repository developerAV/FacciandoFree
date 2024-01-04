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
import { putUser } from "../services/user.js";

export class AvatarS extends Phaser.Scene {
  constructor() {
    super({ key: "avatarS" });
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
    const objetAvatar = {
      avatar1: {
        idAvatar: "spriteBatista",
        name: "Batista",
      },
      avatar2: {
        idAvatar: "spriteBoy",
        name: "Jhon",
      },
      avatar3: {
        idAvatar: "spriteGirl",
        name: "Adriana",
      },
    };

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

    /*     this.avatar1 = new Avatar(this, 1100, 500, 7, objetAvatar.avatar1.idAvatar);
    this.avatar2 = new Avatar(this, 800, 500, 7, objetAvatar.avatar2.idAvatar);
    this.avatar3 = new Avatar(this, 500, 500, 7, objetAvatar.avatar3.idAvatar); */

    this.avatar1 = this.physics.add
      .sprite(1100, 500, objetAvatar.avatar1.idAvatar)
      .setScale(7);
    this.avatar2 = this.physics.add
      .sprite(800, 500, objetAvatar.avatar2.idAvatar)
      .setScale(7);
    this.avatar3 = this.physics.add
      .sprite(500, 500, objetAvatar.avatar3.idAvatar)
      .setScale(7);
    this.avatar1.body.allowGravity = false;
    this.avatar2.body.allowGravity = false;
    this.avatar3.body.allowGravity = false;

    this.arrowRight = this.add.image(1400, 500, "arrowRight").setScale(0.4);
    this.arrowLeft = this.add.image(200, 500, "arrowRight").setScale(0.4);
    this.arrowLeft.flipX = true;

    this.arrowRight.setInteractive();
    this.arrowLeft.setInteractive();
    // Configuración de eventos de clic para las flechas
    this.arrowRight.on("pointerdown", () => this.changeAvatar("right"));
    this.arrowLeft.on("pointerdown", () => this.changeAvatar("left"));
    let trasitionInProgress = false;
    this.changeAvatar = async (direction) => {
      if (direction === "right") {
        if (trasitionInProgress) return;
        trasitionInProgress = true;
        await swapButtonPositionsAvatar(
          this,
          this.avatar3,
          this.avatar2,
          this.avatar1
        );
        // this.updateNameAvatar();
        this.updateNameAvatar();
      }
      if (direction === "left") {
        if (trasitionInProgress) return;
        trasitionInProgress = true;
        await swapButtonPositionsAvatar(
          this,
          this.avatar1,
          this.avatar2,
          this.avatar3
        );
        this.updateNameAvatar2();
      }

      setTimeout(async () => {
        trasitionInProgress = false;
      }, 400);
    };
    this.updateNameAvatar = () => {
      if (this.avatar1.x === 500) {
        this.textName.setText(objetAvatar.avatar1.name);
        window.idAvatar = objetAvatar.avatar1.idAvatar;
        return;
      }
      if (this.avatar2.x === 500) {
        this.textName.setText(objetAvatar.avatar2.name);
        window.idAvatar = objetAvatar.avatar2.idAvatar;
        return;
      }
      if (this.avatar3.x === 500) {
        this.textName.setText(objetAvatar.avatar3.name);
        window.idAvatar = objetAvatar.avatar3.idAvatar;
        return;
      }
    };

    this.updateNameAvatar2 = () => {
      if (this.avatar1.avatarPlayer.x === 1100) {
        this.textName.setText(objetAvatar.avatar1.name);
        window.idAvatar = objetAvatar.avatar1.idAvatar;
        return;
      }
      if (this.avatar2.avatarPlayer.x === 1100) {
        this.textName.setText(objetAvatar.avatar2.name);
        window.idAvatar = objetAvatar.avatar2.idAvatar;
        return;
      }
      if (this.avatar3.x === 1100) {
        this.textName.setText(objetAvatar.avatar3.name);
        window.idAvatar = objetAvatar.avatar3.idAvatar;
        return;
      }
    };

    this.buttonSave.setInteractive();
    this.buttonSave.on("pointerdown", async () => {
      window.avatarSprite = window.idAvatar;

      window.user = await putUser(window.user._id, {
        sprite: window.avatarSprite,
      });

      window.loadOut = false;
      // window.location.reload()
      // this.game.restart();
      window.loadAvatar = true;
      this.scene.restart();
      this.scene.stop();
      this.scene.start("intro");
    });

    this.updateScene = () => {
      logoutButton.setText(traslate("logout"));
      name.setText(window.name);
      home.setText(traslate("home"));
      ranked.setText(traslate("ranking"));
      avatar.setText(traslate("avatar"));

      return;
    };
    this.updateScene();
  }
}
