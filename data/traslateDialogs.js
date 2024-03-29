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
  mission4: {
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
  mission5: {
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
  mission5_1: {
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
  mission6: {
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
  mission6_1: {
    es: [
      "0Hola, me puede explicar algo sobre IoT?",
      "1Hola, claro que si, IoT es el internet de las cosas, es un concepto que se refiere a la interconexión...",
      "1de objetos cotidianos con internet, estos objetos pueden ser controlados a través de una aplicación...",
      "1en un dispositivo móvil, por ejemplo, un refrigerador, un televisor, un reloj, etc.",
      "0Entiendo, es muy interensante, el ingeniero Zamora nos dejó un proyecto sobre IoT,",
      "0con un sensor de temperatura y humedad, ¿me podría ayudar a realizar la parte de electronica?",
      "1Claro, te puedo ayudar, pero primero pasame los componentes para ayudarte.",
    ],
    en: [
      "0Hello, can you explain something about IoT?",
      "1Hello, of course, IoT is the internet of things, it is a concept that refers to the interconnection...",
      "1of everyday objects with the internet, these objects can be controlled through an application...",
      "1on a mobile device, for example, a refrigerator, a television, a watch, etc.",
      "0I understand, it is very interesting, engineer Zamora left us a project on IoT,",
      "0with a temperature and humidity sensor, could you help me with the electronics part?",
      "1Of course, I can help you, but first give me the components to help you.",
    ],

  },
  mission6_2: {
    es: [
      "1Listo, ahora te explico como conectar el sensor de temperatura y humedad a la placa de desarrollo...",
      "1para ello debes conectar el sensor a la placa de desarrollo en los pines correspondientes...",
      "1y luego cargar el código en la placa de desarrollo.",
      "1Donde mostraras los datos?",
      "0El ingeniero nos dijo que debemos mostrar los datos en una página web y una aplicación móvil.",
      "0de eso si me encargo yo, ya tengo los conocimientos necesarios para realizarlo.",
      "1Muy bien, ya tienes los conocimientos necesarios, te felicito.",
      "0Muchas gracias, nos vemos luego.",

    ],
    en: [
      "1Ready, now I'll explain how to connect the temperature and humidity sensor to the development board...",
      "1for this you must connect the sensor to the development board in the corresponding pins...",
      "1and then load the code into the development board.",
      "1Where will you show the data?",
      "0The engineer told us that we must show the data on a web page and a mobile application.",
      "0I take care of that, I already have the necessary knowledge to do it.",
      "1Very well, you already have the necessary knowledge, I congratulate you.",
      "0Thank you very much, see you later.",
    ],
  },

  mission7: {
    es: [
      "1Hola, ¿en que te puedo ayudar?",
      "0Hola, usted es la encargada de las práscticas pre profesionales?",
      "1Si, soy la encargada, ¿en que te puedo ayudar?",
      "0No tengo claro como realizar las prácticas pre profesionales, ¿me podría ayudar?",
      "1Claro, para realizar las prácticas pre profesionales debes tener en cuenta los siguientes puntos:",
      "11.- Se dividen en dos prácticas I que dira 192 horas y práctica II que durará 48 horas",
      "12.- Necesitas estar en 7mo semestre y estar cursando Aplicaciones Móviles, para poder realizar las prácticas pre profesionales I",
      "13.- Necesitas estar en 8vo semestre y estar cursando Sistemas distribuidos, para poder realizar las prácticas pre profesionales II",
      "14.- En ambas se te asignará una empresa para que trabajes allí y se te asignará un asesor para que esté pendiente de tu trabajo",
      "15.- Tambien puedes buscar una empresa por tu cuenta y notificarlo, esta empresa debe tener convenio con la universidad",
      "0Muchas gracias, ya tengo claro como realizar las prácticas pre profesionales",
    ],
    en: [
      "1Hello, how can I help you?",
      "0Hello, are you in charge of pre-professional practices?",
      "1Yes, I am in charge, how can I help you?",
      "0I am not clear how to carry out the pre-professional practices, could you help me?",
      "1Of course, to carry out the pre-professional practices you must take into account the following points:",
      "11.- They are divided into two practices I that will say 192 hours and practice II that will last 48 hours",
      "12.- You need to be in 7th semester and be studying Mobile Applications, to be able to carry out the pre-professional practices I",
      "13.- You need to be in 8th semester and be studying Distributed Systems, to be able to carry out the pre-professional practices II",
      "14.- In both you will be assigned a company to work there and an advisor will be assigned to be aware of your work",
      "15.- You can also look for a company on your own and notify it, this company must have an agreement with the university",
      "0Thank you very much, I am already clear how to carry out the pre-professional practices",

    ],
  },
  mission8: {
    es: [
      "0Hola, vengo para validar mis prácticas pre profesionales",
      "1Listo te voy a validar las prácticas, tienes los todos los documentos?",
      "0Si, aquí están todos los documentos",
      "1Muy bien, ya tienes tus prácticas pre profesionales validadas",
    ],
    en: [
      "0Hello, I come to validate my pre-professional practices",
      "1Ready I am going to validate the practices, do you have all the documents?",
      "0Yes, here are all the documents",
      "1Very well, you already have your pre-professional practices validated",
    ],
  },
  mission9: {
    es: [
      "0Hola, de que estan hablando?",
      "1Hola, estamos hablando sobre el tema de nuestro proyecto de titulación",
      "0¿Ya tienen tema?",
      "1Si, ya tenemos tema, se trata de un Videojuego para garantizar la insercion del estudiante a nuestra facultad",
      "0Wow! Que buen proyecto¿Ya tienen asesor?",
      "1Si, ya tenemos asesor, se trata del ingeniero John Cevallos",
      "0Muy bien, ya tienen todo listo, solo deben realizar el proyecto y presentarlo",
      "1Si, y tú ya tienes un tema?",
      "0Si, ya tengo un tema, se trata de un sistema de control de inventarios para una empresa",
      "1Muy bien, ve a hablar con el encargado de titulación.",
    ],
    en: [
      "0Hello, what are you talking about?",
      "1Hello, we are talking about the subject of our degree project",
      "0Do you already have a theme?",
      "1Yes, we already have a theme, it is a Video game to guarantee the student's insertion into our faculty",
      "0Wow! What a good project Do you already have an advisor?",
      "1Yes, we already have an advisor, it is engineer John Cevallos",
      "0Very well, you already have everything ready, you just have to do the project and present it",
      "1Yes, and do you already have a theme?",
      "0Yes, I already have a theme, it is an inventory control system for a company",
      "1Very well, go talk to the person in charge of titling.",
    ],
  },
  mission10: {
    es: [
      "0Ese fue mi proyecto de titulación, muchas gracias por su atención",
      "1Estuvo muy interesante, felicitaciones por su proyecto",
      "0Muchas gracias",
      "1Tienes una calificacion final de 20 por todo tu proyecto, ahora eres oficialmente un ingeniero en T.I. Felicitaciones!!!!",

    ],
    en: [
      "0That was my degree project, thank you very much for your attention",
      "1It was very interesting, congratulations on your project",
      "0Thank you very much",
      "1You have a final grade of 20 for your entire project, now you are officially an engineer in T.I. Congratulations!!!!",
    ],
  },

};

const dataDialogoSegunRespuesta = {
  mission2: {
    si: {
      es: [
        "1¡Muy bien! Estas asignaturas son fundamentales para desarrollar una base sólida",
        "1en tecnologías de la información. Te proporcionarán las herramientas necesarias...",
        "1para abordar problemas complejos en la carrera.",
        "0Muchas gracias por la información",
        "0Antes de irme, ¿Podría decirme donde se encuentra el director de carrera?",
        "1Claro, el director de carrera se encuentra en el AREA DE COMISIONES...",
        "1Para llegar a ahí debes subir la escalera que está a la derecha de la..",
        "1de la puerta principal, frente a la secretaría.",
        "0Muchas gracias, nos vemos luego.",

      ],
      en: [
        "1Very well! These subjects are fundamental to develop a solid base",
        "1in information technologies. They will provide you with the necessary tools...",
        "1to address complex problems in the career.",
        "0Thank you very much for the information",
        "0Before I leave, could you tell me where the career director is?",
        "1Of course, the career director is in the COMMISSIONS AREA...",
        "1To get there you must climb the stairs on the right of the...",
        "1from the main door, in front of the secretary.",
        "0Thank you very much, see you later.",
      ],
    },
    no: {
      es: [
        "1Entiendo, no todas las asignaturas son del agrado de todos. Sin embargo,",
        "1estas materias son pilares para comprender conceptos clave en la carrera.",
        "1 Te animo a considerar su importancia para tu formación.",
        "0Muchas gracias lo tendré en cuenta.",
        "0Antes de irme, ¿Podría decirme donde se encuentra el director de carrera?",
        "1Claro, el director de carrera se encuentra en el AREA DE COMISIONES...",
        "1Para llegar a ahí debes subir la escalera que está a la derecha de la..",
        "1de la puerta principal, frente a la secretaría.",
        "0Muchas gracias, nos vemos luego.",
      ],
      en: [
        "1I understand, not all subjects are to everyone's liking. However,",
        "1these subjects are pillars to understand key concepts in the career.",
        "1 I encourage you to consider its importance for your training.",
        "0Thank you very much, I will keep it in mind.",
        "0Before I leave, could you tell me where the career director is?",
        "1Of course, the career director is in the COMMISSIONS AREA...",
        "1To get there you must climb the stairs on the right of the...",
        "1from the main door, in front of the secretary.",
        "0Thank you very much, see you later.",
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
