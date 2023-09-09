import { FONT } from "../../utils/constants.js";

export const textButton = (
  scene,
  width,
  height,
  name,
  colorBg,
  fontSize,
  opacity = 0,
  photo = false
) => {
  const button = scene.add.container(width, height);
  button.setName(name);

  // Configura el color de fondo del button
  const buttonFondo = scene.add.graphics();
  buttonFondo.fillStyle(colorBg, opacity); // blanco, puedes ajustar el color según tus preferencias
  buttonFondo.fillRoundedRect(0, 0, 180, 60, 30);

  // Agregar el fondo al button
  button.add(buttonFondo);
  if (photo) {
    const iconButton = scene.add.sprite(165, 30, name); // Ajusta el nombre de la textura según tu juego
    iconButton.setScale(0.2);
    button.add(iconButton);
  }

  // Crea un texto para la información dentro del button
  const informacionTexto = scene.add.text(40, 30, name, {
    font: `${fontSize} ${FONT}`,
    fill: "#ffffff",
    wordWrap: {
      width: 200, // Ajusta este valor para definir el límite de ancho
    },
    padding: {
      x: 10,
      y: 10,
    },
  });

  // Crea un sprite para la foto dentro del button

  // Ajusta la alineación del texto según tus necesidades
  informacionTexto.setOrigin(0, 0.5);

  // Agrega la foto y el texto al button
  button.add(informacionTexto);

  return informacionTexto;
};


