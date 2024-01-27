// import { blurButton } from "./module/blurButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { loginGoogle } from "../Firebase/googleLogin.js";
import { blurButton } from "./module/blurButton.js";
import { COLORS, COLORS_HEX, FONT } from "./../utils/constants.js";
export class Login extends Phaser.Scene {
  constructor() {
    super({ key: "login" });
  }
  preload() {
    this.load.plugin(
      "rexcheckboxplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcheckboxplugin.min.js",
      true
    );
    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("googleES", "assets/images/login/google2.png");
    this.load.image("googleEN", "assets/images/login/google3.png");
    this.load.image("facciando2", "assets/images/intro/Facciando2.png");
    this.load.image("confirm", "assets/images/login/confirm.png");
    this.load.image("save", "assets/images/login/save.png");
  }

  async create() {
    window.loadOut = false;
    window.stateLogin = true;
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2, // Posición X centrada en la pantalla
      this.cameras.main.height / 2, // Posición Y centrada en la pantalla
      this.cameras.main.width, // Ancho igual al ancho de la pantalla
      this.cameras.main.height, // Altura igual a la altura de la pantalla
      0x00051a // Color en formato hexadecimal (en este caso, negro)
    );
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "background").setScale(1.6);
    background.alpha = 0.3;

    const tween = this.tweens.add({
      targets: background,
      x: 100,
      ease: "Power",
      duration: 100000,
      yoyo: true,
      repeat: -1,
    });

    //letras facciando2
    this.add.image(800, 375, "facciando2").setScale(1);
   //terminos y condiciones y tenga enlace
   const terms = this.add.text(787, 590, traslate("term") , {
    fontFamily: FONT,
    fontSize: "20px",
    color: COLORS_HEX.blue,
    
  });
  terms.setInteractive({ useHandCursor: true });
  terms.on("pointerdown", function () {
    window.open(
      "https://www.facciando.vercel.app/legal/term_and_conditions.html"
      );
    });
    const term2 = this.add.text(680, 590,traslate("term2"), {
      fontFamily: FONT,
      fontSize: "20px",
      color: "#fff",
      
      
    });
  
    const googleButton = this.add.image(800, 500, "googleEN");

    googleButton.setName("google");

    //   googleButton.setInteractive();
    //   googleButton.on("pointerdown", function () {
      //     window.hook = false;
      // loginGoogle(this);
      
      //   });
      
      const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
      btnLanguage.setInteractive();
      
      this.languages = (lan) => {
        if (lan === "es") {
          googleButton.setTexture("googleES").setScale(0.13);
          terms.setText("Términos y condiciones");
          term2.setText("Acepto los");
          return;
        }
        terms.setText("Terms and conditions");
        term2.setText("I accept the");
        googleButton.setTexture("googleEN").setScale(0.1);
      };
      buttonEnglish(btnLanguage, this);
      this.languages(window.lan);
      
      let checkbox = this.add.rexCheckbox(650, 600, 30, 30, {
        color: COLORS.blue,
        // circleBox: true,
        
        checked: true,
        // animationDuration: 2000
      });
      checkbox.setInteractive();
      checkbox.on("pointerdown", function () {
        console.log("click");
        if (checkbox.checked) {
          console.log("checked");
          //google button inactivo
          googleButton.disableInteractive();
          
        }else{
          console.log("no checked");
          //google button activo
          googleButton.setInteractive();
        }
      });
      
   
        
        
    
        blurButton(googleButton, this);
        this.updateScene = () => {
          this.languages(window.lan);
          
        };
  }
}
