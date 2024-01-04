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
      "1¡Claro! Necesitas conocer de manera básica los fundamentos de programación, ",
      "1estadística y matemáticas discretas, ¿Te interesan esas asignaturas?",
    ],
    en: [
      "0Hello, could you explain to me about the basic subjects of the career?",
      "1Of course! You need to know the basics of programming, ",
      "1statistics and discrete mathematics, are you interested in those subjects?",
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
      "1La vinculación es un proyecto en grupo, se divide en dos partes, a partir del 5to semestre...",
      "1se comienza con la primera fase, para más información anda donde la ingeniera Adriana Macias",
      "1encargada en el área de vinculación.",
      "0Listo compañero, ¡Muchas gracias",
    ],
    en: [
      "1Hello, do you already have a link project?",
      "0no, I don't even know what the link is about ",
      "1The link is a group project, it is divided into two parts, from the 5th semester...",
      "1you start with the first phase, for more information go where the engineer Adriana Macias",
      "1in charge in the area of ​​linkage.",
      "0Ready mate, Thank you very much",
    ],
  },
  mission4_1: {
    es: [
      "0Hola, mucho gusto, quisiera saber sobre el proceso de vinculación",
      "1Hola, el proceso de vinculación es muy sencillo, solo debes tener en cuenta los siguientes requisitos:",
      "1Necesitas, estar en 5to semestre para poder realizar la primera fase de vinculación",
      "1debes buscar un grupo de compañeros con quien hacerla",
      "1no es individual, se te asignara un asesor para que te guie en el proceso...",
      "1La temática es realizar un E-comerce para una empresa escogida por el grupo",
      "1si no llegan a un acuerdo se te asignara una empresa para la cual deberan hacer",
      "1la respectiva investigación y desarrollo del proyecto",
      "1para la segunda fase de vinculación un artículo científico sobre el ecomerce.",
      "0Listo, muchas gracias! Me parece muy interesante",
    ],
    en: [
      "0Hello, nice to meet you, I would like to know about the linkage process",
      "1Hello, the linkage process is very simple, you just have to take into account the following requirements:",
      "1You need to be in the 5th semester in order to carry out the first phase of linkage",
      "1you must look for a group of colleagues with whom to do it",
      "1it is not individual, an advisor will be assigned to guide you in the process...",
      "1The theme is to make an E-comerce for a company chosen by the group",
      "1if they do not reach an agreement, a company will be assigned to you for which they must do",
      "1the respective research and development of the project",
      "1for the second phase of linkage a scientific article on ecomerce.",
      "0Ready, thank you very much! I find it very interesting",
    ],
  },
  mission5: {
    es: [
      "1Y bien, terminó la clase, voy a enviar un proyecto para que lo realices en casa, se trata de un...",
      "1proyecto, el cual debe estar vinculado con un web y una aplicación móvil para mostrar los datos.",
      "0Entiendo, ¿cual es el tema del proyecto?",
      "1El proyecto es de IoT el cual debe recoger datos de un sensor de temperatura y humedad... ",
      "1estos datos deben ser enviados a una base de datos en la nube, y desde ahí se debe mostrar...",
      "1en una página web y una aplicación móvil.",
      "0¿Que es IoT?",
      "1No tengo tiempo para explicarte, mil disculpas, puedes ir a la sala de electronica por informacion.",
    ],
    en: [
      "1Well, the class is over, I'm going to send a project for you to do at home, it's about a...",
      "1project, which must be linked to a web and a mobile application to show the data.",
      "0I understand, what is the theme of the project?",
      "1The project is IoT which must collect data from a temperature and humidity sensor... ",
      "1this data must be sent to a database in the cloud, and from there it must be shown...",
      "1on a web page and a mobile application.",
      "0What is IoT?",
      "1I don't have time to explain, a thousand apologies, you can go to the electronics room for information.",
    ],
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
        "1¡Muy bien! Estas asignaturas son fundamentales para desarrollar una base sólida",
        "1en tecnologías de la información. Te proporcionarán las herramientas necesarias...",
        "1para abordar problemas complejos en la carrera.",
      ],
      en: [
        "1Very well! These subjects are fundamental to develop a solid base",
        "1in information technologies. They will provide you with the necessary tools...",
        "1to address complex problems in the career.",
      ],
    },
    no: {
      es: [
        "1Entiendo, no todas las asignaturas son del agrado de todos. Sin embargo,",
        "1estas materias son pilares para comprender conceptos clave en la carrera.",
        "1 Te animo a considerar su importancia para tu formación.",
      ],
      en: [
        "1I understand, not all subjects are to everyone's liking. However,",
        "1these subjects are pillars to understand key concepts in the career.",
        "1 I encourage you to consider its importance for your training.",
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

  console.log(index);
  if (!data[index]) {
    return "No hay mission agregada";
  }
  return data[index][window.lan];
};
