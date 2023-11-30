import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";
import { shortMap, bigMap } from "./components/common/map.js";
import { startMission } from "./modeHistory/startMission.js";
import { createButtonCircle } from "./components/common/buttonCircle.js";
import { SCENE } from "../utils/constants.js";
import { crearCard, crearCard2 } from "./module/card.js";
import { putUser } from "../services/user.js";

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
    window.avatarUpdateActivo = true;
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    const plataformas = this.physics.add.staticGroup();
    const paredPlataforma = this.physics.add.staticGroup();
    const ptfmOverlap = this.physics.add.staticGroup();

    //paredes
    crearPlataforma(822, 400, "agua1", plataformas);
    this.add.image(800, 500, "piso").setScale(1.28);
    crearPlataforma(1056, 677, "paredDerechaBotton", plataformas);
    crearPlataforma(1050, 322, "paredDerechaTop", plataformas);
    crearPlataforma(528, 497, "paredLeft", plataformas);
    crearPlataforma(638, 569, "paredMedioLeft", plataformas);
    crearPlataforma(793, 569, "paredMedioRigth", plataformas);
    crearPlataforma(800, 205, "paredSuperior", paredPlataforma, 0.996);

    crearPlataforma(590, 363, "copiadora", plataformas);
    crearPlataforma(1004, 600, "mesa2", plataformas);
    crearPlataforma(949, 305, "mesa1", plataformas);
    crearPlataforma(849, 350, "paredMedioTop", plataformas);
    navbar(this, "administrativeRoom");

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.3);
    crearPlataforma(817, 500, "muro", plataformas);
    crearPlataforma(785, 782, "paredMedioRigth2", plataformas);

    //objetos
    crearPlataforma(582, 715, "agua", plataformas);
    crearPlataforma(1010, 243, "bote", plataformas);
    //crearPlataforma(680, 400, "bote1", plataformas);
    crearPlataforma(740, 382, "mesa", plataformas);
    crearPlataforma(662, 691, "mesa3", plataformas);
    crearPlataforma(592, 788, "mesa4", plataformas);
    //crearPlataforma(785, 689, "poste", plataformas);
    const puerta = crearPlataforma(1053, 486, "redV", plataformas);

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

    shortMap(this, "mapaOutside");
    bigMap(this);

    if (window.user.actualMission === 1 && window.missionActive) {
      const avatar2 = crearPlataforma(736, 697, "dude", plataformas).setScale(
        1.3
      );
      this.physics.add.collider(this.avatar.avatarPlayer, avatar2, () => {
        crearCard2(this, "hola");
      });

      this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
      this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);
      //startMission(this);
    }
/* 
    await putUser(window.user._id, {
      scene: SCENE.admin_room,
      position: { x: 1000, y: 486 },
    });
 */
    //  el cronómetro
  }

  update() {
    this.avatar.update(this);
  }
}
