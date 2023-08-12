import { Avatar } from "./player.js";
import { crearPlataforma } from "./module/platform.js";

export class AdministrativeRoom extends Phaser.Scene {
  constructor() {
    super({ key: "administrativeRoom" });
  }

  preload() {
    //piso
    this.load.image("piso", "assets/images/administrative_room/piso.png");
    this.load.image(
      "areaAdmin",
      "assets/images/administrative_room/administrative_room.png"
    );

    //paredes
    this.load.image(
      "muro",
      "assets/images/administrative_room/paredes/muro.png"
    );
    this.load.image(
      "paredDerechaBotton",
      "assets/images/administrative_room/paredes/paredDerechaBotton.png"
    );
    this.load.image(
      "paredDerechaTop",
      "assets/images/administrative_room/paredes/paredDerechaTop.png"
    );
    this.load.image(
      "paredes",
      "assets/images/administrative_room/paredes/paredes.png"
    );
    this.load.image(
      "paredLeft",
      "assets/images/administrative_room/paredes/paredLeft.png"
    );
    this.load.image(
      "paredMedioLeft",
      "assets/images/administrative_room/paredes/paredMedioLeft.png"
    );
    this.load.image(
      "paredMedioRigth",
      "assets/images/administrative_room/paredes/paredMedioRigth.png"
    );
    this.load.image(
      "paredMedioRigth2",
      "assets/images/administrative_room/paredes/paredMedioRigth2.png"
    );
    this.load.image(
      "paredMedioTop",
      "assets/images/administrative_room/paredes/paredMedioTop.png"
    );
    this.load.image(
      "paredRi",
      "assets/images/administrative_room/paredes/paredRi.png"
    );
    this.load.image(
      "paredSuperior",
      "assets/images/administrative_room/paredes/paredSuperior.png"
    );
    this.load.image(
      "bordeSuperiorPuerta",
      "assets/images/administrative_room/paredes/bordeSuperiorPuerta.png"
    );

    //
    this.load.image("agua", "assets/images/administrative_room/agua.png");
    this.load.image("agua1", "assets/images/administrative_room/agua1.png");
    this.load.image("bote", "assets/images/administrative_room/bote.png");
    this.load.image("bote1", "assets/images/administrative_room/bote1.png");
    this.load.image(
      "copiadora",
      "assets/images/administrative_room/copiadora.png"
    );
    this.load.image("mesa", "assets/images/administrative_room/mesa.png");
    this.load.image("mesa1", "assets/images/administrative_room/mesa1.png");
    this.load.image("mesa2", "assets/images/administrative_room/mesa2.png");
    this.load.image("mesa3", "assets/images/administrative_room/mesa3.png");
    this.load.image("mesa4", "assets/images/administrative_room/mesa4.png");
    this.load.image("poste", "assets/images/administrative_room/poste.png");
  }

  create() {
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

    this.avatar = new Avatar(this, 800, 200);
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
  }

  update() {
    this.avatar.update();
  }
}
