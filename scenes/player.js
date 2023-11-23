export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, scale) {
    super(scene, x, y, "dude", scale);

    this.avatarPlayer = scene.physics.add.sprite(x, y, "dude").setScale(scale);

    this.avatarPlayer.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.avatarPlayer.body.allowGravity = false;

    if (!scene.anims.exists("turn"))
      scene.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 1 }],
        frameRate: 10,
      });

    if (!scene.anims.exists("up"))
      scene.anims.create({
        key: "up",
        frames: scene.anims.generateFrameNumbers("dude", {
          start: 10,
          end: 13,
        }),
        frameRate: 10,
        repeat: -1,
      });
    if (!scene.anims.exists("right"))
      scene.anims.create({
        key: "right",
        frames: scene.anims.generateFrameNumbers("dude", { start: 7, end: 9 }),
        frameRate: 10,
        repeat: -1,
      });

    if (!scene.anims.exists("left"))
      scene.anims.create({
        key: "left",
        frames: scene.anims.generateFrameNumbers("dude", { start: 4, end: 6 }),
        frameRate: 10,
        repeat: -1,
      });

    if (!scene.anims.exists("down"))
      scene.anims.create({
        key: "down",
        frames: scene.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1,
      });

    if (window.isMobile && window.avatarUpdateActivo) {
      this.botonMobile(scene);
    }
  }

  botonMobile(scene) {
    this.isDragging = false;
    this.maxRange = 90;

    this.buttonCentroX = 530;
    this.buttonCentroY = 620;

    scene.buttonContainer = scene.add.container(0, 0);
    scene.buttonContainer.setScrollFactor(0); //no se mueve con la camara

    scene.buttonPrimero = scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      90,
      0x505050,
      0.5
    );
    scene.buttonPrimero.setScrollFactor(0); //no se mueve con la camara
    scene.buttonPrimero.setStrokeStyle(1, 0xffffff);

    scene.buttonCentro = scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      25,
      0xf2f2f2,
      0.6
    );
    scene.buttonCentro.setScrollFactor(0);
    scene.buttonCentro.setStrokeStyle(4, 0xffffff);

    scene.buttonContainer.add(scene.buttonPrimero);
    scene.buttonContainer.add(scene.buttonCentro);

    const contenedorFondo = scene.add.graphics();
    contenedorFondo.fillStyle(0xfff);
    // contenedorFondo.fillRoundedRect(600, 800, 200, 100, 10);

    scene.buttonContainer.add(contenedorFondo);
    scene.buttonContainer.setDepth(1);
    scene.buttonContainer.setAlpha(1);

    const cursors = scene.input.keyboard.createCursorKeys();

    // Configurar eventos de inicio -de arrastre (ratón y tacto)
    scene.buttonCentro.setInteractive();
    scene.buttonCentro.on("pointerdown", (pointer) => {
      this.isDragging = true;
      this.pointerOffsetX = scene.buttonCentro.x - pointer.x;
      this.pointerOffsetY = scene.buttonCentro.y - pointer.y;
    });

    scene.input.on("pointermove", (pointer) => {
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

        scene.buttonCentro.x = this.newX;
        scene.buttonCentro.y = this.newY;
      }
    });
    scene.input.on("pointerup", () => {
      this.isDragging = false;
      scene.buttonCentro.x = this.buttonCentroX;
      scene.buttonCentro.y = this.buttonCentroY;
    });
  }

  update(scene) {

    //Para saber la ubicación del avatar en el mapa
    scene.puntoMapa.x = scene.avatar.avatarPlayer.x * scene.factorEscala-87;
    scene.puntoMapa.y = scene.avatar.avatarPlayer.y * scene.factorEscala;
 
    if (!window.avatarUpdateActivo) {
      return;
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
    // console.log(parseInt(this.avatarPlayer.x), parseInt(this.avatarPlayer.y));
    console.log("modo", window.mode);
    this.avatarPlayer.setVelocityY(x);
    this.avatarPlayer.setVelocityX(y);
    this.avatarPlayer.anims.play(direction, true);
  }
}
