export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }

  preload() {
    this.load.spritesheet("dude", "../assets/images/player/gamer0.png", {
      frameWidth: 26,
      frameHeight: 32,
    });
    this.load.image("background", "assets/images/intro/facci.png");
    this.load.image("play", "assets/images/intro/Play.png");
    this.load.image("score", "assets/images/intro/score.png");
    this.load.image("avatar", "assets/images/intro/avatar.png");
    this.load.image("fullscreen", "assets/images/intro/fullscreen.png");
    this.load.image("mute", "assets/images/intro/mute.png");
    this.load.image("sound", "assets/images/intro/sound.png");
    this.load.image("facciando", "assets/images/intro/facciando.png");
    this.load.audio("musica", "assets/music/GrassyWorld.mp3");
    // Cargar el archivo CSS
    this.load.css("styles", "styles/index.css");
  }

  create() {
    // fondo dinamico
    const background = this.add.sprite(1500, 500, "background").setScale(1.6);

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

    // add music
    const play = this.add
      .image(800, 340, "play")
      .setScale(0.75)
      .setName("play");

    const score = this.add
      .image(800, 510, "score")
      .setScale(0.75)
      .setName("score");

    const avatar = this.add
      .image(800, 680, "avatar")
      .setScale(0.75)
      .setName("avatar");

    const btnSosund = this.add
      .image(0, 0, "sound")
      .setScale(0.65)
      .setName("sound");

    const fullscreenButton = this.add
      .image(900, 850, "fullscreen")
      .setScale(0.65)
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
    blurButton(play, this);
    blurButton(score, this);
    blurButton(avatar, this);
    // blurButton(btnSosund);
    // desenfoque(background);
    // Music

    const music = this.sound.add("musica", { loop: true });

    //music.play();

    // Agrega el botón de sonido a la escena
    btnSosund.setInteractive();
    btnSosund.on("pointerdown", () => {
      // Si la música está en mute, la activa y cambia el botón a sound on
      if (music.mute) {
        music.mute = false;
        btnSosund.setTexture("sound");
        return;
      }

      // Si la música no está en mute, la pone en mute y cambia el botón a sound off
      music.mute = true;
      btnSosund.setTexture("mute");
    });

    // Coloca el botón de sonido en la esquina superior derecha de la pantalla
    //btnSound.setOrigin(11, -9);
    btnSosund.setPosition(700, 850);

    // create();
    // Agregar el archivo CSS a la página
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "styles/index.css";
    document.head.appendChild(stylesheet);
  }
}

function blurButton(boton, escena) {
  // Hacer que la imagen sea interactiva
  boton.setInteractive();

  // Agregar eventos a la imagen
  boton.on("pointerover", () => {
    boton.setTint(0xaaaaa);
  });

  boton.on("pointerout", () => {
    boton.setTint(0xcccccc);
  });

  boton.on("pointerdown", function () {
    // Acción cuando se hace clic en la imagen
    // alert("Haz precionado el botón" + namebtn);
    if (boton.name === "play") {
      escena.cameras.main.fadeOut(500); // Desvanecer la pantalla durante 500 milisegundos
      escena.time.delayedCall(
        500,
        () => {
          // Esperar 500 milisegundos antes de cambiar de escena
          //escena.scene.start("computer_room");
          //music.mute = true;
          escena.scene.start("cubicle");
          
        },
        [],
        escena
      );
    } else if (boton.name === "score") {
      console.log("score");
    } else if (boton.name === "avatar") {
    } else if (boton.name === "music") {
    }
  });
}
