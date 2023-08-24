export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, scale) {
    super(scene, x, y, "dude", scale);
// Verificar si se está ejecutando en un dispositivo móvil (celular o tableta)

    this.avatarPlayer = scene.physics.add.sprite(x, y, "dude").setScale(scale);
    this.avatarUpdateActivo = true;

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


    if (window.isMobile) {
      this.botonMobile(scene);
      }
  }
  
  botonMobile(scene) {
    this.isDragging = false;
    this.maxRange = 35;

    this.buttonCentroX = 0;
    this.buttonCentroY = 0;
    // Rango máximo de arrastre
    // Crear el grupo de contenedores para la interfaz de usuario (UI)
    scene.buttonContainer = scene.add.container(0, 0);
    // Crear los botones y agregarlos al grupo de contenedores
    scene.buttonPrimero = scene.add.circle(
      this.buttonCentroX,
      this.buttonCentroY,
      70,
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
    contenedorFondo.fillStyle(0xfff); // Marrón oscuro, puedes ajustar el color según tus preferencias
    contenedorFondo.fillRoundedRect(600, 800, 200, 100, 10);
    scene.buttonContainer.add(contenedorFondo);
    scene.buttonContainer.setDepth(1);
    const cursors = scene.input.keyboard.createCursorKeys();

    scene.buttonContainer.setAlpha(1);
    /*    scene.input.keyboard.on("keydown", (event) => {
      if (event.key === "ArrowRight") {
        scene.buttonCentro.x = this.buttonCentroX + this.maxRange; // Mueve el botón hacia la derecha
        scene.buttonCentro.y = buttonCentroY; // Mueve el botón hacia la derecha
      } else if (event.key === "ArrowLeft") {
        scene.buttonCentro.x = this.buttonCentroX - this.maxRange; // Mueve el botón hacia la izquierda
        scene.buttonCentro.y = buttonCentroY; // Mueve el botón hacia la izquierda
      } else if (event.key === "ArrowUp") {
        scene.buttonCentro.y = buttonCentroY - this.maxRange; //4 Mueve el botón hacia arriba
        scene.buttonCentro.x = this.buttonCentroX; // Mueve el botón hacia arriba
      } else if (event.key === "ArrowDown") {
        scene.buttonCentro.y = buttonCentroY + this.maxRange; // Mueve el botón hacia abajo
        scene.buttonCentro.x = this.buttonCentroX; // Mueve el botón hacia abajo
      }
    }); */
    /* scene.input.keyboard.on("keyup", (event) => {
      if (
        event.key === "ArrowRight" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowUp" ||
        event.key === "ArrowDown"
      ) {
        // Detener el movimiento estableciendo la velocidad en 0 o realizando otras acciones según tus necesidades.
        // Por ejemplo, para detener el movimiento, puedes establecer la velocidad en 0:
        scene.buttonCentro.y = this.buttonCentroY; // Mueve el botón hacia abajo
        scene.buttonCentro.x = this.buttonCentroX; // Mueve el botón hacia abajo
      }
    });
  */
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

  

    if (!this.avatarUpdateActivo) {
      return;
    }
   
    /**/

if (window.isMobile) {
    this.offsetX = scene.cameras.main.scrollX;
    this.offsetY = scene.cameras.main.scrollY;
if(scene.cameras.main.zoom === 2){
    scene.buttonContainer.x = 400 + this.offsetX + 120;
    scene.buttonContainer.y = 1000 + this.offsetY - 370;
  }else{
    scene.buttonContainer.x = 200 ;
    scene.buttonContainer.y = 850 ;
  }


   if (!this.isDragging) {
      this.stopMovement();
      return;
    }
   if (this.newX > this.buttonCentroX + 12) {
      this.moveRight();
      return;
    }
    if (this.newX < this.buttonCentroX - 12) {
      this.moveLeft();
      return;
    }
    if (this.newY > this.buttonCentroY) {
      this.moveDown();
      return;
    }
    if (this.newY < this.buttonCentroY) {
      this.moveUp();
      return;
    }
} else {

 if (this.cursors.left.isDown) {
      this.moveLeft();
      return;
    }
    if (this.cursors.right.isDown || this.newX > this.buttonCentroX + 12) {
      this.moveRight();
      return;
    }
    if (this.cursors.up.isDown) {
      this.moveUp();
      return;
    }
    if (this.cursors.down.isDown) {
      this.moveDown();
      return;
    } 
}

   

    
    this.stopMovement();
  }

  moveLeft(scene = this) {
    this.avatarPlayer.setVelocityY(0);
    this.avatarPlayer.setVelocityX(-200);
    this.avatarPlayer.anims.play("left", true);
  }

  moveRight(scene = this) {
    this.avatarPlayer.setVelocityY(0);
    this.avatarPlayer.setVelocityX(200);
    this.avatarPlayer.anims.play("right", true);
  }

  moveUp(scene = this) {
    this.avatarPlayer.setVelocityX(0);
    this.avatarPlayer.setVelocityY(-200);
    this.avatarPlayer.anims.play("up", true);
  }

  moveDown(scene = this) {
    this.avatarPlayer.setVelocityX(0);
    this.avatarPlayer.setVelocityY(200);
    this.avatarPlayer.anims.play("down", true);
  }

  stopMovement(scene = this) {
    this.avatarPlayer.setVelocityY(0);
    this.avatarPlayer.setVelocityX(0);
    this.avatarPlayer.anims.play("turn");
  }
}
