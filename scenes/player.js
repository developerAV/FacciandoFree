export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, scale) {
    super(scene, x, y, scale, window.avatarSprite);
    this.avatarPlayer = scene.physics.add
      .sprite(x, y, window.avatarSprite)
      .setScale(scale);
    this.avatarPlayer.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.avatarPlayer.body.allowGravity = false;

    if (!scene.anims.exists("turn"))
      scene.anims.create({
        key: "turn",
        frames: [{ key: window.avatarSprite, frame: 1 }],
        frameRate: 10,
      });

    if (!scene.anims.exists("up"))
      scene.anims.create({
        key: "up",
        frames: scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 9,
          end: 11,
        }),
        frameRate: 10,
        repeat: -1,
      });
    if (!scene.anims.exists("right"))
      scene.anims.create({
        key: "right",
        frames: scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 6,
          end: 8,
        }),
        frameRate: 10,
        repeat: -1,
      });

    if (!scene.anims.exists("left"))
      scene.anims.create({
        key: "left",
        frames: scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 3,
          end: 5,
        }),
        frameRate: 10,
        repeat: -1,
      });

    if (!scene.anims.exists("down"))
      scene.anims.create({
        key: "down",
        frames: scene.anims.generateFrameNumbers(window.avatarSprite, {
          start: 0,
          end: 2,
        }),
        frameRate: 10,
        repeat: -1,
      });

    if (window.isMobile && window.avatarUpdateActivo) {
      this.botonMobile(scene);
    }
    if (window.runTime) {
      this.runTime(scene);
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
    try {
      scene.puntoMapa.x = scene.avatar.avatarPlayer.x * scene.factorEscala - 87;
      scene.puntoMapa.y = scene.avatar.avatarPlayer.y * scene.factorEscala;
    } catch (error) {
      // console.log("Error en update avatar", error);
    }

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
    //console.log(parseInt(this.avatarPlayer.x), parseInt(this.avatarPlayer.y));
    this.avatarPlayer.setVelocityY(x);
    this.avatarPlayer.setVelocityX(y);
    this.avatarPlayer.anims.play(direction, true);
  }

  runTime(scene) {
    // Cronómetrocameras.main.zoom
    //    const zoom = window.zoom;
    let x = 450; //zoom == 2
    let y = 325; //zoom == 2
    if (window.zoom === 1.5) {
      x = 800; //zoom == 1.5
      y = 500; //zoom == 1.5
    }
    if (window.zoom === 1) {
      x = 800; //zoom == 1
      y = 500; //zoom == 1
    }
    scene.textoTiempo = scene.add.text(x, y, `Tiempo: ${window.time}`, {
      fontFamily: "Arial",
      fontSize: 24,
      color: "#ffffff",
    });
    scene.time.addEvent({
      delay: 1000,
      callback: () => {
        window.time += 1;
        scene.textoTiempo.setText("Tiempo: " + window.time);
      },
      callbackScope: scene,
      loop: true,
    });
    scene.textoTiempo.setScrollFactor(0);
    scene.textoTiempo.setScale(0.75);
  }
}
