export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, "dude");

    this.sprite = scene.physics.add.sprite(x, y, "dude").setScale(2);
    this.sprite.setCollideWorldBounds(true);
    this.cursors = scene.input.keyboard.createCursorKeys();
    this.sprite.body.allowGravity = false;

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
  }
  update() {
    if (this.cursors.left.isDown) {
      this.sprite.setVelocityX(-200);
      this.sprite.setVelocityY(0);
      this.sprite.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.sprite.setVelocityX(200);
      this.sprite.setVelocityY(0);
      this.sprite.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.sprite.setVelocityY(-200);
      this.sprite.setVelocityX(0);

      this.sprite.anims.play("up", true);
    } else if (this.cursors.down.isDown) {
      this.sprite.setVelocityY(200);
      this.sprite.setVelocityX(0);
      this.sprite.anims.play("down", true);
    } else {
      this.sprite.setVelocityY(0);
      this.sprite.setVelocityX(0);

      this.sprite.anims.play("turn");
    }
  }
}
