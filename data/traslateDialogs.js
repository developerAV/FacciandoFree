import { getIndexMission } from "../scenes/modeHistory/infoMission.js";
const data = {
  /*******************************************************
   ** NOTA: los dialogos los string que comienzan con 0 **
   ** son para el avatar del jugador                    **
   *******************************************************/
  mission1: {
    es: [
      "1Hola, bienvenido a la universidad, ¿en que te puedo ayudar?",
      `0Hola, soy ${window.name}, soy nuevo en la universidad y necesito información`,
      "0sobre la carrera de T.I. por favor",
      "1la facultad cuenta con 3 pisos, en el primer piso se encuentra la secretaría, ",
      "1en la planta baja se encuentran los cubículos de los profesores los cuales ",
      "1puedes visitar para obtener información sobre la carrera",
      "0Muchas gracias!",
    ],
    en: [
      "1Hello, welcome to the university, how can I help you?",
      `0Hello, I'm ${window.name}, I'm new to the university and I need information`,
      "0about the IT career please",
      "1the faculty has 3 floors, on the first floor is the secretary's office, ",
      "1on the ground floor are the cubicles of the teachers which ",
      "1you can visit to get information about the career",
      "0Thank you very much!",
    ],
  },
  mission2: {
    es: [
      "0Hola, ¿podría explicarme sobre las asignaturas básicas de la carrera?",
      "1¡Claro! Necesitas conocer de manera básica los fundamentos de programación, estadística y matemáticas discretas, ¿Te interesan esas asignaturas?",
    ],
    en: [
      "0Hello, could you explain to me about the basic subjects of the career?",
      "1Of course! You need to know the basics of programming, statistics and discrete mathematics, are you interested in those subjects?",
    ],
  },
  mission3: {
    es: [
      "0Hola, ¿usted es el director de la carrera?",
      "1¡Hola! Si, soy el director de la carrera, ¿en que te puedo ayudar?",
      "0me gustaría iniciar el proceso de matriculación para iniciar mis estudios académicos",
      "0aquí presento la documentación pertinente para empezar con la carrera",
      "1listo teniendo en cuenta todos los requisitos solicitados tu matricula está habilitada.",
      "1Bienvenido a la Facultad de Ciencias de la vida y Tecnologías en la carrera de Tecnologías de la información.",
    ],
    en: [
      "0Hello, are you the director of the career?",
      "1Hello! Yes, I am the director of the career, how can I help you?",
      "0I would like to start the enrollment process to start my academic studies",
      "0here I present the relevant documentation to start the career",
      "1ready taking into account all the requirements requested your registration is enabled.",
      "1Welcome to the Faculty of Life Sciences and Technologies in the Information Technologies career.",
    ],
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
