
import { COLORS, FONT_SIZE } from "../utils/constants.js";
import { textButton } from "./module/textButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { buttonLogout } from "./components/intro/buttonLogout.js";


const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = COLORS.blueDark;
const COLOR_DARK = 0x03bed0;

export class Ranking extends Phaser.Scene {
  constructor() {
    super({ key: "ranking" });
  }
  preload() {
    this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
    this.load.scenePlugin({
      key: 'rexuiplugin',
      url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
      sceneKey: 'rexUI'
  });

  this.load.bitmapFont('gothic', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.png', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.xml');
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
      FONT_SIZE.small,
     
    );
    const ranked = textButton(
      this,
      870,
      30,
      "ranking",
      COLORS.grayDark,
      FONT_SIZE.small,
      0.9,
      false,
      230,

    );
    const avatar = textButton(
      this,
      1100,
      30,
      "avatar",
      COLORS.grayDark,
      FONT_SIZE.small
    );
    
    home.setInteractive();
    home.on("pointerdown", () => {
        this.scene.start("intro");
        });
    avatar.setDepth(1);
    avatar.setInteractive();
    avatar.on("pointerdown", () => {
     
        this.scene.start("avatarS");
    });


    const logoutButton = buttonLogout(this);
    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    buttonEnglish(btnLanguage, this);


    let scrollablePanel = this.rexUI.add.scrollablePanel({
      x: 800, y: 500,
      width: 1300,
      height: 600,

      scrollMode: 'y',

      background: this.rexUI.add.roundRectangle({
          strokeColor: COLOR_DARK,
          radius: 10
      }),

      panel: {
          child: createPanel(this),

          mask: { padding: 1, },
      },

      slider: {
          track: this.rexUI.add.roundRectangle({ width: 20, radius: 10, color: COLOR_DARK, alpha: 0.5 }),
          thumb: this.rexUI.add.roundRectangle({ radius: 13, color: COLOR_LIGHT })
      },
    
      mouseWheelScroller: {
          focus: false,
          speed: 0.1
      },
    
   

      space: { left: 20, right: 20, top: 20, bottom: 20, panel: 3,}
  })
      .layout()
 

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
let CreateContent = function (linesCount) {
  let numbers = [];
  for (let i = 0; i < linesCount; i++) {
      numbers.push(i.toString());
  }
  return numbers.join('\n');
}

let createPanel = function (scene) {
  let text = scene.add.bitmapText(0, 0, 'gothic').setText(CreateContent(10));
  let container = scene.add.container()
      .add(text)
      .setSize(200, text.height);
      let container2 = scene.add.container();
      const boxBg = scene.add.graphics();
    
      boxBg.fillGradientStyle(0x03bed0, 0x03bed0, 0x03bed0, 0x03bed0, 1);
      boxBg.fillRoundedRect(0, 0, 1200, 90, 30);
    
      const profile2 = scene.add.image(50, 50, "profile");
      profile2.setScale(0.8);

      // const radioCirculo2 = Math.min(
      //   profile2.displayWidth,
      //   profile2.displayHeight
      // ) / 2;
      // const mascara2 = scene.make.graphics();
      // mascara2.fillStyle(0xffffff); // Color blanco
      // mascara2.fillCircle(profile2.x, profile2.y, radioCirculo2);

      // // Aplica la máscara a la imagen
      // profile2.setMask(mascara2.createGeometryMask());
        

    

 

      const name = scene.add.text(100, 10, "Alex Medranda", {
        font: `32px gothic`,
        fill: "#ffffff",
        wordWrap: {
          width: 200,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
      const uni = scene.add.text(100, 50, "UNIVERSIDAD LAICA ELOY ALFARO DE MANABÍ", {
        font: `18px gothic`,
        fill: "#00051A",
        wordWrap: {
          width: 600,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
      
      const score = scene.add.text(800, 10, "1000", {
        font: `32px gothic`,
        fill: "#ffffff",
        wordWrap: {
          width: 200,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
      container2.add(boxBg);
      container2.add(profile2);
      container2.add(name);
      container2.add(uni);
      container2.add(score);
      container.add(container2);
  return container;
}