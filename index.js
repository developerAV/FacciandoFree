import {Intro} from './scenas/intro.js';
import {Aula} from './scenas/aula.js';



const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1000,
  backgroundColor: '#000',
  // transparent: true,
  scene: [Intro, Aula],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 400 },
      debug: false
    }
  }
}

var game = new Phaser.Game(config);

game.scene.start();
