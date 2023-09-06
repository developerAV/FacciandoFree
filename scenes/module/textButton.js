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

export const news = (
  scene,
  width,
  height,
  topicText,
  messageText,
  avatar1,
  avatar2
) => {
  let indice = 0;
  const box = scene.add.container(width, height);
  box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(0x00051a, 0.42);
  boxBg.fillRoundedRect(0, 0, 500, 600, 30);

  box.add(boxBg);

  const iconButton = scene.add.sprite(60, 530, avatar1);
  const iconButton2 = scene.add.sprite(420, 530, avatar2);
  iconButton.setScale(0.2);
  iconButton2.setScale(0.2);
  box.add(iconButton);
  box.add(iconButton2);

  const topic = scene.add.text(20, 60, topicText, {
    font: `32px ${FONT}`,
    fill: "#03bed0",
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });
  const message = scene.add.text(20, 100, messageText, {
    font: `28px ${FONT}`,
    fill: "#fff",
    wordWrap: {
      width: 450,
    },
    lineSpacing: 10,
    padding: {
      x: 10,
      y: 40,
    },
  });
  const creators = scene.add.text(160, 520, "Developer AV", {
    font: `28px ${FONT}`,
    fill: "#fff",
    wordWrap: {
      width: 200,
    },
    padding: {
      x: 10,
      y: 10,
    },
  });

  scene.time.addEvent({
    delay: 50, // Ajusta el valor para controlar la velocidad de escritura
    callback: escribirTexto,
    loop: true,
    callbackScope: scene,
  });

  function escribirTexto() {
    if (indice <= messageText.length) {
      message.setText(messageText.substring(0, indice));
      indice++;
    } else {
      scene.time.addEvent({
        delay: 2000, // Ajusta el valor para controlar la velocidad de escritura
        loop: false,
        callbackScope: scene,
      });
    }
  }
  // Agrega la foto y el texto al button
  box.add(topic);
  box.add(message);
  box.add(creators);

  return { topicBox: topic, messageBox: message, box };
};
