export class Avatar extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, scale) {
    super(scene, x, y, "dude", scale);

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
  }

  update() {
if(this.avatarUpdateActivo){

    if (this.cursors.left.isDown) {
      this.avatarPlayer.setVelocityY(0);
      this.avatarPlayer.setVelocityX(-200);
      this.avatarPlayer.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.avatarPlayer.setVelocityY(0);
      this.avatarPlayer.setVelocityX(200);
      this.avatarPlayer.anims.play("right", true);
    } else if (this.cursors.up.isDown) {
      this.avatarPlayer.setVelocityX(0);
      this.avatarPlayer.setVelocityY(-200);
      this.avatarPlayer.anims.play("up", true);
    } else if (this.cursors.down.isDown) {
      this.avatarPlayer.setVelocityX(0);
      this.avatarPlayer.setVelocityY(200);
      this.avatarPlayer.anims.play("down", true);
    } else {
      this.avatarPlayer.setVelocityY(0);
      this.avatarPlayer.setVelocityX(0);
      this.avatarPlayer.anims.play("turn");
    }
  }
}
}
