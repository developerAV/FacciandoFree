import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  dimesionesPlataformaIndividual,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
let activeVideo = false;

export class FloorHallway2 extends Phaser.Scene {
  constructor() {
    super({ key: "floorHallway2" });
  }

  create() {
    window.avatarUpdateActivo = true;
    this.cameras.main.fadeIn(500);

    const paredesSupeiores = this.physics.add.staticGroup();
    const plataformas = this.physics.add.staticGroup();

    this.add.image(590, 500, "pisoFloorHallway2").setScale(1);

    crearPlataforma(598, 137, "paredSuperiorFloorHallway2", paredesSupeiores);
    crearPlataforma(1161.5, 273, "esquinaSuperiorDerecha", paredesSupeiores);
    crearPlataforma(1306, 521, "salaEstudianteArriba", paredesSupeiores);

    crearPlataforma(1241, 409, "pared", plataformas);
    crearPlataforma(1466, 758, "paredLarga", plataformas);
    crearPlataforma(1446, 665, "muroFloor2", plataformas);
    crearPlataforma(1218, 900, "paredInferior", plataformas);
    crearPlataforma(138, 385, "faltante", paredesSupeiores);
    crearPlataforma(445, 370, "hueco", plataformas, 0.35);
    crearPlataforma(1000, 281, "banca", paredesSupeiores, 1.35);

    this.add.image(700, 256, "puerta").setScale(1.35);
    this.add.image(637, 256, "puerta2").setScale(1.35);
    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.3);

    crearPlataforma(554, 713, "cursos", plataformas);
    crearPlataforma(666, 481, "cachoFaltante", plataformas);
    crearPlataforma(382, 476, "paredCursoDerecha", plataformas);
    crearPlataforma(26, 369, "separadorCurso", plataformas);
    crearPlataforma(866, 531, "paredCursoIzquierda", plataformas);

    crearPlataforma(1181, 356, "escaleraArriba", plataformas);
    crearPlataforma(1205, 428, "escaleraAbajoAbajo", plataformas, 0.25);
    crearPlataforma(1181, 440, "escaleraAbajo", plataformas);

    crearPlataforma(990, 740, "sillaDeLado2", plataformas);
    crearPlataforma(990, 770, "sillaDeLado2", plataformas);
    crearPlataforma(990, 830, "sillaDeLado2", plataformas);
    crearPlataforma(990, 860, "sillaDeLado2", plataformas);

    crearPlataforma(1181, 565, "sillaFrontal", plataformas);
    crearPlataforma(1220, 565, "sillaFrontal", plataformas);
    crearPlataforma(1311, 565, "sillaFrontal", plataformas);
    crearPlataforma(1350, 565, "sillaFrontal", plataformas);
    crearPlataforma(1390, 577, "sillaDeLado", plataformas);
    crearPlataforma(1333, 580, "mesaHorizontal", plataformas, 0.5);
    crearPlataforma(1207, 580, "mesaHorizontal", plataformas, 0.5);
    const mesa = crearPlataforma(
      1010,
      750,
      "mesaVertical",
      paredesSupeiores,
      0.5
    );
    crearPlataforma(1197, 865, "mesasAbajo", plataformas);
    crearPlataforma(1438, 834, "mesaAbajoDerecha", plataformas);
    crearPlataforma(1438, 731, "mesaMedio", plataformas);
    crearPlataforma(1446, 760, "muroFloor2", plataformas);

    if (activeVideo) {
      crearVideo(mensaje.txtCubicle[window.lan], "avatarVideo", this, true);
    }

    this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    dimesionesPlataforma(plataformas, 0.5, 22);
    dimesionesPlataforma(paredesSupeiores, 1, -42);
    dimesionesPlataformaIndividual(mesa, 0.5, -22);

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredesSupeiores);
    navbar(this, "floorHallway2", 0.5);
  }

  update() {
    this.avatar.update(this);
  }
}
