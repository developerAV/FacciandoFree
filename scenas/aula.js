export class Aula extends Phaser.Scene {
  constructor() {
    super({ key: "aula" });
  }

  preload() {
    this.load.image("background2", "assets/images/img_aula/piso.png");
    this.load.image("paredAula", "assets/images/img_aula/pared.png");
    this.load.image("mesaAula", "assets/images/img_aula/mesas.png");
    this.load.image("escritorioAula", "assets/images/img_aula/escritorio.png");
    this.load.image("pizarraAula", "assets/images/img_aula/pizarra.png");
  }

  create() {
    // Para iniciar con un desenfoque
    this.cameras.main.fadeIn(500);

    const scale = 1.8;

    const fondoaula = this.add.image(800, 500, "background2").setScale(scale);

    const platforms = this.physics.add.staticGroup();

    crearPlataforma(800, 500, 'paredAula', platforms, scale);
    crearPlataforma(800, 900, 'mesaAula', platforms, scale);
    crearPlataforma(800, 770, 'mesaAula', platforms, scale);
    crearPlataforma(800, 640, 'mesaAula', platforms, scale);
    crearPlataforma(800, 510, 'mesaAula', platforms, scale);
    crearPlataforma(800, 390, 'mesaAula', platforms, scale);
    crearPlataforma(1000, 260, 'escritorioAula', platforms, scale);
    crearPlataforma(800, 130, 'pizarraAula', platforms, scale);
  }
}

function crearPlataforma(x, y, imagen, group, scale) {
  const plataforma = group.create(x, y, imagen).setScale(scale);
  return plataforma;
}
