import { COLORS } from "../utils/constants.js";

export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, scale) {
    super(scene, x, y, scale, window.avatarSprite);
    this.avatarPlayer = this.scene.physics.add
      .sprite(x, y, window.avatarSprite)
      .setScale(scale);

    this.scene = scene;
    this.create();
    this.update();
  }

  create() {
    this.avatarPlayer.setCollideWorldBounds(true);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.avatarPlayer.body.allowGravity = false;

    if (!this.scene.anims.exists("turn"))
      this.scene.anims.create({
        key: "turn",
        frames: [{ key: window.avatarSprite, frame: 1 }],
        frameRate: 10,
      });

    if (!this.scene.anims.exists("up"))
      this.scene.anims.create({
        key: "up",
        frames: this.scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 9,
          end: 11,
        }),
        frameRate: 10,
        repeat: -1,
      });
    if (!this.scene.anims.exists("right"))
      this.scene.anims.create({
        key: "right",
        frames: this.scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 6,
          end: 8,
        }),
        frameRate: 10,
        repeat: -1,
      });

    if (!this.scene.anims.exists("left"))
      this.scene.anims.create({
        key: "left",
        frames: this.scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 3,
          end: 5,
        }),
        frameRate: 10,
        repeat: -1,
      });

    if (!this.scene.anims.exists("down"))
      this.scene.anims.create({
        key: "down",
        frames: this.scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 0,
          end: 2,
        }),
        frameRate: 10,
        repeat: -1,
      });

    if (window.isMobile && window.avatarUpdateActivo) {
      this.botonMobile(this.scene);
    }
    if (window.runTime) {
      this.runTime(this.scene);
    }
  }

  botonMobile() {
    this.isDragging = false;
    this.maxRange = 90;

    this.buttonCentroX = 530;
    this.buttonCentroY = 620;

    this.scene.buttonContainer = this.scene.add.container(0, 0);
    this.scene.buttonContainer.setScrollFactor(0); //no se mueve con la camara

    this.scene.buttonPrimero = this.scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      90,
      0x505050,
      0.5
    );
    this.scene.buttonPrimero.setScrollFactor(0); //no se mueve con la camara
    this.scene.buttonPrimero.setStrokeStyle(1, 0xffffff);

    this.scene.buttonCentro = this.scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      25,
      0xf2f2f2,
      0.6
    );
    this.scene.buttonCentro.setScrollFactor(0);
    this.scene.buttonCentro.setStrokeStyle(4, 0xffffff);

    this.scene.buttonContainer.add(this.scene.buttonPrimero);
    this.scene.buttonContainer.add(this.scene.buttonCentro);

    const contenedorFondo = this.scene.add.graphics();
    contenedorFondo.fillStyle(0xfff);
    // contenedorFondo.fillRoundedRect(600, 800, 200, 100, 10);

    this.scene.buttonContainer.add(contenedorFondo);
    this.scene.buttonContainer.setDepth(1);
    this.scene.buttonContainer.setAlpha(1);

    const cursors = this.scene.input.keyboard.createCursorKeys();

    // Configurar eventos de inicio -de arrastre (ratón y tacto)
    this.scene.buttonCentro.setInteractive();
    this.scene.buttonCentro.on("pointerdown", (pointer) => {
      this.isDragging = true;
      this.pointerOffsetX = this.scene.buttonCentro.x - pointer.x;
      this.pointerOffsetY = this.scene.buttonCentro.y - pointer.y;
    });

    this.scene.input.on("pointermove", (pointer) => {
      if (this.isDragging) {
        this.newX = pointer.x + this.pointerOffsetX;
        this.newY = pointer.y + this.pointerOffsetY;

        // Las siguientes líneas definen el círculo más grande como el contenedor
        var containerRadius = this.maxRange; // Define el radio del círculo más grande
        var deltaX = this.newX - this.buttonCentroX;
        var deltaY = this.newY - this.buttonCentroY;
        var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        if (distance > containerRadius) {
          var angle = Math.atan2(deltaY, deltaX);
          this.newX = this.buttonCentroX + containerRadius * Math.cos(angle);
          this.newY = this.buttonCentroY + containerRadius * Math.sin(angle);
        }

        // Ahora limita las coordenadas del joystick dentro del círculo más grande
        this.newX = Phaser.Math.Clamp(
          this.newX,
          this.buttonCentroX - this.maxRange + 2,
          this.buttonCentroX + this.maxRange + 2
        );
        this.newY = Phaser.Math.Clamp(
          this.newY,
          this.buttonCentroY - this.maxRange + 2,
          this.buttonCentroY + this.maxRange + 2
        );

        this.scene.buttonCentro.x = this.newX;
        this.scene.buttonCentro.y = this.newY;
      }
    });
    this.scene.input.on("pointerup", () => {
      this.isDragging = false;
      this.scene.buttonCentro.x = this.buttonCentroX;
      this.scene.buttonCentro.y = this.buttonCentroY;
    });
  }
  update() {
    if (!window.avatarUpdateActivo) {
      return;
    }
    //Para saber la ubicación del avatar en el mapa
    try {
      this.scene.puntoMapa.x =
        this.scene.avatar.avatarPlayer.x * this.scene.factorEscala - 87;
      this.scene.puntoMapa.y =
        this.scene.avatar.avatarPlayer.y * this.scene.factorEscala;
    } catch (error) {
      // console.log("Error en update avatar", error);
    }



    if (window.isMobile) {
      if (!this.isDragging) {
        // Amortiguación para detenerse gradualmente
        this.avatarPlayer.setVelocityX(this.avatarPlayer.body.velocity.x * 0.9);
        this.avatarPlayer.setVelocityY(this.avatarPlayer.body.velocity.y * 0.9);

        this.moveTo(0, 0, "turn");
        return;
      }

      if (this.newX > this.buttonCentroX + 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje X
        const acceleration = 160; // Velocidad máxima
        const delta = this.newX - this.buttonCentroX;
        const factor = delta / this.maxRange;
        const velocityX = acceleration * factor;
        this.moveTo(0, velocityX, "right");
        return;
      }

      if (this.newX < this.buttonCentroX - 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje X en la dirección opuesta
        const acceleration = -160; // Velocidad máxima
        const delta = this.buttonCentroX - this.newX; // Cambio de dirección
        const factor = delta / this.maxRange;
        const velocityX = acceleration * factor;
        this.moveTo(0, velocityX, "left");
        return;
      }

      if (this.newY > this.buttonCentroY + 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje Y
        const acceleration = 160; // Velocidad máxima
        const delta = this.newY - this.buttonCentroY;
        const factor = delta / this.maxRange;
        const velocityY = acceleration * factor;
        this.moveTo(velocityY, 0, "down");
        return;
      }

      if (this.newY < this.buttonCentroY - 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje Y en la dirección opuesta
        const acceleration = -160; // Velocidad máxima
        const delta = this.buttonCentroY - this.newY; // Cambio de dirección
        const factor = delta / this.maxRange;
        const velocityY = acceleration * factor;
        this.moveTo(velocityY, 0, "up");
        return;
      }
      return;
    }

    if (this.cursors.left.isDown) {
      this.moveTo(0, -200, "left");
      return;
    }
    if (this.cursors.right.isDown) {
      this.moveTo(0, 200, "right");
      return;
    }
    if (this.cursors.up.isDown) {
      this.moveTo(-200, 0, "up");
      return;
    }
    if (this.cursors.down.isDown) {
      this.moveTo(200, 0, "down");
      return;
    }

    this.moveTo(0, 0, "turn");
  }
  moveTo(x, y, direction) {
    console.log(parseInt(this.avatarPlayer.x), parseInt(this.avatarPlayer.y));
    this.avatarPlayer.setVelocityY(x);
    this.avatarPlayer.setVelocityX(y);
    this.avatarPlayer.anims.play(direction, true);
  }

  runTime(scene = this.scene) {
    if (!window.runTime) {
      if (this.scene.box) {
        this.scene.box.destroy();
        this.scene.textoTiempo.destroy();
        this.scene.boxBg.destroy();
        this.scene.time.removeAllEvents();
      }
      return;
    }
    // Cronómetrocameras.main.zoom

    let x = 405; //zoom == 2
    let y = 305; //zoom == 2
    let scala = 0.75;

    if (window.zoom == 1.5) {
      x = 272; //zoom == 1.5s
      y = 235; //zoom == 1.5
      scala = 0.9;
    }
    if (window.zoom == 1) {
      scala = 1.5;
      x = 10; //zoom == 1
      y = 100; //zoom == 1
    }
    this.scene.box = scene.add.container(x, y);
    this.scene.box.setName("box");
    this.scene.boxBg = scene.add.graphics();
    this.scene.boxBg.fillStyle(COLORS.red, 0.75);
    this.scene.boxBg.fillRoundedRect(0, 0, 150, 50, 5);
    this.scene.box.add(this.scene.boxBg);

    this.scene.textoTiempo = this.scene.add.text(
      10,
      10,
      `Tiempo: ${window.time}`,
      {
        fontFamily: "Arial",
        fontSize: 48,
        color: "#ffffff",
      }
    ).setScale(0.5);
    this.scene.time.addEvent({
      delay: 1000,
      callback: () => {
        window.time += 1;
        this.scene.textoTiempo.setText("Tiempo: " + window.time);
      },
      callbackScope: scene,
      loop: true,
    });

    this.scene.textoTiempo.setScrollFactor(0);
    //this.scene.textoTiempo.setScale(scala);
    this.scene.box.add(this.scene.textoTiempo).setScrollFactor(0);
    this.scene.box.setDepth(200);
    this.scene.box.setScale(scala);
  }
}
