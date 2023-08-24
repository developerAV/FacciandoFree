import { Intro } from "./scenes/intro.js";
import { Aula } from "./scenes/classroom.js";
import { ComputerRoom } from "./scenes/computer_room.js";
import { Laboratorio1 } from "./scenes/electronic_room.js";
import { mainHallway1 } from "./scenes/mainHallway1.js";
import { Hallway2 } from "./scenes/hallway2.js";
import { FloorHallway2 } from "./scenes/FloorHallway2.js";
import { AdministrativeRoom } from "./scenes/administrative_room.js";
import { Hallway300 } from "./scenes/hallway300.js";
import { Cubicle } from "./scenes/cubicle.js";
import { Auditorium2 } from "./scenes/auditoruim2.js";
/* import {Player} from './scenas/player.js';
 */

// Configuración del juego
const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1000,
  backgroundColor: "#000",
  // transparent: true, // Comentado porque no se usa
  scene: [
    Intro,
    Aula,
    ComputerRoom,
    Laboratorio1,
    Hallway2,
    mainHallway1,
    FloorHallway2,
    AdministrativeRoom,
    Hallway300,
    Cubicle,
    Auditorium2,
  ],
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
window.isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
// Creación del juego con la configuración especificada
const game = new Phaser.Game(config);
// var pantallaAncho = game.config.width;
// console.log('Ancho de pantalla: ' + window.innerWidth);


game.scene.start();
