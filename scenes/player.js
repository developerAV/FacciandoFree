export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, scale) {
    super(scene, x, y, "dude", scale);

    this.avatarPlayer = scene.physics.add.sprite(x, y, "dude").setScale(scale);
    // window.avatarUpdateActivo = true;

    this.avatarPlayer.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.avatarPlayer.body.allowGravity = false;

    scene.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 1 }],
      frameRate: 10,
    });
    scene.anims.create({
      key: "up",
      frames: scene.anims.generateFrameNumbers("dude", { start: 10, end: 13 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "right",
      frames: scene.anims.generateFrameNumbers("dude", { start: 7, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });
    scene.anims.create({
      key: "left",
      frames: scene.anims.generateFrameNumbers("dude", { start: 4, end: 6 }),
      frameRate: 10,
      repeat: -1,
    });
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
    this.maxRange = 70;

    this.buttonCentroX = 0;
    this.buttonCentroY = 0;
    // Rango máximo de arrastre
    // Crear el grupo de contenedores para la interfaz de usuario (UI)
    scene.buttonContainer = scene.add.container(0, 0);
    // Crear los botones y agregarlos al grupo de contenedores
    scene.buttonPrimero = scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      90,
      0x505050,
      0.5
    );
    scene.buttonCentro = scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      25,
      0xf2f2f2,
      0.6
    );
    scene.buttonPrimero.setStrokeStyle(1, 0xffffff);
    scene.buttonCentro.setStrokeStyle(4, 0xffffff);
    scene.buttonContainer.add(scene.buttonPrimero);
    scene.buttonContainer.add(scene.buttonCentro);
    const contenedorFondo = scene.add.graphics();
    contenedorFondo.fillStyle(0xfff);
    contenedorFondo.fillRoundedRect(600, 800, 200, 100, 10);
    scene.buttonContainer.add(contenedorFondo);
    scene.buttonContainer.setDepth(1);
    const cursors = scene.input.keyboard.createCursorKeys();

    scene.buttonContainer.setAlpha(1);

    scene.buttonCentro.setInteractive();

    // Configurar eventos de inicio -de arrastre (ratón y tacto)
    scene.buttonCentro.on("pointerdown", (pointer) => {
      this.isDragging = true;
      this.pointerOffsetX = scene.buttonCentro.x - pointer.x;
      this.pointerOffsetY = scene.buttonCentro.y - pointer.y;
    });

    scene.input.on("pointermove", (pointer) => {
      if (this.isDragging) {
        this.newX = pointer.x + this.pointerOffsetX;
        this.newY = pointer.y + this.pointerOffsetY;

        this.newX = Phaser.Math.Clamp(
          this.newX,
          this.buttonCentroX - this.maxRange,
          this.buttonCentroX + this.maxRange
        );
        this.newY = Phaser.Math.Clamp(
          this.newY,
          this.buttonCentroY - this.maxRange,
          this.buttonCentroY + this.maxRange
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
    if (!window.avatarUpdateActivo) {
      return;
    }

    if (window.isMobile) {
      this.offsetX = scene.cameras.main.scrollX;
      this.offsetY = scene.cameras.main.scrollY;
      if (scene.cameras.main.zoom === 2) {
        scene.buttonContainer.x = 400 + this.offsetX + 120;
        scene.buttonContainer.y = 1000 + this.offsetY - 370;
      } else {
        scene.buttonContainer.x = 200;
        scene.buttonContainer.y = 850;
      }

      if (!this.isDragging) {
        // Amortiguación para detenerse gradualmente
        this.avatarPlayer.setVelocityX(this.avatarPlayer.body.velocity.x * 0.9);
        this.avatarPlayer.setVelocityY(this.avatarPlayer.body.velocity.y * 0.9);
        
        this.moveTo(0, 0, "turn");
        return;
      }
      
      if (this.newX > this.buttonCentroX + 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje X
        const acceleration = 120; // Velocidad máxima
        const delta = this.newX - this.buttonCentroX;
        const factor = delta / this.maxRange;
        const velocityX = acceleration * factor;
        this.moveTo(0, velocityX, "right");
        return;
      }
      
      if (this.newX < this.buttonCentroX - 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje X en la dirección opuesta
        const acceleration = -120; // Velocidad máxima
        const delta = this.buttonCentroX - this.newX; // Cambio de dirección
        const factor = delta / this.maxRange;
        const velocityX = acceleration * factor;
        this.moveTo(0, velocityX, "left");
        return;
      }
      
      if (this.newY > this.buttonCentroY + 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje Y
        const acceleration = 120; // Velocidad máxima
        const delta = this.newY - this.buttonCentroY;
        const factor = delta / this.maxRange;
        const velocityY = acceleration * factor;
        this.moveTo(velocityY, 0, "down");
        return;
      }
      
      if (this.newY < this.buttonCentroY - 12) {
        // Interpolar linealmente hacia la velocidad máxima en el eje Y en la dirección opuesta
        const acceleration = -120; // Velocidad máxima
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
    this.avatarPlayer.setVelocityY(x);
    this.avatarPlayer.setVelocityX(y);
    this.avatarPlayer.anims.play(direction, true);
  }
}
