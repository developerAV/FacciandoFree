import {
  COLORS,
  COLORS_HEX,
  FONT,
  FONT2,
  FONT_SIZE,
} from "../utils/constants.js";
import { panelComment } from "./components/forum/panelComment.js";
import { textButton } from "./module/textButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { getForum } from "../services/forum.service.js";
let currentIndex = 0;

import { buttonLogout } from "./components/intro/buttonLogout/buttonLogout.js";

export class Forum extends Phaser.Scene {
  constructor() {
    super({ key: "forum" });
  }
  preload() {
    
    if (this.textures.exists("profile")) this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }
  async create() {
    const background2 = this.add.rectangle(
      this.cameras.main.width / 2, // Posición X centrada en la pantalla
      this.cameras.main.height / 2,
      this.cameras.main.width,
      this.cameras.main.height,
      0x00051a
    );
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "facciando").setScale(1.6);
    background.alpha = 0.9;

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

    this.forumX = await getForum(this);
    let randomForum;
    // console.log(forumX[0])
    //forumX extrae varios objetos del foro, necesito uno al azar
    const boxForum = this.add.container(10, 150);
    const boxForumBg = this.add.graphics();

    boxForum.setName("boxForum");

    boxForumBg.fillStyle(COLORS.blue, 0.7);
    boxForumBg.fillRoundedRect(0, 0, 500, 700, 15);
    boxForumBg.lineStyle(4, COLORS.blue, 1);

    const forumLabel = this.add.text(10, 10, traslate("forum"), {
      fontFamily: FONT2,
      fontSize: FONT_SIZE.medium,
      color: COLORS_HEX.white,
      align: "center",
    });

    //add button container
    const btnContainer = this.add
      .container(40, 607)
      .setSize(800, 100)
      .setName("btnContainer");
    const btnBg = this.add.graphics();
    btnBg.fillStyle(COLORS.blueDark, 0.7);
    btnBg.fillRoundedRect(0, 0, 400, 80, 25);
    btnBg.lineStyle(4, COLORS.white, 1);
    //btnText en medio del container

    const btnText = this.add.text(100, 22, "CREAR FORO", {
      fontFamily: FONT,
      fontSize: "26px",
      color: COLORS_HEX.white,
      align: "center",
    });

    btnContainer.add(btnBg);
    btnContainer.add(btnText);
    btnContainer.setInteractive();
    btnContainer.on("pointerdown", () => {
      console.log("click");
    });

    boxForum.add(boxForumBg);
    boxForum.add(forumLabel);
    boxForum.add(btnContainer);

    let panel = this.rexUI.add
      .scrollablePanel({
        x: 270,
        y: 490,
        height: 500,

        scrollMode: 0,

        // background: this.rexUI.add.roundRectangle({ strokeColor: 0x000000, strokeWidth: 2}),
        panel: {
          child: CreatePanel(this),
        },

        slider: {
          track: this.rexUI.add.roundRectangle({
            width: 20,
            height: 20,
            radius: 10,
            color: COLORS.blue,
          }),
          thumb: this.rexUI.add.roundRectangle({
            radius: 13,
            color: COLORS.black,
          }),
        },

        space: { panel: 4 },
      })
      .layout();

      // console.log(this.forumX[0]._id);
    panel.scrollToChild(panel.getByName("", true));

    const boxForumComments = this.add.container(550, 150);
    const boxForumCommentsBg = this.add.graphics();
    boxForumComments.setName("boxForumComments");
    boxForumCommentsBg.fillStyle(0x00051a, 0.7);
    boxForumCommentsBg.fillRoundedRect(0, 0, 1000, 700, 15);
    boxForumCommentsBg.lineStyle(4, COLORS.blue, 1);
    
    
    this.topicChat = this.add.text(80, 22, "Topic", {
      fontFamily: FONT,
      fontSize: "46px",
      color: COLORS_HEX.white,
      align: "center",
      fontStyle: 'bold',
    });
    this.descriptionChat = this.add.text(80, 80, "Description", {
      fontFamily: FONT,
      fontSize: "26px",
      color: COLORS_HEX.white,
      align: "center",
    });
    boxForumComments.add(boxForumCommentsBg);
    boxForumComments.add(this.topicChat);
    boxForumComments.add(this.descriptionChat);




    //COntenido del foro comentarios 

      

  }
}
let CreatePanel = function (scene) {
  let panel = scene.rexUI.add.sizer({
    width: 450,
    orientation: "y",
    space: { item: 4 },
  });
  scene.forumX.forEach((element) => {
    let name = `item-${element.id}`;

    let label = scene.rexUI.add.label({
      background: scene.rexUI.add.roundRectangle({
        color: COLORS.white,
        radius: 10,
        alpha: 0.7,
      }),

      text: scene.add.text(0, 0, element.title, {
        fontFamily: FONT,
        fontSize: "26px",
        color: COLORS_HEX.black,
        align: "center",
      }),
      space: { left: 10, right: 10, top: 20, bottom: 20 },
      name: name,
    });
    label.setDepth(1);

    label.setInteractive().on("pointerdown", () => {
      try {
        
        scene.container.destroy();
        scene.scrollablePanel2.destroy();
      } catch (error) {
        
      }
      
      console.log(`Clicked on ${name}`);
      currentIndex = element._id;
      scene.topicChat.setText(element.title);
      scene.descriptionChat.setText(element.description);
      panelComment(scene, element.comments);
      console.log(currentIndex);
      // scene.scene.start("forumComments", { id: currentIndex });
    });

    panel.add(label, { expand: true });
  });

  // for (let i = 0; i < 50; i++) {
  //   let name = `item-${i}`;

  //   let label = scene.rexUI.add.label({
  //     background: scene.rexUI.add.roundRectangle({
  //       color: COLORS.white,
  //       radius: 10,
  //       alpha: 0.7,
  //     }),

  //     text: scene.add.text(0, 0, name, {
  //       fontFamily: FONT,
  //       fontSize: "26px",
  //       color: COLORS_HEX.black,
  //       align: "center",
  //     }),
  //     space: { left: 10, right: 10, top: 20, bottom: 20 },
  //     name: name,
  //   });
  //   label.setDepth(1);

  //   label.setInteractive().on('pointerdown', () => {
  //     console.log(`Clicked on ${name}`);
  //   });

  //   panel.add(label, { expand: true });
  // }

  return panel;
};
