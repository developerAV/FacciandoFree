import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { SCENE, SIZE_AVATAR } from "../utils/constants.js";
import { mission1 } from "./modeHistory/missions/mission1.js";
import { getIndexMission } from "./modeHistory/infoMission.js";
import { crearCard } from "./module/card.js";

export class AdministrativeRoom extends Phaser.Scene {
  constructor() {
    super({ key: "administrativeRoom" });
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
  }

  async create() {
    window.avatarUpdateActivo = true
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    const plataformas = this.physics.add.staticGroup();
    const paredPlataforma = this.physics.add.staticGroup();
    const ptfmOverlap = this.physics.add.staticGroup();
    const paredes = this.physics.add.staticGroup();


    //paredes
    crearPlataforma(822, 400, "agua1", plataformas);
    this.add.image(800, 500, "piso").setScale(1.28);
    crearPlataforma(1056, 677, "paredDerechaBotton", paredes);
    crearPlataforma(1050, 322, "paredDerechaTop", paredes);
    dimesionesPlataforma(paredes);
    crearPlataforma(528, 497, "paredLeft", plataformas);
    crearPlataforma(638, 569, "paredMedioLeft", plataformas);
    crearPlataforma(793, 569, "paredMedioRigth", plataformas);
    crearPlataforma(800, 205, "paredSuperior", paredPlataforma, 0.996);

    crearPlataforma(590, 363, "copiadora", plataformas);
    crearPlataforma(1004, 600, "mesa2", plataformas);
    crearPlataforma(949, 305, "mesa1", plataformas);
    crearPlataforma(849, 350, "paredMedioTop", plataformas);
    navbar(this, "administrativeRoom");

    this.avatar = new Avatar(
      this,
      window.avatarX ?? window.user.position.x,
      window.avatarY ?? window.user.position.y,
      SIZE_AVATAR.v1_2
    );
    crearPlataforma(817, 500, "muro", plataformas);
    crearPlataforma(785, 782, "paredMedioRigth2", plataformas);

    //objetos
    crearPlataforma(582, 715, "agua", plataformas);
    crearPlataforma(1010, 243, "bote", plataformas);
    //crearPlataforma(680, 400, "bote1", plataformas);
    const mesa = crearPlataforma(740, 382, "mesa", plataformas);

    crearCard(this, window.dataEmployees[3], "decana", mesa, 700, 300);

    crearPlataforma(662, 691, "mesa3", plataformas);
    crearPlataforma(592, 788, "mesa4", plataformas);
    //crearPlataforma(785, 689, "poste", plataformas);
    const puerta = crearPlataforma(1028, 486, "redV", plataformas);

    crearPlataforma(800, 827, "paredRi", plataformas, 0.996);
    //crearPlataforma(730, 541, "bordeSuperiorPuerta", plataformas);
    this.add.image(730, 541, "bordeSuperiorPuerta");
    const mesa2Overlap = crearPlataforma(1004, 600, "mesa2", ptfmOverlap);
    const copiadoraOverlap = crearPlataforma(
      590,
      363,
      "copiadora",
      ptfmOverlap
    );
    const pared1Overlap = crearPlataforma(
      793,
      569,
      "paredMedioRigth",
      ptfmOverlap
    );
    const pared2Overlap = crearPlataforma(
      638,
      569,
      "paredMedioLeft",
      ptfmOverlap,
      0.996
    );

    dimesionesPlataforma(plataformas, 0.5, 22);
    dimesionesPlataforma(paredPlataforma, 1, -42);

    createButtonCircle(this, SCENE.floor1, puerta, 839, 786);

    this.physics.add.overlap(
      this.avatar.avatarPlayer,
      ptfmOverlap,
      () => {
        overlapPlataforma(this, copiadoraOverlap);
        overlapPlataforma(this, mesa2Overlap);

        overlapPlataforma(this, pared1Overlap);
        overlapPlataforma(this, pared2Overlap);
        // overlapPlataforma(this, paredMedia2Overlap)
      },
      null,
      this
    );

    this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    shortMap(this, "secreMap");
    bigMap(this);

    //mision 1
    if (window.missionActive && getIndexMission().index === "mission1", getIndexMission().step === "step3") {
      mission1(this);
    }

    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);
    this.physics.add.collider(this.avatar.avatarPlayer, paredes);
    navbar(this, SCENE.admin_room);
  }

  update() {
    this.avatar.update(this);
  }
}
