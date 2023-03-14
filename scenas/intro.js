export class Intro extends Phaser.Scene {
  constructor() {
    super({ key: "intro" });
  }

  preload() {
    this.load.image("background", "assets/images/facci.png");
    this.load.image("play", "assets/images/Play.png");
    this.load.image("score", "assets/images/score.png");
    this.load.image("avatar", "assets/images/avatar.png");
    this.load.image("fullscreen", "assets/images/fullscreen.png");
    this.load.image("mute", "assets/images/Mute.png");
    this.load.image("sound", "assets/images/Sound.png");
    this.load.image("facciando", "assets/images/facciando.png");
    this.load.audio("musica", "assets/music/GrassyWorld.mp3");
    // Cargar el archivo CSS
    this.load.css("styles", "styles/index.css");
  }

  create() {
    // fondo dinamico
    var sprite = this.add.sprite(1500, 500, 'background');
    sprite.setScale(1.6);
  
    var tween = this.tweens.add({
      targets: sprite,
      x: 100,
      ease: 'Power',
      duration: 100000,
      yoyo: true,
      repeat: -1
    });
   
  
    //letras facciando
     var facciando = this.add.image(800, 100, "facciando");
    facciando.setScale(1.5);

    var play = this.add.image(800, 340, "play");
    play.setScale(0.75);
    play.setName("play");

    var score = this.add.image(800, 510, "score");
    score.setScale(0.75);
    var avatar = this.add.image(800, 680, "avatar");
    avatar.setScale(0.75);
    var btnSosund = this.add.image(0, 0, "sound");
    btnSosund.setScale(0.65);

    //facciando.setScale(0.5);
    var fullscreenButton = this.add
      .image(1000, 850, "fullscreen")
      .setInteractive();
    blurButton(play, "play", this);
    blurButton(score, "score", this);
    blurButton(avatar, "avatar", this);
    // blurButton(btnSosund);
    // desenfoque(background);

    //Full Screen
    fullscreenButton.on(
      "pointerup",
      () => {
        if (this.scale.isFullscreen) {
          this.scale.stopFullscreen();
        }
        this.scale.startFullscreen();
      },
      this
    );

    // Music

    var music = this.sound.add("musica", { loop: true });
    // music.play();

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
    btnSosund.setPosition(650, 850);

    // create();
    // Agregar el archivo CSS a la página
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "styles/index.css";
    document.head.appendChild(stylesheet);

    // Crear el botón
    // var boton = this.add.dom(100, 100, 'button', 'width: 100px; height: 50px; color: white; background-color: #F00', 'Click me!');
    var boton = this.add.dom(
      400,
      100,
      "button",
      "width: 100px; height: 50px; color: white; background-color: #F00",
      "Click me!"
    );

    boton.setClassName("custom-button");
    boton.node.classList.add("custom-button");
    boton
      .setInteractive() // hace que el botón sea interactivo (es decir, puede hacer clic en él)
      .on("pointerdown", onClick);
    // Agregar el botón a un contenedor
    var contenedor = this.add.container(0, 0, [boton]);

    // Añadir el contenedor a la escena
    this.add.existing(contenedor);
    
  }
}
function onClick() {
  alert("Hola mundo!");
}

function blurButton(boton, namebtn, escena) {
  // Hacer que la imagen sea interactiva
  boton.setInteractive();

  // Agregar eventos a la imagen
  boton.on("pointerover", function () {
    boton.setTint(0xaaaaa);
  });

  boton.on("pointerout", function () {
    boton.setTint(0xcccccc);

    // boton.style.cursor = 'default';
  });

  boton.on("pointerdown", function () {
    // Acción cuando se hace clic en la imagen
    // alert("Haz precionado el botón" + namebtn);
    if (namebtn === "play") {
      escena.cameras.main.fadeOut(500); // Desvanecer la pantalla durante 500 milisegundos
      escena.time.delayedCall(500, () => { // Esperar 500 milisegundos antes de cambiar de escena
        escena.scene.start("aula");
      }, [], escena);
      

    }


  });
}

function desenfoque(imagen) {
  // Crear el filtro de desenfoque
  var blurFilter = this.add.shader("Blur", 400, 300, 800, 500);
  blurFilter.setRenderToTexture();

  // Aplicar el filtro a la imagen
  imagen.setMask(blurFilter);
}
