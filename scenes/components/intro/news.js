import { traslate } from "../../../data/dialogues.js";
import { FONT } from "../../../utils/constants.js";

export const news = (
  scene,
  width = 50,
  height = 200,
  topicText = "news",
  messageText = returnList()
) => {
  let keyMessage = messageText;
  let keyMessageOLD = keyMessage;
  messageText = traslate(messageText);
  let lan = window.lan;
  let indice = 0;

  const box = scene.add.container(width, height);
  box.setName("box");

  const boxBg = scene.add.graphics();
  boxBg.fillStyle(0x00051a, 0.42);
  boxBg.fillRoundedRect(0, 0, 500, 600, 30);

  box.add(boxBg);

  const iconButton = scene.add.sprite(60, 530, "avatar");
  const iconButton2 = scene.add.sprite(420, 530, "avatar2");
  iconButton.setScale(0.2);
  iconButton2.setScale(0.2);
  box.add(iconButton);
  box.add(iconButton2);

  const topic = scene.add.text(20, 60, traslate(topicText), {
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

  const iconButtonVoice = scene.add.sprite(topic.width + 60, 80, "mute");
  iconButtonVoice.setScale(0.3);
  iconButtonVoice.setInteractive();

  iconButtonVoice.on("pointerdown", () => {
    if (responsiveVoice.isPlaying()) {
      iconButtonVoice.setName("mute");
      responsiveVoice.pause();

      iconButtonVoice.setTexture("mute");
      return;
    }
    iconButtonVoice.setName("sound");

    responsiveVoice.resume();
    iconButtonVoice.setTexture("sound");
  });

  const message = scene.add.text(20, 100, "", {
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
  setInterval(() => {
    keyMessage = returnList();
  }, 15000);
  scene.time.addEvent({
    delay: 50, // Ajusta el valor para controlar la velocidad de escritura
    callback: escribirTexto,
    loop: true,
    callbackScope: scene,
  });

  function escribirTexto() {
    if (lan !== window.lan || keyMessageOLD !== keyMessage) {
      keyMessageOLD = keyMessage;
      lan = window.lan;
      indice = 0;
      message.setText("");
      messageText = traslate(keyMessage);
      topic.setText(traslate(topicText));
      if (iconButtonVoice.name === "sound") {
        responsiveVoice.speak(messageText, traslate("voiceSpeak"));
      }
    }
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
  box.add(iconButtonVoice);

  return { box };
};

function returnList() {
  const list = [
    "newContent",
    "newContent2",
    "newContent3",
    "newContent4",
    "newContent5",
  ];
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}
