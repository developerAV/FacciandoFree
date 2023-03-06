export class Game extends Phaser.Scene {

    constructor() {
      super({ key: 'game' });
    }
  
    preload() {
    this.load.image('background', 'images/background.png');
    this.load.image('play', 'images/PLAY2.png');
    this.load.image('score', 'images/score.png');
    this.load.image('avatar', 'images/avatar.png');
    this.load.image('fullscreen', 'images/fullscreen.png');
    this.load.image('mute', 'images/mute.png');
    this.load.image('sound', 'images/sound.png');
    this.load.image('facciando', 'images/facciando.png');
    this.load.audio('musica', 'music/GrassyWorld.mp3');
    // Cargar el archivo CSS
    this.load.css('styles', 'styles/index.css');

    }
  
    create() {

   
 


     var background =  this.add.image(400, 250, 'background');
      // var titulo = this.add.text(400, 30, 'FACCIANDO', 'font-size: 50px; color: white; background-color: #F00', 'Click me!');
      var facciando = this.add.image(400, 50, 'facciando');
    var play = this.add.image(400, 130, 'play');
    var score = this.add.image(400, 240, 'score');
    var score = this.add.image(400, 240, 'score');
    var avatar = this.add.image(400, 350, 'avatar');
    // var sound = this.add.image(300, 440, 'sound');
    var fullscreenButton = this.add.image(750, 50, 'fullscreen').setInteractive();
    blurButton(play);
    blurButton(score);
    blurButton(avatar);
    // blurButton(fullscreenButton);
    // desenfoque(background);
    

  fullscreenButton.on('pointerup', function () {
    if (this.scale.isFullscreen) {
      this.scale.stopFullscreen();
    } else {
      this.scale.startFullscreen();
    }
  }, this);




  // MUSICA

  var music = this.sound.add('musica',{ loop: true });
  music.play();

// Agrega el botón de sonido a la escena
var btnSound = this.add.image(0, 0, 'sound');
btnSound.setInteractive();
btnSound.on('pointerdown', () => {
 if (music.mute) {
   // Si la música está en mute, la activa y cambia el botón a sound on
   music.mute = false;
   btnSound.setTexture('sound');
 } else {
   // Si la música no está en mute, la pone en mute y cambia el botón a sound off
   music.mute = true;
   btnSound.setTexture('mute');
 }
});

// Coloca el botón de sonido en la esquina superior derecha de la pantalla
btnSound.setOrigin(11, -9);
btnSound.setPosition(this.sys.game.config.width, 0);


      // create();
      // Agregar el archivo CSS a la página
    const stylesheet = document.createElement('link');
    stylesheet.rel = 'stylesheet';
    stylesheet.href = 'styles/index.css';
    document.head.appendChild(stylesheet);


    // Crear el botón
    // var boton = this.add.dom(100, 100, 'button', 'width: 100px; height: 50px; color: white; background-color: #F00', 'Click me!');
    var boton = this.add.dom(400, 100, 'button', 'width: 100px; height: 50px; color: white; background-color: #F00', 'Click me!');


    boton.setClassName('custom-button');
    boton.node.classList.add('custom-button');
    boton.setInteractive() // hace que el botón sea interactivo (es decir, puede hacer clic en él)
    .on('pointerdown', onClick);
    // Agregar el botón a un contenedor
    var contenedor = this.add.container(0, 0, [ boton ])
    
    // Añadir el contenedor a la escena
    this.add.existing(contenedor)
    
      }
     
   
    

    
  
  }
  function onClick() {
    alert('Hola mundo!');
}


function blurButton(boton) {
 // Hacer que la imagen sea interactiva
 boton.setInteractive();
    
 // Agregar eventos a la imagen
 boton.on('pointerover', function () {
   

   boton.setTint(0xcccccc);
 });
 
 boton.on('pointerout', function () {
   boton.setTint(0xffffff);
   // boton.style.cursor = 'default';
 });
 
 boton.on('pointerdown', function () {
   // Acción cuando se hace clic en la imagen
   
   alert("Haz precionado el botón");

 });
}


function desenfoque(imagen) {


   // Crear el filtro de desenfoque
  var blurFilter = this.add.shader('Blur', 400, 300, 800, 500);
  blurFilter.setRenderToTexture();

  // Aplicar el filtro a la imagen
  imagen.setMask(blurFilter);
}