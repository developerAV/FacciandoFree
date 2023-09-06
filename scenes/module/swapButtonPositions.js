// Función para intercambiar las posiciones de los botones
export function swapButtonPositions(scene, btn1, btn2) {
  scene.tweens.add({
    targets: btn1,
    x: btn2.x,
    y: btn2.y,
    duration: 300, // Duración de la transición en milisegundos
    ease: "Power2", // Tipo de interpolación (puedes ajustarlo según tus preferencias)
  });

  scene.tweens.add({
    targets: btn2,
    x: btn1.x,
    y: btn1.y,
    duration: 300,
    ease: "Power2",
  });

  scene.isSwapped = !scene.isSwapped; // Invierte el estado de isSwapped
}
// Función para intercambiar las posiciones de los botones
export function swapButtonPositionsLan(scene, btn1, btn2) {
  scene.tweens.add({
    targets: btn1,
    x: btn2.x,
    y: btn2.y,
    duration: 300, // Duración de la transición en milisegundos
    ease: "Power2", // Tipo de interpolación (puedes ajustarlo según tus preferencias)
  });

  scene.tweens.add({
    targets: btn2,
    x: btn1.x,
    y: btn1.y,
    duration: 300,
    ease: "Power2",
  });

  scene.isSwappedLan = !scene.isSwappedLan; // Invierte el estado de isSwapped
}
