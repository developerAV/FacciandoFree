import { FONT } from "../../../utils/constants.js";
import { alertCard } from "./alertCard.js";
import { handleSteps } from "../../modeHistory/handleSteps.js";
export const cardDialog = async (scene, dialogs, x, y) => {
  /*************************************************************
   ** NOTA: En los dialogos, los string que comienzan con "0" **
   ** son para el avatar del jugador                          **
   *************************************************************/
  const mostrarDialogo = async (index) => {
    if (index >= dialogs.length) {
      window.avatarUpdateActivo = true;
      await handleSteps(true); // cambiar de alerta a la mission actualizando los pasos
      alertCard(scene);
      return; // Si se alcanza el final de los diálogos, se detiene
    }

    let dialog = dialogs[index];

    let posX = x;
    let posY = y;

    if (dialog[0] === "0") {
      //si el dialogo comienza con 0 es para el avatar del jugador
      posX = scene.avatar.avatarPlayer.x - 50;
      posY = scene.avatar.avatarPlayer.y - 50;
      dialog = dialog.substring(1); //eliminamos el 0 del dialogo
      //por eso camabiamos la posicion del dialogo
    }
    const box = scene.add.container(posX, posY);
    box.setName("box");

    const boxBg = scene.add.graphics();
    boxBg.fillStyle(0x00051a, 0.42);
    boxBg.fillRoundedRect(0, 0, 30, 60, 10);
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

    await escribirTexto(message, dialog); // Mostrar el mensaje

    // Eliminar el contenedor después de un tiempo
    await scene.time.delayedCall(1500, async () => {
      box.destroy();
      await mostrarDialogo(index + 1); // Mostrar el próximo diálogo
    });
  };

  const escribirTexto = async (textObject, dialog) => {
    let indice = 0;
    return new Promise((resolve) => {
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
