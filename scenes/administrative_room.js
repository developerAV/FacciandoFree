import { Avatar } from "./player.js";
import {
  crearPlataforma,
  dimesionesPlataforma,
  overlapPlataforma,
} from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";

export class AdministrativeRoom extends Phaser.Scene {
  constructor() {
    super({ key: "administrativeRoom" });
  }
  
  create() {
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
    this.physics.add.collider(this.avatar.avatarPlayer, plataformas);
    this.physics.add.collider(this.avatar.avatarPlayer, paredPlataforma);

    this.cameras.main.startFollow(this.avatar.avatarPlayer); // Configurar seguimiento de cámara al personaje
    this.cameras.main.zoom = 2;

    navbar(this, "administrativeRoom");
  }

  update() {
    this.avatar.update(this);
  }
}
