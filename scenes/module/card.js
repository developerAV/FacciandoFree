import { traslate } from "../../data/dialogues.js";

export const crearCard = (
  scene,
  teacher,
  namePhoto,
  namePlataforma,
  conteinerX,
  conteinerY
) => {
  let colisionTabla = false;

  const card = {};

  card.containerX = scene.add.container(conteinerX, conteinerY);

  // Configura el color de fondo del contenedor
  const contenedorFondo = scene.add.graphics();
  contenedorFondo.fillStyle(0xffffff, 0.7); // blanco, puedes ajustar el color según tus preferencias
  // contenedorFondo.fillRect(0, 0, 200, 100); // Ajusta el tamaño del contenedor según tus necesidades
  contenedorFondo.fillRoundedRect(0, 0, 200, 100, 10);

  card.containerX.add(contenedorFondo);
  // Agregar un borde al contenedor

  // Crea un sprite para la foto tipo carnet dentro del contenedor

  //information.rober_moreira[lan].status

  // Crea un texto para la información dentro del contenedor
  const informacionTexto = scene.add.text(
    0,
    30,
    ` \n\n ${teacher.status[window.lan]} \n ${teacher.name}\n ${
      teacher.age
    } ${traslate("year")} \n ${teacher.description[window.lan]} `,
    {
      font: "16px Comic Sans MS, Cambria, Arial",
      fill: "#000000",
      wordWrap: {
        width: 160, // Ajusta este valor para definir el límite de ancho
      },
      // backgroundColor: "#000000",
      padding: {
        x: 10,
        y: 10,
      },
    }
  );
  const fotoCarnet = scene.add.sprite(200, 30, namePhoto); // Cambia las coordenadas y el nombre de la textura según tu juego
  fotoCarnet.setScale(0.3); // Ajusta la escala según tus necesidades

  // Ajusta la alineación del texto según tus necesidades
  informacionTexto.setOrigin(0, 0.5);

  // Agrega la foto y el texto al contenedor
  card.containerX.add(informacionTexto);
  card.containerX.add(fotoCarnet);
  // Establece la profundidad del card.containerX para ponerlo encima de todo
  card.containerX.setDepth(1); // Ajusta el valor según sea necesario, un valor mayor lo colocará más arriba
  // scene.objetoDelJuego  = scene.add.image(330, 330, "sillaB6");

  card.containerX.setAlpha(0);

  // Establece la colisión entre el jugador (o cualquier objeto) y el objeto del juego
  scene.physics.add.collider(scene.avatar.avatarPlayer, namePlataforma, () => {
    // Cuando el jugador colisiona con el objeto, muestra la tabla de datos
    card.containerX.setAlpha(1);

    colisionTabla = true;
  });

  scene.input.keyboard.on("keydown", (event) => {
    // Verifica si la tecla presionada es una tecla de movimiento
    if (
      event.key === "ArrowUp" ||
      event.key === "ArrowDown" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      card.containerX.setAlpha(0);
    }
  });
  if (window.isMobile) {
    //buttonCentro se refiere circulo del centro del joystick(file: Player)
    scene.buttonCentro.on("pointerdown", () => {
      card.containerX.setAlpha(0);
    });

    scene.buttonCentro.on("pointermove", () => {
      card.containerX.setAlpha(0);
    });
  }
  return card.containerX;
};
