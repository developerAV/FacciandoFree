export const buttonEnglish = (btnLanguage, scene) => {
  let btnEnglish;
  let btnSpanish;
  if (window.lan === "es") {
    btnSpanish = scene.add.image(1407, 70, "btnSpanish").setScale(0.05);
    btnEnglish = scene.add.image(1437, 125, "btnEnglish").setScale(0.05);
  } else {
    btnEnglish = scene.add.image(1407, 70, "btnEnglish").setScale(0.05);
    btnSpanish = scene.add.image(1437, 125, "btnSpanish").setScale(0.05);
  }
  btnEnglish.visible = false;
  btnSpanish.visible = false;
  let isSwapped = false;

  btnLanguage.on("pointerdown", () => {
    if (btnEnglish.visible || btnSpanish.visible) {
      btnEnglish.visible = false;
      btnSpanish.visible = false;
      return;
    }
    btnEnglish.visible = true;
    btnSpanish.visible = true;
  });
  // Función para intercambiar las posiciones de los botones
  function swapButtonPositions(btn1, btn2) {
    scene.tweens.add({
      targets: btn1,
      x: btn2.x,
      y: btn2.y,
      duration: 100, // Duración de la transición en milisegundos
      ease: "Power2", // Tipo de interpolación (puedes ajustarlo según tus preferencias)
    });

    scene.tweens.add({
      targets: btn2,
      x: btn1.x,
      y: btn1.y,
      duration: 100,
      ease: "Power2",
    });

    isSwapped = !isSwapped; // Invierte el estado de isSwapped
  }

  // Evento de clic para btnEnglish o btnSpanish
  btnEnglish.setInteractive();
  btnEnglish.on("pointerdown", () => {
    if (btnEnglish.x === 1437 && btnEnglish.y === 125) {
      // Si btnEnglish está en la posición (1400, 155), entonces intercambia posiciones
      swapButtonPositions.call(scene, btnEnglish, btnSpanish);
    }
    window.lan = "en";

    scene.scene.restart();
  });

  btnSpanish.setInteractive();
  btnSpanish.on("pointerdown", () => {
    if (!isSwapped) {
      // Si los botones no han sido intercambiados, entonces intercambia posiciones
      swapButtonPositions.call(scene, btnEnglish, btnSpanish);
    }
    window.lan = "es";
    scene.scene.restart();
  });
};
