import {Game} from './game.js';



const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  backgroundColor: '#7e7e81',
  scene: [Game],
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