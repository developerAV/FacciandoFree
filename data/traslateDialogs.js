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
    es: [
      "1Hola, ¿Ya tienes proyecto de vinculación?",
      "0no, ni siquiera sé de que se trata la vinculación ",
      "1*explica* para más información anda donde la ingeniera Adriana Macias, encargada en el área de vinculación.",
      "0Listo compañero, ¡Muchas gracias",
    ],
    en: [
      "1Hello, do you already have a link project?",
      "0no, I don't even know what the link is about",
      "1*explains* for more information go where the engineer Adriana Macias, in charge of the link area.",
      "0Ready partner, thank you very much",
    ],
  },
  mission4_1: {
    es: [
      "0Hola, mucho gusto, quisiera saber sobre el proceso de vinculación",
      "1Hola, el proceso de vinculación es muy sencillo, solo debes tener en cuenta los siguientes requisitos:",
      "1Necesitas, bla bla bla....",
      "1La temática es realizar un E-comerce para una empresa y...",
      "1para la segunda fase de vinculación un artículo científico sobre el ecomerce.",
      "0Listo, muchas gracias! Me parece muy interesante",
    ],
    en: [
      "0Hello, nice to meet you, I would like to know about the link process",
      "1Hello, the link process is very simple, you just have to take into account the following requirements:",
      "1You need, bla bla bla....",
      "1The theme is to make an E-comerce for a company and...",
      "1for the second phase of linking a scientific article on ecomerce.",
      "0Ready, thank you very much! I find it very interesting",
    ],
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
        "1¡Muy bien! Estas asignaturas son fundamentales para desarrollar una base sólida en tecnologías de la información.",
        "1Te proporcionarán las herramientas necesarias para abordar problemas complejos en la carrera.",
      ],
      en: [
        "1Very well! These subjects are fundamental to develop a solid base in information technologies.",
        "1They will provide you with the necessary tools to address complex problems in the career.",
      ],
    },
    no: {
      es: [
        "1Entiendo, no todas las asignaturas son del agrado de todos. Sin embargo, estas materias son pilares",
        "1para comprender conceptos clave en la carrera. Te animo a considerar su importancia para tu formación.",
      ],
      en: [
        "1I understand, not all subjects are to everyone's liking. However, these subjects are pillars",
        "1to understand key concepts in the career. I encourage you to consider their importance for your training.",
      ],
    },
  },
};
export const getDiaglogMission = (respuesta = "") => {
  let { index } = getIndexMission();

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
