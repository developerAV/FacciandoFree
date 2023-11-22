export const shortMap = (scene, mapa) => {
    scene.factorEscala = 0.125; //200 / 1600;//= 0.125
    
    let miniMapContainer = scene.add.container(1130, 350).setScrollFactor(0).setSize(400, 250);
    let miniMapBackground = scene.add.image(0, 0, mapa);
    //saber el ancho y largo
    miniMapBackground.displayWidth = 400;
    miniMapBackground.displayHeight = 250;
    scene.puntoMapa = scene.add.image(scene.avatar.avatarPlayer.x * scene.factorEscala-87, scene.avatar.avatarPlayer.y * scene.factorEscala, 'puntoRed');
    miniMapContainer.add(miniMapBackground);
    miniMapContainer.add(scene.puntoMapa);
   miniMapContainer.setScale(0.3);
   miniMapContainer.setInteractive();
   miniMapContainer.on('pointerdown', function(pointer){
     scene.bigMapConteiner.visible = true;
   }, scene);
  return miniMapContainer;
};


export const bigMap = (scene) => {
    scene.bigMapConteiner = scene.add.container(800, 500).setScrollFactor(0).setSize(700, 400);
    let bigMapBackground = scene.add.image(0, 0, 'bMapa');
    bigMapBackground.displayWidth = 700;
    bigMapBackground.displayHeight = 400;
    scene.bigMapConteiner.add(bigMapBackground);
    scene.bigMapConteiner.visible = false;
    scene.bigMapConteiner.setInteractive();
    
    let lastClickTime = 0;
    
    scene.bigMapConteiner.on('pointerup', function(pointer){
      // Obtén el tiempo actual
      var currentTime = new Date().getTime();
    
      // Verifica si ha pasado menos de 300 milisegundos desde el último clic
      if (currentTime - lastClickTime < 300) {
          // Es un doble clic
          console.log("¡Doble clic!");
          // Aquí puedes agregar la lógica que deseas ejecutar en un doble clic
          scene.bigMapConteiner.visible = false;
      }
    
      // Actualiza el tiempo del último clic
      lastClickTime = currentTime;
    } , scene);
    
}