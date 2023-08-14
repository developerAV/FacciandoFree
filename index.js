import { Intro } from "./scenes/intro.js";
import { Aula } from "./scenes/classroom.js";
import { ComputerRoom } from "./scenes/computer_room.js";
import { Laboratorio1 } from "./scenes/electronic_room.js";
import { Hallway2 } from "./scenes/hallway2.js";
import { Hallway300 } from "./scenes/hallway300.js";
import { Cubicle } from "./scenes/cubicle.js";
/* import {Player} from './scenas/player.js';
 */

// Configuración del juego
const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1000,
  backgroundColor: "#000",
  // transparent: true, // Comentado porque no se usa
  scene: [Intro, Aula, ComputerRoom, Laboratorio1, Hallway2, Hallway300, Cubicle],
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
