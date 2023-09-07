export async function swapButtonPositionsLan(scene, btn1, btn2) {
  await scene.tweens.add({
    targets: btn1,
    x: btn2.x,
    y: btn2.y,
    duration: 300,
    ease: "Power2",
  });
  await scene.tweens.add({
    targets: btn2,
    x: btn1.x,
    y: btn1.y,
    duration: 300,
    ease: "Power2",
  });
}
