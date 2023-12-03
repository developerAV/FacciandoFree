import { getIndexMission } from "../scenes/modeHistory/infoMission.js";
const data = {
  /*******************************************************
   ** NOTA: los dialogos los string que comienzan con 0 **
   ** son para el avatar del jugador                    **
   *******************************************************/
  mission1: {
    es: [
      "hola, soy la secretaria, ¿en que puedo ayudarte?",
      "0estudiante: hola, necesito información sobre la carrera de T.I. por favor",
      "Dirigite al cubiculo que está en la parte de abajo",
    ],
    en: [
      "hello, I am the secretary, how can I help you?",
      "0hello, I need information about the T.I. career please",
      "Go to the cubicle that is at the bottom",
    ],
  },
};

export const getDiaglogMission = () => {
  const { index } = getIndexMission();
  console.log("index", index);
  console.log("language", window.lan);

  if (!data[index]) {
    return "No hay mission agregada";
  }
  return data[index][window.lan];
};
