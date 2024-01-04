import { Avatar } from "./player.js";
import { io } from "https://cdn.socket.io/4.7.2/socket.io.esm.min.js";
import {
  crearPlataforma,
  dimesionesPlataformaIndividual,
} from "./module/platform.js";
import { traslate } from "../data/dialogues.js";
import { crearVideo } from "./module/videoInfo.js";
import { getEmployees } from "../services/employee.js";
import { createButtonCircle } from "../scenes/components/common/buttonCircle.js";
import { navbar } from "./components/common/navbar.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { startMission } from "./modeHistory/startMission.js";
import { URI_API } from "../utils/constants.js";

let activeVideo = false;
let socket;
export class Outside extends Phaser.Scene {
  constructor() {
    super({ key: "outside" });

    this.preloadCubicle();
  }
  preloadCubicle() {
    getEmployees().then((data) => {
      this.dataEmployees = data;
    });
  }
  preload() {
    this.load.plugin(
      "rexglowfilterpipelineplugin",
      "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexglowfilterpipelineplugin.min.js",
      true
    );
    this.load.scenePlugin({
      key: "rexuiplugin",
      url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
      sceneKey: "rexUI",
    });
    // this.load.image("floorExample", "assets/images/outside/facci-general.png");
    this.load.image("patioFacci", "assets/images/outside/patio-facci.png");
    this.load.image("streetEast", "assets/images/outside/calle-este.png");
    this.load.image("building", "assets/images/outside/edificio.png");
    this.load.image("plant", "assets/images/outside/planta.png");
    this.load.image("tree", "assets/images/outside/arbolExterior.png");
    this.load.image("tree2", "assets/images/outside/arbolExterior2.png");
    this.load.image(
      "ladoNortePuerta",
      "assets/images/outside/lado-norte-puerta.png"
    );
    this.load.image("ladoOeste", "assets/images/outside/lado-oeste.png");
    this.load.image("puertaFacci", "assets/images/outside/puertaFacci.png");
    this.load.image("puertaFacci2", "assets/images/outside/puertaFacci2.png");
    this.load.image("asientoPlanta", "assets/images/outside/asientoPlanta.png");
    /*     this.load.image("asientoFacci", "assets/images/outside/asientoFacci.png");*/
    this.load.image("calleBus", "assets/images/outside/calle-bus.png");
    this.load.image("limiteSur", "assets/images/outside/limite-sur-facci.png");
    this.load.image("mapaOutside", "assets/images/maps/outsideMap.png");
    this.load.image("puntoRed", "assets/images/puntoRed.png");
    this.load.image("bMapa", "assets/images/maps/bigMap.png");
    this.load.image("iconMap", "assets/images/maps/iconMission.png");
  }

