const preloadIntro = (scene) => {
  // scene.load.image("profile", "assets/images/intro/profile.jpg");
  scene.load.image("backgroundIntro", "assets/images/intro/intro.png");
  scene.load.image("backgroundIntro2", "assets/images/intro/intro2.png");
  scene.load.image("play", "assets/images/intro/start.png");
  scene.load.image("mode", "assets/images/intro/mode.png");
  scene.load.image("score", "assets/images/intro/score.png");
  //scene.load.image("avatar", "assets/images/intro/avatar.png");
  scene.load.image("fullscreen", "assets/images/intro/fullscreen.png");
  scene.load.image("mute", "assets/images/intro/mute.png");
  scene.load.image("sound", "assets/images/intro/sound.png");
  scene.load.image("logout", "assets/images/intro/logout.png");
  scene.load.image("facciando", "assets/images/intro/facci.png");
  scene.load.image("avatar", "assets/images/player/avatar.png");
  scene.load.image("avatar2", "assets/images/player/avatar2.png");
};

const preloadAdmistrativeRoom = (scene) => {
  //piso
  scene.load.image("piso", "assets/images/administrative_room/piso.png");
  scene.load.image(
    "areaAdmin",
    "assets/images/administrative_room/administrative_room.png"
  );

  //paredes
  scene.load.image(
    "muro",
    "assets/images/administrative_room/paredes/muro.png"
  );
  scene.load.image(
    "paredDerechaBotton",
    "assets/images/administrative_room/paredes/paredDerechaBotton.png"
  );
  scene.load.image(
    "paredDerechaTop",
    "assets/images/administrative_room/paredes/paredDerechaTop.png"
  );
  scene.load.image(
    "paredes",
    "assets/images/administrative_room/paredes/paredes.png"
  );
  scene.load.image(
    "paredLeft",
    "assets/images/administrative_room/paredes/paredLeft.png"
  );
  scene.load.image(
    "paredMedioLeft",
    "assets/images/administrative_room/paredes/paredMedioLeft.png"
  );
  scene.load.image(
    "paredMedioRigth",
    "assets/images/administrative_room/paredes/paredMedioRigth.png"
  );
  scene.load.image(
    "paredMedioRigth2",
    "assets/images/administrative_room/paredes/paredMedioRigth2.png"
  );
  scene.load.image(
    "paredMedioTop",
    "assets/images/administrative_room/paredes/paredMedioTop.png"
  );
  scene.load.image(
    "paredRi",
    "assets/images/administrative_room/paredes/paredRi.png"
  );
  scene.load.image(
    "paredSuperior",
    "assets/images/administrative_room/paredes/paredSuperior.png"
  );
  scene.load.image(
    "bordeSuperiorPuerta",
    "assets/images/administrative_room/paredes/bordeSuperiorPuerta.png"
  );

  //
  scene.load.image("agua", "assets/images/administrative_room/agua.png");
  scene.load.image("agua1", "assets/images/administrative_room/agua1.png");
  scene.load.image("bote", "assets/images/administrative_room/bote.png");
  scene.load.image("bote1", "assets/images/administrative_room/bote1.png");
  scene.load.image(
    "copiadora",
    "assets/images/administrative_room/copiadora.png"
  );
  scene.load.image("mesa", "assets/images/administrative_room/mesa.png");
  scene.load.image("mesa1", "assets/images/administrative_room/mesa1.png");
  scene.load.image("mesa2", "assets/images/administrative_room/mesa2.png");
  scene.load.image("mesa3", "assets/images/administrative_room/mesa3.png");
  scene.load.image("mesa4", "assets/images/administrative_room/mesa4.png");
  scene.load.image("poste", "assets/images/administrative_room/poste.png");
};
const cubicle = (scene) => {};
const auditorium2 = (scene) => {};
const classRoom = (scene) => {};
const computerRoom = (scene) => {};
const cubicle2 = (scene) => {};


export const preloads = (scene) => {
  preloadIntro(scene);
  preloadAdmistrativeRoom(scene);
  cubicle(scene);
  auditorium2(scene);
  classRoom(scene);
  computerRoom(scene);
  cubicle2(scene);
  botonesNavbar(scene);
};
