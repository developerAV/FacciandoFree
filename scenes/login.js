import { blurButton } from "./module/blurButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
export class Login extends Phaser.Scene {
  constructor() {
    super({ key: "login" });
  }

  preload() {
    this.load.plugin(
      "rexhiddeninputtextplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexhiddeninputtextplugin.min.js",
      true
    );
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("googleES", "assets/images/login/google2.png");
    this.load.image("googleEN", "assets/images/login/google3.png");
    this.load.image("facciando2", "assets/images/intro/Facciando2.png");
  }

  create() {
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2, // Posición X centrada en la pantalla
      this.cameras.main.height / 2, // Posición Y centrada en la pantalla
      this.cameras.main.width, // Ancho igual al ancho de la pantalla
      this.cameras.main.height, // Altura igual a la altura de la pantalla
      0x00051a // Color en formato hexadecimal (en este caso, negro)
    );
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "background").setScale(1.6);
    background.alpha = 0.1;

    const tween = this.tweens.add({
      targets: background,
      x: 100,
      ease: "Power",
      duration: 100000,
      yoyo: true,
      repeat: -1,
    });

    //letras facciando2
    this.add.image(800, 100, "facciando2").setScale(1);

    const googleButtonES = this.add.image(800, 500, "googleES").setScale(0.13);

    const googleButtonEN = this.add.image(800, 500, "googleEN").setScale(0.1);

    googleButtonEN.setName("googleEN");
    googleButtonES.setName("googleES");

    this.languages = (lan) => {
      if (lan === "es") {
        googleButtonEN.visible = false;
        googleButtonES.visible = true;
        return;
      }
      googleButtonEN.visible = true;
      googleButtonES.visible = false;
    };

    blurButton(googleButtonEN, this);
    blurButton(googleButtonES, this);

    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    btnLanguage.setInteractive();

    buttonEnglish(btnLanguage, this);
    this.languages(window.lan);

    this.updateScene = () => {
      this.languages(window.lan);
    };
    var textObject = this.add.text(300, 200, "", {
      fixedWidth: 300,
      fixedHeight: 200,
      backgroundColor: "#222222",
    });

    this.plugins.get("rexhiddeninputtextplugin").add(textObject, {
      enterClose: false,

      onOpen(textObject) {
        textObject.setBackgroundColor("#555555");
      },

      onClose(textObject) {
        textObject.setBackgroundColor("#222222");
      },
    });

    this.add.text(0, 580, "Click text to edit it");
  }
  update() {}
}

const changeText = (textEntry, scene) => {
  scene.input.keyboard.on("keydown", (event) => {
    if (event.keyCode === 8 && textEntry.text.length > 0) {
      textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
    } else if (
      event.keyCode === 32 ||
      (event.keyCode >= 48 && event.keyCode < 90)
    ) {
      textEntry.text += event.key;
    }
    scene.dialogs(textEntry.text);
  });
};