  create() {
    // window.contador = 100;
    socket = io('http://localhost:3000' ,{ transports :['websocket'] }); // Cambia la URL según tu entorno

 

    // socket.on('actualizarPosicion', (data) => {
    //   console.log(`Recibido: ${data.id} en (${data.x}, ${data.y}, avatar: ${data.nameAvatar})`);
    //  this.avatar2.avatarPlayer.x = data.x;
    //   this.avatar2.avatarPlayer.y = data.y;
    //   this.avatar2.avatarPlayer.anims.play(data.nameAvatar, true);


    //   // Actualiza la posición del avatar o realiza otras acciones necesarias
    // });
    socket.on('actualizarPosicion', (data) => {
      console.log(`Recibido: ${data.id} en (${data.moving})`);
      if (data.moving == "left") {
        this.avatar2.moveTo(0, -200, "left");
        return;
      }
      if (data.moving == "right") {
        this.avatar2.moveTo(0, 200, "right");
        return;
      }
      if ( data.moving == "up") {
        this.avatar2.moveTo(-200, 0, "up");
        return;
      }
      if (data.moving == "down") {
        this.avatar2.moveTo(200, 0, "down");
        return;
      }
  
      this.avatar2.moveTo(0, 0, "turn");

 
      // Actualiza la posición del avatar o realiza otras acciones necesarias
    });
  
    socket.on('eliminarAvatar', (data) => {
      console.log(`Cliente desconectado: ${data.id}`);
      // Elimina el avatar o realiza otras acciones necesarias
    });
  
   


    if (window.loadAvatar) {
      window.loadAvatar = false;

      this.scene.restart();
    }

    if (window.avatarX == undefined && window.avatarY == undefined) {
      window.avatarX = 800;
      window.avatarY = 500;
    }
    window.avatarUpdateActivo = true;
    // this.cameras.main.fadeIn(500);
    this.cameras.main.transparent = true;

    // this.add.image(800, 500, "floorExample").setScale(0.75);
    this.add.image(862, 655, "patioFacci").setScale(0.75);

    this.add.image(62, 500, "streetEast").setScale(0.75);
    //plataformas
    let platform1 = this.physics.add.staticGroup();

    const building = crearPlataforma(782, 405, "building", platform1, 0.75);
    dimesionesPlataformaIndividual(building, 0.6, 90);
    const ladoNortePuerta = crearPlataforma(
      1466,
      345,
      "ladoNortePuerta",
      platform1,
      0.75
    );
    dimesionesPlataformaIndividual(ladoNortePuerta, 0.6, 80);
    const ladoOeste = crearPlataforma(1550, 405, "ladoOeste", platform1, 0.75);
    dimesionesPlataformaIndividual(ladoOeste, 0.6, 80);
    const puertaFacci = crearPlataforma(
      1466,
      500,
      "puertaFacci",
      platform1,
      0.75
    );
    dimesionesPlataformaIndividual(puertaFacci, 0.4, 0);
    const puertaFacci2 = crearPlataforma(
      517,
      535,
      "puertaFacci2",
      platform1,
      0.75
    );
    dimesionesPlataformaIndividual(puertaFacci2, 0.5, 1);

    const plant = crearPlataforma(330, 690, "plant", platform1, 0.75);
    dimesionesPlataformaIndividual(plant, 0.5, 10);
    const plant2 = crearPlataforma(530, 690, "plant", platform1, 0.75);
    dimesionesPlataformaIndividual(plant2, 0.5, 10);
    const plant3 = crearPlataforma(630, 690, "plant", platform1, 0.75);
    dimesionesPlataformaIndividual(plant3, 0.5, 10);
    const asientoPlanta = crearPlataforma(
      1270,
      560,
      "asientoPlanta",
      platform1,
      0.75
    );
    dimesionesPlataformaIndividual(asientoPlanta, 0.5, 10);
    const asientoFacci = crearPlataforma(
      1173,
      580,
      "asientoFacci",
      platform1,
      0.75
    );
    dimesionesPlataformaIndividual(asientoFacci, 0.5, 10);
    const calleBus = crearPlataforma(62, 410, "calleBus", platform1, 0.75);
    dimesionesPlataformaIndividual(calleBus, 0.9, 15);
    const limiteSur = crearPlataforma(
      800,
      767,
      "limiteSur",
      platform1,
      0.75
    ).setScale(3.55, 1);

    dimesionesPlataformaIndividual(limiteSur, 0.9, 15);

    const tree = crearPlataforma(1287, 705, "tree", platform1, 0.75);
    dimesionesPlataformaIndividual(tree, 0.2, -5);

    this.avatar = new Avatar(
      this,
      window.avatarX,
      window.avatarY,
      SIZE_AVATAR.v1_2
    );
    this.avatar2 = new Avatar(
      this,
      1246,
      650,
      SIZE_AVATAR.v1_2
    );
     // Envía la posición del avatar al servidor cada segundo (solo como ejemplo)
    

    

    const tree2 = crearPlataforma(1287, 665, "tree2", platform1, 0.75);
    dimesionesPlataformaIndividual(tree2, 0.2, 47);
    createButtonCircle(this, SCENE.floor1, puertaFacci, 930, 920, true);
    createButtonCircle(this, SCENE.second_floor1, puertaFacci2, 600, 800);
    //   createButtonCircle(this, "aula", escritorioD, 800, 500);

    this.physics.add.collider(this.avatar.avatarPlayer, platform1);
    // this.physics.add.collider(this.avatar.avatarPlayer, paredNorte);

    //**********************************************************************
    //********      hacer funcion en archivo aparte       ******************
    //********************************************************************** */
    let teclado = this.input.keyboard;
    // Configurar una acción para la tecla "i"
    // Puedes ejecutar cualquier código que quieras cuando se presione la tecla "i"
    teclado.addKey(Phaser.Input.Keyboard.KeyCodes.I).on(
      "down",
      function (event) {
        showVideo();
      }.bind(this)
    );
    this.showVideo = async () => {
      try {
        await crearVideo(traslate("infoCubicle"), "avatarVideo1", this);
        await crearVideo(traslate("infoCubicle"), "avatarVideo2", this);
        // await aumentarZoom();
        // Aquí continúa con el código después de que ambos videos hayan terminado
      } catch (error) {
        console.error("Error:", error);
      }
    };

    //**********************************************************************
    //********      hacer funcion en archivo aparte       ******************
    //********************************************************************** */
    shortMap(this, "mapaOutside");
    bigMap(this);
    this.cameras.main.startFollow(this.avatar.avatarPlayer);

    this.cameras.main.zoom = 2;

    navbar(this, "outside");

    // endMission();
    if (window.user.actualMission === 1 && !window.missionActive) {
      startMission(this);
    }
    
  }

  update() {
    this.avatar.update();
    // socket.emit('enviarPosicion', { x: this.avatar.avatarPlayer.x, y: this.avatar.avatarPlayer.y , nameAvatar: "spriteGirl" });
     //enviar un socket diciendo up, down, left, right por mediode una variabe moving
    let moving;
    if (this.avatar.avatarPlayer.body.velocity.x > 0) {
      moving = "right";
    } else if (this.avatar.avatarPlayer.body.velocity.x < 0) {
      moving = "left";
    } else if (this.avatar.avatarPlayer.body.velocity.y > 0) {
      moving = "down";
    } else if (this.avatar.avatarPlayer.body.velocity.y < 0) {
      moving = "up";
    } else {
      moving = "stop";
    }
    // console.log(moving);
    socket.emit('enviarMovimiento', { moving: moving });
 
  }
}
// Manejar la desconexión del juego
window.addEventListener('beforeunload', () => {
  if (socket) {
    socket.disconnect();
  }
});