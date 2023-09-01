
import { blurButton } from "./module/blurButton.js";
export class Login extends Phaser.Scene {
  constructor() {
    super({ key: "login" });
  }

  preload() {

    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("googleES", "assets/images/login/google2.png");
    this.load.image("googleEN", "assets/images/login/google3.png");
    this.load.image("facciando", "assets/images/intro/facciando.png");
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

    //letras facciando
    this.add.image(800, 100, "facciando").setScale(1.5);



    const googleButtonES = this.add.image(800, 500, "googleES").setScale(0.1);

    const googleButtonEN = this.add.image(800, 500, "googleEN").setScale(0.1);
    
    googleButtonEN.setName("googleEN");
    googleButtonES.setName("googleES");
// Asegúrate de que 'this' se refiera a la instancia de Phaser adecuada
if(window.lan === "es"){
  googleButtonEN.visible = false;
  googleButtonES.visible = true;
}else{
  googleButtonEN.visible = true;
  googleButtonES.visible = false;
  
}
blurButton(googleButtonEN,this)
blurButton(googleButtonES,this)





  }
}




