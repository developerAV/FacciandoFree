import { blurButton } from "./module/blurButton.js";
import {
  COLORS,
  COLORS_HEX,
  FONT,
  FONT2,
  FONT_SIZE,
  SCENE,
} from "../utils/constants.js";
import { textButton } from "./module/textButton.js";
import { buttonEnglish } from "./module/buttonEnglish.js";
import { traslate } from "../data/dialogues.js";
import { buttonLogout } from "./components/intro/buttonLogout/buttonLogout.js";
import { buttonsMode } from "./components/intro/buttonsMode.js";
import { news } from "./components/intro/news.js";
import { detailsGamer } from "./components/intro/detailsGamer.js";
import { getTop10UserByScore } from "../services/user.service.js";
import { scoreUser } from "./components/intro/scoreUser.js";
import { Avatar } from "./player.js";

import { getForum } from "../services/forum.service.js";
import { getAllUsers } from "../services/user.service.js";

import { createButtonMission } from "./components/common/buttonMission.js";
export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }
  preload() {
 
    this.load.plugin(
      "rexlineprogresscanvasplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexlineprogresscanvasplugin.min.js",
      true
    );
    if (this.textures.exists("profile")) this.textures.remove("profile");
    this.load.image("profile", window.imageUrl);
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
  }
  async create() {
       //obtener todos los usuarios el name getallusers
      await getAllUsers().then((users) => {
        // console.log(user);
        users.forEach((user) => {
        const imageUrl = user.imageUrl;
        this.load.image(user.idUserFirebase, imageUrl);
        this.load.start();
        }
        );
      });
    window.loadOut = true;
    window.avatarSprite = window.user.sprite;
    if (window.mode === undefined) {
      window.mode = "exploration";
      window.mode2 = "mission";
    }
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

    // add music
    const play = this.add
      .image(1412, 900, "play")
      .setScale(0.75)
      .setName("play")
      .setScale(1);

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

    play.setInteractive();
    play.on("pointerdown", () => {
      // Antes de cambiar de escena, detén el intervalo
      // clearInterval(intervalo);

      this.scene.restart();
      this.scene.stop();
      this.scene.start(SCENE.loading);
    });

    // Music
    const music = this.sound.add("musica", { loop: true });
    //music.play();

    // Agrega el botón de sonido a la escena
    btnSosund.setInteractive();
    btnSosund.on("pointerdown", () => {
      // Antes de cambiar de escena, detén el intervalo

      if (music.mute) {
        music.mute = false;
        btnSosund.setTexture("sound");
        return;
      }

      music.mute = true;
      btnSosund.setTexture("mute");
    });
    btnSosund.setPosition(50, 960);

    const playText = textButton(
      this,
      1270,
      860,
      "start",
      COLORS.grayDark,
      FONT_SIZE.medium
    );
    const name = textButton(
      this,
      120,
      30,
      window.user.name,
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
      0.9
    );
    const ranked = textButton(
      this,
      900,
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
      FONT_SIZE.small
    );

    ranked.setInteractive();
    ranked.on("pointerdown", async () => {
      // Antes de cambiar de escena, detén el intervalo
      clearInterval(intervalo);
      window.top10UserList = await getTop10UserByScore();
      // Antes de cambiar de escena, detén el intervalo
      clearInterval(intervalo);
      this.scene.start("ranking");
    });

    avatar.setDepth(1);
    avatar.setInteractive();
    avatar.on("pointerdown", () => {
      clearInterval(intervalo);

      this.scene.restart();
      this.scene.stop();
      this.scene.start("avatarS");
    });

    this.avatar = this.physics.add
      .sprite(920, 600, window.avatarSprite)
      .setScale(7);
    this.avatar.body.allowGravity = false;

    this.avatar.setTexture(window.avatarSprite);

    // Crear un array con las animaciones
    let animaciones = ["down", "right", "up", "left"];

    let index = 0; // Indice para recorrer las animaciones
    let intervalo; // Variable para almacenar el intervalo

    // Función para ejecutar las animaciones
    let ejecutarAnimacion = () => {
      this.avatar.anims.play(animaciones[index], true); // Ejecutar la animación actual
      index = (index + 1) % animaciones.length; // Avanzar al siguiente índice, volviendo al inicio si se llega al final
    };

    // Función para iniciar el intervalo
    let iniciarIntervalo = () => {
      ejecutarAnimacion(); // Ejecutar la primera animación
      intervalo = setInterval(ejecutarAnimacion, 3000); // Establecer el intervalo para ejecutar las animaciones cada 3 segundos
    };

    // Función para reiniciar el intervalo
    let reiniciarIntervalo = () => {
      clearInterval(intervalo); // Detener el intervalo actual
      iniciarIntervalo(); // Iniciar un nuevo intervalo
    };

    // Iniciar el intervalo
    //iniciarIntervalo();
    const logoutButton = buttonLogout(this);
    const btnLanguage = this.add.image(1537, 70, "language").setScale(0.4);
    buttonEnglish(btnLanguage, this);

    const { box } = news(this);

    const {
      boxGamer,
      levelLabel,
      missionLabel,
      descriptionLabel,
      description,
      completed,
      scoreLabel,
      timeLabel,
      timeText,
      scoreText,
    } = detailsGamer(this);
    const { boxScore, scoreUserLabel } = await scoreUser(this);

    buttonsMode(this, box, boxGamer, boxScore);

    // ================FORUM================
    const forumX = await getForum(this);
    let randomForum;
    // console.log(forumX[0])
    //forumX extrae varios objetos del foro, necesito uno al azar
    const boxForum = this.add.container(1070, 500);
    const boxForumBg = this.add.graphics();
    const boxForumBgLevel = this.add.graphics();
    boxForum.setName("boxForum");
    boxForumBg.fillStyle(0x00051a, 0.42);

    boxForumBgLevel.fillStyle(COLORS.white, 0.42);
    boxForumBgLevel.fillRoundedRect(0, 0, 500, 300, 15);
    boxForumBgLevel.lineStyle(4, COLORS.blue, 1);

    const forumLabel = this.add.text(30, 20, traslate("forum"), {
      fontFamily: FONT2,
      fontSize: "40px",
      color: "#00051A",
    });
    let randomForumComments;
    let forumComments;
    let forum;
    const intervalox = setInterval(() => {
      try {
        randomForum = Math.floor(Math.random() * forumX.length);
        forum = forumX[randomForum];
        forumComments = forum.comments;
        randomForumComments = Math.floor(Math.random() * forumComments.length);
        console.log(randomForum);
        console.log(forum);

        topicLabel.setText(forum.title);
        contentLabel.setText(forum.comments[randomForumComments].content);
      } catch (error) {
        clearInterval(intervalox);
      }
    }, 3000);

    const topicLabel = this.add.text(30, 70, "Tema", {
      fontFamily: FONT2,
      fontSize: "40px",
      color: "#004AAD",
    });

    const contentLabel = this.add.text(30, 130, "contenido", {
      fontFamily: FONT,
      fontSize: "28px",
      color: "#00051A",
      // backgroundColor: "#fff",
      width: 50,
      height: 20,
      wordWrap: { width: 400, useAdvancedWrap: true },
    });
    const btnForum = this.add.image(250, 280, "modox").setScale(0.8);
    btnForum.setInteractive();
    btnForum.on("pointerdown", () => {
      clearInterval(intervalox);
      this.scene.start("forum");
    });
    const btnLabel = this.add.text(210, 265, traslate("participar"), {
      fontFamily: FONT2,
      fontSize: "28px",
      color: "#fff",
    });

    boxForum.add(boxForumBg);
    boxForum.add(boxForumBgLevel);
    boxForum.add(forumLabel);
    boxForum.add(topicLabel);
    boxForum.add(contentLabel);
    boxForum.add(btnForum);
    boxForum.add(btnLabel);

    this.updateScene = () => {
      playText.setText(traslate("start"));
      logoutButton.setText(traslate("logout"));
      name.setText(window.user.name);
      home.setText(traslate("home"));
      ranked.setText(traslate("ranking"));
      avatar.setText(traslate("avatar"));

      levelLabel.setText(traslate("actualLevel"));
      missionLabel.setText(traslate("missionName"));
      descriptionLabel.setText(traslate("description"));
      description.setText(traslate("descriptionMission"));
      completed.setText(traslate(window.completedMission ?? "incomplete"));
      scoreLabel.setText(traslate("missionScore") + ": ");
      timeLabel.setText(traslate("time") + ": ");
      timeText.setPosition(window.lan == "en" ? 100 : 170, 380);
      scoreText.setPosition(window.lan == "en" ? 200 : 260, 322);
      scoreUserLabel.setText(traslate("score"));
      return;
    };
    this.updateScene();
  }
}
