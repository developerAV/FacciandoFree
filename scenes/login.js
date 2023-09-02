import { blurButton } from "./module/blurButton.js";
export class Login extends Phaser.Scene {
  constructor() {
    super({ key: "login" });
  }

  preload() {

    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("googleES", "assets/images/login/google2.png");
    this.load.image("googleEN", "assets/images/login/google3.png");
    this.load.image("facciando2", "assets/images/intro/Facciando2.png");
    this.load.image("language", "assets/images/language/language.png");
    this.load.image("btnEnglish", "assets/images/language/btn-english.png");
    this.load.image("btnSpanish", "assets/images/language/btn-spanish.png");
  }

  create() {
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2,  // Posición X centrada en la pantalla
      this.cameras.main.height / 2, // Posición Y centrada en la pantalla
      this.cameras.main.width,     // Ancho igual al ancho de la pantalla
      this.cameras.main.height,    // Altura igual a la altura de la pantalla
      0x00051A                    // Color en formato hexadecimal (en este caso, negro)
    );
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "background").setScale(1.6);
    background.alpha=0.1;
    
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

    const languages = (lan) => {
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

    const btnEnglish = this.add.image(1372, 100, "btnEnglish").setScale(0.05);
    const btnSpanish = this.add.image(1400, 155, "btnSpanish").setScale(0.05);
    const btnLanguage = this.add.image(1500, 100, "language").setScale(0.08);
    btnLanguage.setInteractive();
    btnEnglish.visible = false;
    btnSpanish.visible = false;
    btnLanguage.on("pointerdown", () => {
      if (btnEnglish.visible || btnSpanish.visible) {
        btnEnglish.visible = false;
        btnSpanish.visible = false;
        return;
      }
      btnEnglish.visible = true;
      btnSpanish.visible = true;
    });

    let isSwapped = false; // Variable para rastrear si los botones han sido intercambiados

    // Función para intercambiar las posiciones de los botones
    function swapButtonPositions(btn1, btn2) {
      this.tweens.add({
        targets: btn1,
        x: btn2.x,
        y: btn2.y,
        duration: 100, // Duración de la transición en milisegundos
        ease: "Power2", // Tipo de interpolación (puedes ajustarlo según tus preferencias)
      });

      this.tweens.add({
        targets: btn2,
        x: btn1.x,
        y: btn1.y,
        duration: 100,
        ease: "Power2",
      });

      isSwapped = !isSwapped; // Invierte el estado de isSwapped
    }

    // Evento de clic para btnEnglish o btnSpanish
    btnEnglish.setInteractive();
    btnEnglish.on("pointerdown", () => {
      if (btnEnglish.x === 1400 && btnEnglish.y === 155) {
        // Si btnEnglish está en la posición (1400, 155), entonces intercambia posiciones
        swapButtonPositions.call(this, btnEnglish, btnSpanish);
      }
      window.lan = "en";
      languages(window.lan);
    });

    btnSpanish.setInteractive();
    btnSpanish.on("pointerdown", () => {
      if (!isSwapped) {
        // Si los botones no han sido intercambiados, entonces intercambia posiciones
        swapButtonPositions.call(this, btnEnglish, btnSpanish);
      }
      window.lan = "es";
      languages(window.lan);
    });
  }
}
