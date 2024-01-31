import { googleFont } from "../../../utils/font.js";
const serverRoom = (scene) => {

  scene.load.image("refeee", "assets/images/serverroom/Areaservidores.png");
  scene.load.image("pisoAS", "assets/images/serverroom/pisoAS.png");
  scene.load.image("paredleftAS", "assets/images/serverroom/paredleft.png");
  scene.load.image("paredupAS", "assets/images/serverroom/paredup.png");
  scene.load.image("pareddownAS", "assets/images/serverroom/pareddown.png");
  scene.load.image("paredrigthAS", "assets/images/serverroom/paredrigth.png");
  scene.load.image("mesaAS", "assets/images/serverroom/mesa.png");


}
const preloadIntro = (scene) => {
  scene.load.scenePlugin({
    key: "rexuiplugin",
    url: "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js",
    sceneKey: "rexUI",
  });
  scene.load.image("boton", "assets/images/boton.png");

  // scene.load.image("profile", "assets/images/intro/profile.jpg");
  scene.load.image("backgroundIntro", "assets/images/intro/intro.png");
  scene.load.image("backgroundIntro2", "assets/images/intro/intro2.png");
  scene.load.image("play", "assets/images/intro/start.png");
  scene.load.image("mode", "assets/images/intro/mode.png");
  //scene.load.image("mode2", "assets/images/intro/mode2.png");
  //scene.load.image("score", "assets/images/intro/score.png");
  //scene.load.image("avatar", "assets/images/intro/avatar.png");
  scene.load.image("fullscreen", "assets/images/intro/fullscreen.png");
  scene.load.image("mute", "assets/images/intro/mute.png");
  scene.load.image("sound", "assets/images/intro/sound.png");
  scene.load.image("logout", "assets/images/intro/logout.png");
  scene.load.image("logoRedondo", "assets/images/logoRedondo.png");

  scene.load.image("facciando", "assets/images/intro/facci.png");
  scene.load.image("avatar", "assets/images/player/avatar.png");
  scene.load.image("avatar2", "assets/images/player/avatar2.png");
  scene.load.image("level1", "assets/images/levels/level1.png");

  scene.load.image("arrowRight", "assets/images/intro/arrow_right.png");
  scene.load.image("lock", "assets/images/intro/lock.png");
  scene.load.image("modox", "assets/images/intro/modox.png");
  scene.load.image("insigniaOro", "assets/images/intro/insigniaOro.png");
  scene.load.image("ava", "assets/images/player/ava.png");
  scene.load.image("ava2", "assets/images/player/ava2.png");

  scene.load.image("frame", "assets/images/info/frame.png");
  scene.load.image("exit", "assets/images/info/exit.png");
  scene.load.image("buttonFrame", "assets/images/info/buttonFrame.png");
  WebFont.load(googleFont);

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
const cubicle = (scene) => {
  scene.load.image("pisoCubiculo", "assets/images/cubicle/piso.png");
  scene.load.image("paredColor", "assets/images/cubicle/cubiculocolor.jpg");
  scene.load.image("paredIzqC", "assets/images/cubicle/paredIzq.png");
  scene.load.image("paredSurEste", "assets/images/cubicle/paredSurEste.png");
  scene.load.image(
    "paredPuertaIzq",
    "assets/images/cubicle/paredPuertaIzq.png"
  );
  scene.load.image(
    "paredPuertaSur",
    "assets/images/cubicle/paredPuertaNorSur.png"
  );
  scene.load.image(
    "paredPuertaNor",
    "assets/images/cubicle/paredPuertaNor.png"
  );
  scene.load.image(
    "paredPuertaDer",
    "assets/images/cubicle/paredPuertaDer.png"
  );
  scene.load.image("paredNorte", "assets/images/cubicle/paredNorte.png");
  scene.load.image("paredEscalera", "assets/images/cubicle/paredEscalera.png");
  scene.load.image("paredSurDer", "assets/images/cubicle/paredSurDer.png");
  scene.load.image("paredDer", "assets/images/cubicle/paredDer.png");

  scene.load.image("escritoriosA", "assets/images/cubicle/escritoriosA.png");
  scene.load.image("escritoriosB", "assets/images/cubicle/escritoriosB.png");
  scene.load.image("escritorioB6", "assets/images/cubicle/escritorioB6.png");
  scene.load.image("escritoriosC", "assets/images/cubicle/escritoriosC.png");
  scene.load.image("escritoriosD", "assets/images/cubicle/escritoriosD.png");
  scene.load.image("sillaB6", "assets/images/accessories/chair/0005.png");

  scene.load.image("escalera", "assets/images/cubicle/escalera.png");
  scene.load.image("impresora", "assets/images/cubicle/impresora.png");
  scene.load.image("servidor", "assets/images/cubicle/servidor.png");
  scene.load.image("anaquel", "assets/images/cubicle/anaquel.png");

  scene.load.image("fotoCarnet", "assets/images/avatars/avatar1.png");
};
const commission_area = (scene) => {
  scene.load.image(
    "pisoComision",
    "assets/images/commission_area/PisoComisiones.png"
  );
  // scene.load.image("pf", "assets/images/commission_area/pf.png");
  scene.load.image(
    "psec",
    "assets/images/commission_area/paredSurEsteComision.png"
  );
  scene.load.image(
    "psoc",
    "assets/images/commission_area/paredSurOesteComision.png"
  );
  scene.load.image(
    "puertaSurComision",
    "assets/images/commission_area/puertaSurComision.png"
  );
  scene.load.image(
    "paredIzqPuertaComision",
    "assets/images/commission_area/paredIzPuertaComisiones.png"
  );
  scene.load.image(
    "paredMedioComision",
    "assets/images/commission_area/paredMedioComision.png"
  );
  scene.load.image(
    "paredVerticalComision",
    "assets/images/commission_area/paredVerticalComision.png"
  );
  scene.load.image(
    "paredCentro2comision",
    "assets/images/commission_area/paredCentro2Comision.png"
  );
  scene.load.image(
    "paredCentro2Izcomision",
    "assets/images/commission_area/paredCentro2IzComision.png"
  );
  scene.load.image(
    "paredCentro2Izquierdacomision",
    "assets/images/commission_area/paredCentro2IzquierdaComision.png"
  );
  scene.load.image(
    "paredCentro2Norcomision",
    "assets/images/commission_area/paredCentro2NorComision.png"
  );
  scene.load.image(
    "paredCentro3Comision",
    "assets/images/commission_area/paredCentro3Comision.png"
  );
  scene.load.image(
    "puertaParedNorCentro3Comision",
    "assets/images/commission_area/puertaParedNorCentro3Comision.png"
  );
  scene.load.image(
    "paredIzComision",
    "assets/images/commission_area/paredIzComision.png"
  );
  scene.load.image(
    "paredVerticalMedioComision",
    "assets/images/commission_area/paredVerticalMedioComision.png"
  );
  scene.load.image(
    "paredCentroHorizontal",
    "assets/images/commission_area/paredCentroHorizontal.png"
  );
  scene.load.image(
    "paredCentroIzVertical",
    "assets/images/commission_area/paredCentroIzVertical.png"
  );
  scene.load.image(
    "paredSecretariaComision",
    "assets/images/commission_area/paredSecretariaComision.png"
  );
  scene.load.image(
    "paredHorizontalSurComision",
    "assets/images/commission_area/paredHorizontalSurComision.png"
  );
  scene.load.image(
    "paredSurCentroVerticalComision",
    "assets/images/commission_area/paredSurCentroVerticalComision.png"
  );
  scene.load.image(
    "paredSurHorizontalComision",
    "assets/images/commission_area/paredSurHorizontalComision.png"
  );
  scene.load.image(
    "escaleraComision",
    "assets/images/commission_area/escaleraComision.png"
  );
  scene.load.image(
    "paredIzquierdaComision",
    "assets/images/commission_area/paredIzquierdaComision.png"
  );
  scene.load.image(
    "paredCentroComisionTesis",
    "assets/images/commission_area/paredCentroComisionTesis.png"
  );
  scene.load.image(
    "paredPuertaMedioComision",
    "assets/images/commission_area/paredPuertaMedioComision.png"
  );
  scene.load.image(
    "accesorios",
    "assets/images/commission_area/accesorios.png"
  );
  scene.load.image("table01", "assets/images/accessories/table/table01.png");
  scene.load.image("table02", "assets/images/accessories/table/table02.png");
};
const auditorium2 = (scene) => {     //piso
  scene.load.image("Auditorio2", "assets/images/auditorium2/Auditorio2.png");
  //paredes
  scene.load.image(
    "paredDere",
    "assets/images/auditorium2/paredes/paredDer.png"
  );
  scene.load.image(
    "paredInferior",
    "assets/images/auditorium2/paredes/paredInferior.png"
  );
  scene.load.image(
    "paredIzq1",
    "assets/images/auditorium2/paredes/paredIzq1.png"
  );
  scene.load.image(
    "paredIzq2",
    "assets/images/auditorium2/paredes/paredIzq2.png"
  );
  scene.load.image(
    "paredSuperiorA2",
    "assets/images/auditorium2/paredes/paredSuperior.png"
  );

  //
  scene.load.image("fila1", "assets/images/auditorium2/fila1.png");
  scene.load.image("fila2", "assets/images/auditorium2/fila2.png");
  scene.load.image("fila3", "assets/images/auditorium2/fila3.png");
  scene.load.image("fila4", "assets/images/auditorium2/fila4.png");
  scene.load.image("fila5", "assets/images/auditorium2/fila5.png");
  scene.load.image("mesa", "assets/images/auditorium2/mesa.png");
  scene.load.image("silla2", "assets/images/auditorium2/silla2.png");
};
const classRoom = (scene) => {
  scene.load.image("background2", "assets/images/classroom/piso.png");
  scene.load.image("paredAula", "assets/images/classroom/paredNorte.png");
  scene.load.image("paredIzq", "assets/images/classroom/paredIzq.png");
  scene.load.image("paredDer", "assets/images/classroom/paredDer.png");
  scene.load.image("paredInf", "assets/images/classroom/paredInf.png");
  scene.load.image("mesaAula", "assets/images/classroom/mesas.png");
  scene.load.image("escritorioAula", "assets/images/classroom/escritorio.png");
  scene.load.image("pizarraAula", "assets/images/classroom/pizarra.png");
};
const computerRoom = (scene) => {
  scene.load.image("background2", "assets/images/classroom/piso.png");
  scene.load.image("paredAula", "assets/images/classroom/paredNorte.png");
  scene.load.image("paredIzq", "assets/images/classroom/paredIzq.png");
  scene.load.image("paredDer", "assets/images/classroom/paredDer.png");
  scene.load.image("paredInf", "assets/images/classroom/paredInf.png");
  scene.load.image("pizarraAula", "assets/images/classroom/pizarra.png");
  scene.load.image("computer", "assets/images/computer_room/computers.png");
  scene.load.image("chair1", "assets/images/computer_room/chairV1.png");
  scene.load.image("chair2", "assets/images/computer_room/chairV2.png");
  scene.load.image("escritorioAula", "assets/images/classroom/escritorio.png");
};
const cubicle2 = (scene) => {
  scene.load.image("pisoCubiculo2", "assets/images/cubicle2/pisoC2.png");
  scene.load.image("paredCu2", "assets/images/cubicle2/paredesColor.png");
  scene.load.image(
    "paredNorteCu2",
    "assets/images/cubicle2/paredNorteCu2.png"
  );
  scene.load.image("paredeIzCu2", "assets/images/cubicle2/paredeIzCu2.png");
  scene.load.image(
    "paredeIzTotalCu2",
    "assets/images/cubicle2/paredeIzTotalCu2.png"
  );
  scene.load.image(
    "cubicle2ParedCentro1",
    "assets/images/cubicle2/cubicle2ParedCentro1.png"
  );
  scene.load.image(
    "cubicle2ParedCentro2",
    "assets/images/cubicle2/cubicle2ParedCentro2.png"
  );
  scene.load.image(
    "cubicle2ParedCentro3",
    "assets/images/cubicle2/cubicle2ParedCentro3.png"
  );
  scene.load.image("escalera1Cu2", "assets/images/cubicle2/escalera1Cu2.png");
  scene.load.image("escalera2Cu2", "assets/images/cubicle2/escalera2Cu2.png");
  scene.load.image(
    "cubicle2ParedSurEste",
    "assets/images/cubicle2/cubicle2ParedSurEste.png"
  );
  scene.load.image(
    "cubicle2ParedMedioVertical",
    "assets/images/cubicle2/cubicle2ParedMedioVertical.png"
  );
  scene.load.image(
    "cubicle2ParedEntrada",
    "assets/images/cubicle2/cubicle2ParedEntrada.png"
  );
  scene.load.image(
    "cubicle2ParedSurMedio",
    "assets/images/cubicle2/cubicle2ParedSurMedio.png"
  );
  scene.load.image(
    "cubicle2ParedSurEste2",
    "assets/images/cubicle2/cubicle2ParedSurEste2.png"
  );
  scene.load.image(
    "cubiculo2Escritorios",
    "assets/images/cubicle2/cubiculo2Escritorios.png"
  );
  scene.load.image(
    "cubiculo2Escritorios2",
    "assets/images/cubicle2/cubiculo2Escritorios2.png"
  );
};
const eletronicRoom = (scene) => {
  scene.load.image("placa", "assets/placa.png");
  scene.load.image("up", "assets/up.png");
  scene.load.image("rigth", "assets/rigth.png");
  scene.load.image("left", "assets/left.png");
  scene.load.image("down", "assets/down.png");
  scene.load.image("pisoLab1", "assets/images/electronic_room/pisoLab1.png");
  scene.load.image(
    "escritorio",
    "assets/images/electronic_room/escritorio.png"
  );
  scene.load.image(
    "mesasLab",
    "assets/images/electronic_room/mesasLaboratio1.png"
  );
  scene.load.image(
    "paredILaborario",
    "assets/images/electronic_room/paredIzq.png"
  );
  scene.load.image(
    "paredDLaborario",
    "assets/images/electronic_room/paredDer.png"
  );
  scene.load.image(
    "paredSLaborario",
    "assets/images/electronic_room/paredSuperior.png"
  );
  scene.load.image(
    "paredPILaborario",
    "assets/images/electronic_room/puertaDer.png"
  );
  scene.load.image(
    "paredPDLaborario",
    "assets/images/electronic_room/puertaIzq.png"
  );
};
const botonesNavbar = (scene) => {
  scene.load.image("botonNav", "assets/images/navbar/boton.png");
  scene.load.image("botonInfo", "assets/images/navbar/botonInfo.png");
  scene.load.image("home", "assets/images/navbar/botonMenu.png");
};
const floorHallway2 = (scene) => {
  const path = "assets/images/2FloorHallway/";
  //piso
  scene.load.image("pisoFloorHallway2", `${path}piso.png`);
  scene.load.image("PasilloPiso2", `${path}PasilloPiso2.png`);
  //
  scene.load.image("escaleraArriba", `${path}escaleraArriba.png`);
  scene.load.image("escaleraAbajo", `${path}escaleraAbajo.png`);
  scene.load.image("escaleraAbajoAbajo", `${path}escaleraAbajoAbajo.png`);
  scene.load.image("puerta", `${path}puerta.png`);
  scene.load.image("puerta2", `${path}puerta2.png`);
  scene.load.image("mesaHorizontal", `${path}mesaHorizontal.png`);
  scene.load.image("mesaVertical", `${path}mesaVertical.png`);
  scene.load.image("mesasAbajo", `${path}mesasAbajo.png`);
  scene.load.image("mesaAbajoDerecha", `${path}mesaAbajoDerecha.png`);
  scene.load.image("mesaMedio", `${path}mesaMedio.png`);
  scene.load.image("banca", `${path}banca.png`);
  //s
  scene.load.image("sillaDeLado", `${path}sillaDeLado.png`);
  scene.load.image("sillaDeLado2", `${path}sillaDeLado2.png`);
  scene.load.image("sillaFrontal", `${path}sillaFrontal.png`);
  //paredes
  scene.load.image("paredes", `${path}paredes/paredes.png`);
  scene.load.image("hueco", `${path}paredes/hueco.png`);
  scene.load.image(
    "paredSuperiorFloorHallway2",
    `${path}paredes/paredSuperior.png`
  );
  scene.load.image(
    "esquinaSuperiorDerecha",
    `${path}paredes/esquinaSuperiorDerecha.png`
  );
  scene.load.image("pared", `${path}paredes/pared.png`);
  scene.load.image(
    "salaEstudianteArriba",
    `${path}paredes/salaEstudianteArriba.png`
  );
  scene.load.image("paredLarga", `${path}paredes/paredLarga.png`);
  scene.load.image("muroFloor2", `${path}paredes/muro.png`);
  scene.load.image("paredInferior", `${path}paredes/paredInferior.png`);
  scene.load.image("separadorCurso", `${path}paredes/separadorCurso.png`);
  scene.load.image("cursos", `${path}paredes/cursos.png`);
  scene.load.image("paredCursoDerecha", `${path}paredes/paredCursoDerecha.png`);
  scene.load.image(
    "paredCursoIzquierda",
    `${path}paredes/paredCursoIzquierda.png`
  );
  scene.load.image("cachoFaltante", `${path}paredes/cachoFaltante.png`);
  scene.load.image("faltante", `${path}paredes/faltante.png`);
};
const hallway2 = (scene) => {
  const path = "assets/images/hallway2/";
  scene.load.image("background3", `${path}pasillo_piso.png`);
  scene.load.image("paredAuditorioHallway2", `${path}pared_auditorio.png`);
  scene.load.image("paredbatMujerHallway2", `${path}pared_batMujer.png`);
  scene.load.image("paredEste", `${path}pared_este.png`);
  scene.load.image("paredSuperior2Hallway2", `${path}pared_frontal.png`);
  scene.load.image("paredInferiorHallway2", `${path}pared_inferior.png`);
  scene.load.image("paredEsteHallway2", `${path}pared_comunidad.png`);
};
const mainHallway1 = (scene) => {
  const path = "assets/images/mainHallway1/";
  scene.load.image("floor", `${path}floor.png`);
  scene.load.image("paredBaja1", `${path}paredBajaDerecha.png`);
  scene.load.image("paredBaja2", `${path}paredBajaIzquierda.png`);
  scene.load.image("paredMedia1", `${path}paredMediaIzquierda.png`);
  scene.load.image("paredMedia2", `${path}paredMediaDerecha.png`);
  scene.load.image("paredMediaEscalera", `${path}paredMediaEscalera.png`);
  scene.load.image("paredSuperior1", `${path}paredSuperiorIzquierda.png`);
  scene.load.image("paredSuperior2", `${path}paredSuperiorDerecha.png`);
  scene.load.image("sillaBasura", `${path}sillaBasura.png`);
  scene.load.image("escaleraAbajo1", `${path}escaleraAbajo.png`);
  scene.load.image("escaleraArriba1", `${path}escaleraArriba.png`);
  scene.load.image("floor1Map", `assets/images/maps/floor1Map.png`);
  scene.load.image("cubicleMap", `assets/images/maps/cubicleMap.png`);
  scene.load.image("secreMap", `assets/images/maps/secreMap.png`);
  scene.load.image("commisionMap", `assets/images/maps/commisionMap.png`);
};
const outside = (scene) => {
  scene.load.image("asientoFacci", "assets/images/outside/asientofacci.png");
  scene.load.image("patioFacci", "assets/images/outside/patio-facci.png");
  scene.load.image("streetEast", "assets/images/outside/calle-este.png");
  scene.load.image("building", "assets/images/outside/edificio.png");
  scene.load.image("plant", "assets/images/outside/planta.png");
  scene.load.image("tree", "assets/images/outside/arbolExterior.png");
  scene.load.image("tree2", "assets/images/outside/arbolExterior2.png");
  scene.load.image(
    "ladoNortePuerta",
    "assets/images/outside/lado-norte-puerta.png"
  );
  scene.load.image("ladoOeste", "assets/images/outside/lado-oeste.png");
  scene.load.image("puertaFacci", "assets/images/outside/puertaFacci.png");
  scene.load.image("puertaFacci2", "assets/images/outside/puertaFacci2.png");
  scene.load.image("asientoPlanta", "assets/images/outside/asientoPlanta.png");
  /*     scene.load.image("asientoFacci", "assets/images/outside/asientoFacci.png");*/
  scene.load.image("calleBus", "assets/images/outside/calle-bus.png");
  scene.load.image("limiteSur", "assets/images/outside/limite-sur-facci.png");
  scene.load.image("mapaOutside", "assets/images/maps/outsideMap.png");
  scene.load.image("puntoRed", "assets/images/puntoRed.png");
  scene.load.image("bMapa", "assets/images/maps/bigMap.png");
  scene.load.image("iconMap", "assets/images/maps/iconMission.png");
};
const hallway300 = (scene) => {
  scene.load.image(
    "backgroundHallway300",
    "assets/images/hallway300/Piso.png"
  );
  scene.load.image("pardColor", "assets/images/hallway300/paredesColor.png");
  scene.load.image("paredSur", "assets/images/hallway300/paredsur.png");
  scene.load.image("paredNorte300", "assets/images/hallway300/parednorte.png");
  scene.load.image("cuadro", "assets/images/hallway300/cuadro.png");
  scene.load.image("paredIzq300", "assets/images/hallway300/paredIzq.png");
  scene.load.image("pared209", "assets/images/hallway300/pared209.png");
  scene.load.image(
    "paredDer300",
    "assets/images/hallway300/paredes-308-309.png"
  );
  scene.load.image(
    "paredHor1",
    "assets/images/hallway300/paredHorizontal210.png"
  );
  scene.load.image(
    "paredHor2",
    "assets/images/hallway300/paredHorizontal210-2.png"
  );
  scene.load.image("escalera1", "assets/images/hallway300/escalera1.png");
  scene.load.image("escalera2", "assets/images/hallway300/escalera2.png");
  scene.load.image(
    "escalera2Pared",
    "assets/images/hallway300/escalera2Pared.png"
  );
  scene.load.image("escalera3", "assets/images/hallway300/escalera3.png");
  scene.load.image("escalera4", "assets/images/hallway300/escalera4.png");
  scene.load.image("decana", "assets/images/avatars/avatar2.png");


}


export const preloads = (scene) => {
  preloadIntro(scene);
  preloadAdmistrativeRoom(scene);
  cubicle(scene);
  auditorium2(scene);
  classRoom(scene);
  computerRoom(scene);
  cubicle2(scene);
  botonesNavbar(scene);
  floorHallway2(scene);
  hallway2(scene);
  outside(scene);
  mainHallway1(scene);
  eletronicRoom(scene);
  commission_area(scene);
  hallway300(scene);
  serverRoom(scene);
}; 