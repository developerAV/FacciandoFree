export class Game extends Phaser.Scene {
  constructor() {
    super({ key: "game" });
  }

  preload() {
    this.load.image("background", "images/faccia1.png");
    this.load.image("play", "images/Play.png");
    this.load.image("score", "images/score.png");
    this.load.image("avatar", "images/avatar.png");
    this.load.image("fullscreen", "images/fullscreen.png");
    this.load.image("mute", "images/Mute.png");
    this.load.image("sound", "images/Sound.png");
    this.load.image("facciando", "images/facciando.png");
    this.load.audio("musica", "music/GrassyWorld.mp3");
    // Cargar el archivo CSS
    this.load.css("styles", "styles/index.css");
  }

  create() {
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
   
  
    //update(background);
     var facciando = this.add.image(800, 100, "facciando");
    facciando.setScale(1.5);

    var play = this.add.image(800, 340, "play");
    play.setScale(0.75);
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
    blurButton(play);
    blurButton(score);
    blurButton(avatar);
    blurButton(btnSosund);
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

function blurButton(boton) {
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

    alert("Haz precionado el botón");
  });
}

function desenfoque(imagen) {
  // Crear el filtro de desenfoque
  var blurFilter = this.add.shader("Blur", 400, 300, 800, 500);
  blurFilter.setRenderToTexture();

  // Aplicar el filtro a la imagen
  imagen.setMask(blurFilter);
}
