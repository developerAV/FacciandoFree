import { Intro } from "./scenas/intro.js";
import { Aula } from "./scenas/aula.js";
/* import {Player} from './scenas/player.js';
 */

// Configuración del juego
const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1000,
  backgroundColor: "#000",
  // transparent: true, // Comentado porque no se usa
  scene: [Intro, Aula],
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 400 },
      debug: false,
    },
  },
};

// Creación del juego con la configuración especificada
const game = new Phaser.Game(config);

// Iniciar la primera escena
game.scene.start();
