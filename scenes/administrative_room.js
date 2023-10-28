import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";
import { navbar } from "./components/common/navbar.js";

export class AdministrativeRoom extends Phaser.Scene {
  constructor() {
    super({ key: "administrativeRoom" });
  }

  create() {
    window.avatarUpdateActivo = true;
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    let plataformas = this.physics.add.staticGroup();
    let paredPlataforma = this.physics.add.staticGroup();

    //paredes
    this.add.image(800, 500, "piso").setScale(1.28);
    crearPlataforma(817, 500, "muro", paredPlataforma);
    crearPlataforma(1056, 676, "paredDerechaBotton", plataformas);
    crearPlataforma(1050, 322, "paredDerechaTop", plataformas);
    crearPlataforma(528, 497, "paredLeft", plataformas);
    crearPlataforma(638, 569, "paredMedioLeft", plataformas);
    crearPlataforma(793, 569, "paredMedioRigth", plataformas);
    crearPlataforma(785, 782, "paredMedioRigth2", plataformas);
    crearPlataforma(800, 205, "paredSuperior", plataformas, 0.996);

    //objetos
    crearPlataforma(582, 715, "agua", plataformas);
    crearPlataforma(800, 415, "agua1", plataformas);
    crearPlataforma(1010, 243, "bote", plataformas);
    crearPlataforma(680, 400, "bote1", plataformas);
    crearPlataforma(590, 363, "copiadora", plataformas);
    crearPlataforma(740, 382, "mesa", plataformas);
    crearPlataforma(949, 305, "mesa1", plataformas);
    crearPlataforma(1004, 600, "mesa2", plataformas);
    crearPlataforma(662, 691, "mesa3", plataformas);
    crearPlataforma(592, 788, "mesa4", plataformas);
    crearPlataforma(785, 689, "poste", plataformas);

    this.avatar = new Avatar(this, window.avatarX, window.avatarY, 1.3);
    crearPlataforma(849, 350, "paredMedioTop", plataformas);
    crearPlataforma(800, 827, "paredRi", plataformas, 0.996);
    //crearPlataforma(730, 541, "bordeSuperiorPuerta", plataformas);
    this.add.image(730, 541, "bordeSuperiorPuerta");

    plataformas.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.7,
        true
      );
      plataforma.body.setOffset(0, 30);
    });
    paredPlataforma.children.iterate((plataforma) => {
      plataforma.refreshBody();
      plataforma.body.setSize(
        plataforma.body.width * 1,
        plataforma.body.height * 0.6,
        true
      );
      plataforma.body.setOffset(0, 25);
    });

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
