// import { blurButton } from "./module/blurButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { loginGoogle } from "../Firebase/googleLogin.js";
import { blurButton } from "./module/blurButton.js";
import { putUser } from "../services/user.js";
export class Question extends Phaser.Scene {
  constructor() {
    super({ key: "question" });
  }
  preload() {
    this.load.plugin(
      "rexcanvasinputplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcanvasinputplugin.min.js",
      true
    );

    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("googleES", "assets/images/login/google2.png");
    this.load.image("googleEN", "assets/images/login/google3.png");
    this.load.image("facciando2", "assets/images/intro/Facciando2.png");
    this.load.image("confirm", "assets/images/login/confirm.png");
    this.load.image("save", "assets/images/login/save.png");
  }

  create() {
    window.loadOut = false;
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

    this.languages = (lan) => {
      if (lan === "es") {
        return;
      }
    };

    // blurButton(googleButton, this);
    //   googleButton.setInteractive();
    //   googleButton.on("pointerdown", function () {
    //     window.hook = false;
    // loginGoogle(this);

    //   });

    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    btnLanguage.setInteractive();

    buttonEnglish(btnLanguage, this);
    this.languages(window.lan);

    this.updateScene = () => {
      this.languages(window.lan);
    };

    const boxEntry = this.add.container(800, 500);
    const confirm = this.add.image(0, 0, "confirm").setScale(1);
    const tittle = this.add.text(-100, -280, traslate("editProfile"), {
      font: "50px Arial",
      fill: "#fff",
    });
    const nameLabel = this.add.text(-350, -210, traslate("name"), {
      font: "30px Arial",
      fill: "#fff",
    });
    const schoolLabel = this.add.text(-350, -10, traslate("school"), {
      font: "30px Arial",
      fill: "#fff",
    });
    this.txt0 = CreateCanvasInput(this, window.name, 730).setPosition(0, -110);
    this.txt1 = CreateCanvasInput(this, "", 730).setPosition(0, 38);
    //holder

    const buttonSave = this.add.image(0, 200, "save").setScale(1);
    this.textSave = this.add.text(-50, 160, traslate("save"), {
      font: "50px Arial",
      fill: "#fff",
    });

    this.txt0.setInteractive();
    this.txt1.setInteractive();
    this.txt0.on("textchange", function (inputText) {
      if (inputText !== "") {
        nameLabel.setPosition(-350, -210);
      } else {
        nameLabel.setPosition(-350, -160);
      }
    });
    //evento al escribir en el input
    this.txt1.on("textchange", function (inputText) {
      if (inputText !== "") {
        schoolLabel.setPosition(-350, -50);
      } else {
        schoolLabel.setPosition(-350, -10);
      }
    });

    boxEntry.add(confirm);
    boxEntry.add(this.txt0);
    boxEntry.add(this.txt1);
    boxEntry.add(buttonSave);
    boxEntry.add(this.textSave);
    boxEntry.add(tittle);
    boxEntry.add(nameLabel);
    boxEntry.add(schoolLabel);

    buttonSave.setInteractive();
    buttonSave.on("pointerdown", () => {
      if (this.txt0.text === "" || this.txt1.text === "") {
        alert("no se puede guardar");
        return;
      }

      window.user.name = this.txt0.text;
      window.user.school = this.txt1.text;
      const data = {
        name: window.user.name,
        school: window.user.school,
      };
      putUser(window.user._id, data);
      this.scene.start("intro");
    });

    this.updateScene = () => {
      this.languages(window.lan);
      nameLabel.setText(traslate("name"));
      schoolLabel.setText(traslate("school"));
      this.textSave.setText(traslate("save"));
      tittle.setText(traslate("editProfile"));
    };
  }
  update() {
    //space
  }
}

let CreateCanvasInput = function (scene, text, width) {
  if (width === undefined) {
    width = 600;
  }
  const entry = scene.add.rexCanvasInput({
    width: width,

    background: {
      // Solution A
      "focus.stroke": "white",
    },
    // Solution B
    // focusStyle: {
    //     stroke: 'red',
    // },

    style: {
      fontSize: 100,
      backgroundBottomY: 5,
      backgroundHeight: 24,

      // Solution A
      "cursor.color": "black",
      "cursor.backgroundColor": "white",
    },
    // Solution B
    // cursorStyle: {
    //     color: 'black',
    //     backgroundColor: 'white'
    // },

    //
    childrenInteractive: true,
    // inputType: 'text',
    text: text,
    cursorStyle: "vertical", // 'vertical'|'horizontal'|'none'|undefined
    selectAll: true,
  });

  return entry;
};
