import { getIndexMission } from "../scenes/modeHistory/infoMission.js";
const data = {
  /*******************************************************
   ** NOTA: los dialogos los string que comienzan con 0 **
   ** son para el avatar del jugador                    **
   *******************************************************/
  mission1: {
    es: [
      "Hola, bienvenido a la universidad, ¿en que te puedo ayudar?",
      `0Hola, soy ${window.name}, soy nuevo en la universidad y necesito información`,
      "0sobre la carrera de T.I. por favor",
      "la facultad cuenta con 3 pisos, en el primer piso se encuentra la secretaría, ",
      "en la planta baja se encuentran los cubículos de los profesores los cuales ",
      "puedes visitar para obtener información sobre la carrera",
      "0Muchas gracias!",
    ],
    en: [
      "Hello, welcome to the university, how can I help you?",
      `0Hello, I'm ${window.name}, I'm new to the university and I need information`,
      "0about the IT career please",
      "the faculty has 3 floors, on the first floor is the secretary's office, ",
      "on the ground floor are the cubicles of the teachers which ",
      "you can visit to get information about the career",
      "0Thank you very much!",
    ],
  },
  mission2: {
    //en este dialogo esta la primera parte, se tiene que esperar la respuesta del jugador para continuar con la segunda parte del dialogo, con la funcion eleccionesDialogos() se obtiene la respuesta del jugador y se continua con el dialogo
    es: [
      "0Hola, ¿podría explicarme sobre las asignaturas básicas de la carrera?",
      "¡Claro! Necesitas conocer de manera básica los fundamentos de programación, estadística y matemáticas discretas, ¿Te interesan esas asignaturas?",
    ],
    en: [
      "0Hello, could you explain to me about the basic subjects of the career?",
      "Of course! You need to know the basics of programming, statistics and discrete mathematics, are you interested in those subjects?",
    ],
  },
  mission3: {
    es: [],
    en: [],
  },
  mission4: {
    es: [],
    en: [],
  },
  mission5: {
    es: [],
    en: [],
  },
  mission6: {
    es: [],
    en: [],
  },
  mission7: {
    es: [],
    en: [],
  },
  mission8: {
    es: [],
    en: [],
  },
  mission9: {
    es: [],
    en: [],
  },
  mission10: {
    es: [],
    en: [],
  },
  mission11: {
    es: [],
    en: [],
  },
  mission12: {
    es: [],
    en: [],
  },
  mission13: {
    es: [],
    en: [],
  },
  mission14: {
    es: [],
    en: [],
  },
  mission15: {
    es: [],
    en: [],
  },
};

const dataDialogoSegunRespuesta = {
  mission2: {
    si: {
      es: [
        "¡Muy bien! Estas asignaturas son fundamentales para desarrollar una base sólida en tecnologías de la información.",
        "Te proporcionarán las herramientas necesarias para abordar problemas complejos en la carrera.",
      ],
      en: [
        "Very well! These subjects are fundamental to develop a solid base in information technologies.",
        "They will provide you with the necessary tools to address complex problems in the career.",
      ],
    },
    no: {
      es: [
        "Entiendo, no todas las asignaturas son del agrado de todos. Sin embargo, estas materias son pilares",
        "para comprender conceptos clave en la carrera. Te animo a considerar su importancia para tu formación.",
      ],
      en: [
        "I understand, not all subjects are to everyone's liking. However, these subjects are pillars",
        "to understand key concepts in the career. I encourage you to consider their importance for your training.",
      ],
    },
  },
};
export const getDiaglogMission = (respuesta = "") => {
  const { index } = getIndexMission();

  if (respuesta !== "") {
    if (!dataDialogoSegunRespuesta[index][respuesta]) {
      return "No hay dialog de respuesta agregada";
    }

    return dataDialogoSegunRespuesta[index][respuesta][window.lan];
  }
  if (!data[index]) {
    return "No hay mission agregada";
  }
  return data[index][window.lan];
};
