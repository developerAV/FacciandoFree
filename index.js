import { Uleam } from "./scenes/uleam.js";
import { Loading } from "./scenes/loading.js";
import { Login } from "./scenes/login.js";
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
import { Ranking } from "./scenes/ranking.js";
import { AvatarS } from "./scenes/avatar.js";
import { Question } from "./scenes/question.js";
import { Outside } from "./scenes/outside.js";
import { CommissionArea } from "./scenes/commission_area.js";
import { Cubicle2 } from "./scenes/cubicle2.js";
import { Forum } from "./scenes/forum.js";
import { ServerRoom } from "./scenes/serverroom.js";
import { Auditorium } from "./scenes/auditorium.js";

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1000,
  backgroundColor: "#000",
  // transparent: true, // Comentado porque no se usa
  scene: [
    Uleam,
    Loading,
    Outside,
    Login,
    Question,
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
    Cubicle2,
    Auditorium2,
    ServerRoom,
    Auditorium,
    Ranking,
    CommissionArea,
    AvatarS,
    Forum,
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
window.lan = "es";
window.time = 0;
window.loadOut = false;
window.forumId = "";
const game = new Phaser.Game(config);

game.scene.start();
