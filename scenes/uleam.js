export class Uleam extends Phaser.Scene {
    constructor() {

      super({ key: "uleam" });
    }
    preload() {
        this.load.image("logoUleam1", "assets/images/logos/ULEAM_color.png");
        
     
    }
    create() {
        this.cameras.main.fadeIn(500);
        //3 segundos
       //fondo blanco
        this.add.rectangle(
            this.cameras.main.width / 2, // Posición X centrada en la pantalla
            this.cameras.main.height / 2,
            this.cameras.main.width,
            this.cameras.main.height,
            0xffffff
        );

        this.add.image(800, 500, "logoUleam1").setScale(0.5);
        
        this.add.text(800, 870, "Facultad de Ciencias de la vida y tecnología", {
            fontFamily: "font1",
            fontSize: "30px",
            color: "#000",
            align: "center",
        }).setOrigin(0.5);
        this.add.text(800, 900, "Ingeniería en TI", {
            fontFamily: "font1",
            fontSize: "30px",
            color: "#000",
            align: "center",
        }).setOrigin(0.5);
        //obtener año actual
        var fecha = new Date();
        var ano = fecha.getFullYear();

        this.add.text(800, 930, ano, {
            fontFamily: "font1",
            fontSize: "30px",
            color: "#000",
            align: "center",
        }).setOrigin(0.5);

        this.time.delayedCall(3000, () => {
            this.scene.start("loading");
        });
      
    }
  }
  