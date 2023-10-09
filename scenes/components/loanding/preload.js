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
  scene.load.image("level1", "assets/images/levels/level1.png");

  scene.load.image("arrowRight", "assets/images/intro/arrow_right.png");
  scene.load.image("lock", "assets/images/intro/lock.png");
  scene.load.image("ava", "assets/images/player/ava.png");
  scene.load.image("ava2", "assets/images/player/ava2.png");

  scene.load.video(
    "avatarVideo1",
    "assets/videos/valentin.mp4",
    "loadeddata",
    false,
    true
  );
  scene.load.video(
    "avatarVideo2",
    "assets/videos/21.mp4",
    "loadeddata",
    false,
    true
  );
};

const preloadAdmistrativeRoom = (scene) => {
  const path = "assets/images/administrative_room/";
  //piso
  scene.load.image("piso", `${path}piso.png`);
  scene.load.image("areaAdmin", `${path}administrative_room.png`);
  //paredes
  scene.load.image("muro", `${path}paredes/muro.png`);
  scene.load.image(
    "paredDerechaBotton",
    `${path}paredes/paredDerechaBotton.png`
  );
  scene.load.image("paredDerechaTop", `${path}paredes/paredDerechaTop.png`);
  scene.load.image("paredes", `${path}paredes/paredes.png`);
  scene.load.image("paredLeft", `${path}paredes/paredLeft.png`);
  scene.load.image("paredMedioLeft", `${path}paredes/paredMedioLeft.png`);
  scene.load.image("paredMedioRigth", `${path}paredes/paredMedioRigth.png`);
  scene.load.image("paredMedioRigth2", `${path}paredes/paredMedioRigth2.png`);
  scene.load.image("paredMedioTop", `${path}paredes/paredMedioTop.png`);
  scene.load.image("paredRi", `${path}paredes/paredRi.png`);
  scene.load.image("paredSuperior", `${path}paredes/paredSuperior.png`);
  scene.load.image(
    "bordeSuperiorPuerta",
    `${path}paredes/bordeSuperiorPuerta.png`
  );
  //
  scene.load.image("agua", `${path}agua.png`);
  scene.load.image("agua1", `${path}agua1.png`);
  scene.load.image("bote", `${path}bote.png`);
  scene.load.image("bote1", `${path}bote1.png`);
  scene.load.image("copiadora", `${path}copiadora.png`);
  scene.load.image("mesa", `${path}mesa.png`);
  scene.load.image("mesa1", `${path}mesa1.png`);
  scene.load.image("mesa2", `${path}mesa2.png`);
  scene.load.image("mesa3", `${path}mesa3.png`);
  scene.load.image("mesa4", `${path}mesa4.png`);
  scene.load.image("poste", `${path}poste.png`);
};
const cubicle = (scene) => {};
const auditorium2 = (scene) => {};
const classRoom = (scene) => {};
const computerRoom = (scene) => {};
const cubicle2 = (scene) => {};
const botonesNavbar = (scene) => {
  scene.load.image("botonNav", "assets/images/navbar/boton.png");
};

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
