import { blurButton } from "./module/blurButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
export class Login extends Phaser.Scene {
  constructor() {
    super({ key: "login" });
  }
  preload() {
    
    this.load.plugin('rexcanvasinputplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcanvasinputplugin.min.js', true);
  
    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("googleES", "assets/images/login/google2.png");
    this.load.image("googleEN", "assets/images/login/google3.png");
    this.load.image("facciando2", "assets/images/intro/Facciando2.png");
    this.load.image("confirm", "assets/images/login/confirm.png");
    this.load.image("save", "assets/images/login/save.png");
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


    // var txt0 = CreateCanvasInput(this, 'Apple012345678901234567890123456789').setPosition(400, 100)
    // var txt1 = CreateCanvasInput(this, 'A').setPosition(400, 200).appendText('pple')
    // var txt2 = CreateCanvasInput(this, 'Apple').setPosition(400, 300).setReadOnly()
    // var txt3 = CreateCanvasInput(this, 'Apple', 100).setPosition(100, 400).setOrigin(0)


  
  // const textEntry1 = this.add.text(-350, -150, "Nombre", {
  //   font: "50px Arial",
  //   fill: "#ffff00",
  // });
  
 
  const boxEntry = this.add.container(800, 500);
  const confirm = this.add.image(0, 0, "confirm").setScale(1);  
 this.txt0 = CreateCanvasInput(this, 'Name',730).setPosition(0, -110);
 this.txt1 = CreateCanvasInput(this, 'Name',730).setPosition(0, 38);
 const buttonSave = this.add.image(0, 200, "save").setScale(1);
 this.textSave = this.add.text(-50, 160, "Save", {
  font: "50px Arial",
  fill: "#fff",
});




  boxEntry.add(confirm);
  boxEntry.add(this.txt0);
  boxEntry.add(this.txt1);
  boxEntry.add(buttonSave);
  boxEntry.add(this.textSave);
  boxEntry.visible = false;
  buttonSave.setInteractive();
  buttonSave.on("pointerdown", () => {
    console.log(this.txt0.text);
    console.log(this.txt1.text);
  });
  
  
        // poner cursor en el input textEntry1
  

   

    // this.textEntry2 = this.add.text(10, 100, "Uidad", {
    //   font: "32px Courier",
    //   fill: "#ffff00",
    // });
    // changeText(textEntry1, this);
    // changeText(this.textEntry2, this);
   
  }
  update() { 

 //space

  }
}


let CreateCanvasInput = function (scene, text, width) {
  if (width === undefined) {
      width = 600;
  }
  const entry= scene.add.rexCanvasInput(
      {
          width: width,

          background: {
              // Solution A
              'focus.stroke': 'white',
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
              'cursor.color': 'black',
              'cursor.backgroundColor': 'white',
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
          cursorStyle: 'vertical', // 'vertical'|'horizontal'|'none'|undefined
          selectAll: true

      }
  )
  

  return entry;
}