export class Aula extends Phaser.Scene {
  constructor() {
    super({ key: "aula" });
  }

preload() {

    this.load.image("background2", "assets/images/img_laboratorio/fondo.png");
};


create() {
  //Para iniciar con un desenfoque
  this.cameras.main.fadeIn(500);

var fondoaula= this.add.image(800, 500, "background2");
fondoaula.setScale(1.8);
};

}