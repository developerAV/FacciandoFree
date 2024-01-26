import { FONT } from "../../../utils/constants.js";
import { alertCard } from "./alertCard.js";
import { handleSteps } from "../../modeHistory/handleSteps.js";
export const cardDialog = async (scene, dialogs, x, y, endmission = false) => {
  /*************************************************************
   ** NOTA: En los dialogos, los string que comienzan con "0" **
   ** son para el avatar del jugador                          **
   *************************************************************/

  scene.avatar.moveTo(0, 0, "turn");
  window.avatarUpdateActivo = false;
  let time;

  const mostrarDialogo = (index) => {
    return new Promise(async (resolve) => {
      if (index >= dialogs.length) {
        window.avatarUpdateActivo = true;
        handleSteps(true); // cambiar de alerta a la mission actualizando los pasos

        !endmission && alertCard(scene);
        return resolve(); // Si se alcanza el final de los diálogos, se detiene
      }

      let dialog = dialogs[index];
      if (index > -1 && index < dialogs.length - 1) {
        time = dialogs[index + 1][0] === dialog[0] ? 500 : 1500;
      }

      let posX = x;
      let posY = y;

      if (dialog[0] === "0") {
        //si el dialogo comienza con 0 es para el avatar del jugador
        posX = scene.avatar.avatarPlayer.x - 50;
        posY = scene.avatar.avatarPlayer.y - 50;
        //por eso camabiamos la posicion del dialogo
      }

      const box = scene.add.container(posX, posY);
      box.setName("box");

      const boxBg = scene.add.graphics();
      boxBg.fillStyle(0x00051a, 0.75);
      boxBg.fillRoundedRect(0, 0, 220, 75, 5);
      box.add(boxBg);

      const message = scene.add
        .text(0, 0, "", {
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

        })
        .setScale(0.5);
      box.add(message);
      box.setDepth(20);
      if (window.zoom === 1) box.setScale(2);

      await escribirTexto(message, dialog); // Mostrar el mensaje
      // Eliminar el contenedor después de un tiempo
      await scene.time.delayedCall(time, async () => {
        box.destroy();
        await mostrarDialogo(index + 1); // Mostrar el próximo diálogo
        resolve(); // Resuelve la promesa después de completar la secuencia de diálogos
      });
    });
  };

  const escribirTexto = (textObject, dialog) => {
    dialog = dialog.substring(1);
    return new Promise((resolve) => {
      let indice = 0;
      const escribir = () => {
        if (indice <= dialog.length) {
          textObject.setText(dialog.substring(0, indice));
          indice++;
          scene.time.delayedCall(50, escribir);
        } else {
          resolve(); // Resuelve la promesa cuando el texto se ha mostrado completamente
        }
      };
      escribir();
    });
  };

  // Comenzar mostrando el primer diálogo
  await mostrarDialogo(0);
};
