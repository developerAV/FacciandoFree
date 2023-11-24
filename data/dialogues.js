const traslateIntro = {
  year: {
    es: "Años",
    en: "Years old",
  },
  //cubiculo
  cubicle: {
    es: "Cubículo",
    en: "Cubicle",
  },

  infoCubicle: {
    es: "En este ejemplo, setTimeout se usa para retrasar la ejecución de una función (o fragmento de código) durante un tiempo específico en milisegundos. ",
    en: "In this example, setTimeout is used to delay the execution of a function (or code snippet) for a specific amount of time in milliseconds.",
  },
  // intro
  logout: {
    es: "Salir",
    en: "Logout",
  },
  start: {
    es: "INICIAR",
    en: "START",
  },
  home: {
    es: "Inicio",
    en: "Home",
  },
  ranking: {
    es: "Clasificación",
    en: "Ranking",
  },
  avatar: {
    es: "Avatar",
    en: "Avatar",
  },
  mode: {
    es: "Modo",
    en: "Mode",
  },
  exploration: {
    es: "Exploración",
    en: "Exploration",
  },
  mission: {
    es: "Misión",
    en: "Mission",
  },
  confirmLogout: {
    es: "¿Estás seguro de que quieres cerrar sesión?",
    en: "Are you sure you want to log out?",
  },
  yes: {
    es: "Sí",
    en: "Yes",
  },
  // news
  news: {
    es: "Información",
    en: "Information",
  },
  newContent: {
    es: "Te lleva por un recorrido por la historia de la Facultad de Ingeniería de la ULEAM, a través de un juego de preguntas y respuestas.",
    en: "It takes you on a tour of the history of the Faculty of Engineering of the ULEAM, through a game of questions and answers.",
  },
  newContent2: {
    es: "La facultad fue creada en 1971, en la ciudad de Manta, provincia de Manabí, Ecuador.",
    en: "The faculty was created in 1971, in the city of Manta, province of Manabí, Ecuador.",
  },
  newContent3: {
    es: "La falcultad cuenta con tres carrera informaticas: Ingeniería en Sistemas, Ingeniería en Tecnologías de la Inforación e Ingeniería en Software.",
    en: "The faculty has three computer careers: Systems Engineering, Information Technology Engineering and Software Engineering.",
  },
  newContent4: {
    es: "Este juego fue desarrollado por estudiantes de la carrera de Ingeniería en T.I, Alex Medranda y Valentin Pico.",
    en: "This game was developed by students of the IT Engineering career, Alex Medranda and Valentin Pico.",
  },
  newContent5: {
    es: "Durante el recorrido, podrás encontrar información sobre la facultad, sus carreras, sus docentes y perfil de egreso.",
    en: "During the tour, you can find information about the faculty, its careers, its teachers and graduate profile.",
  },

  // detailsGamer
  level: {
    es: "NIVEL",
    en: "LEVEL",
  },
  description: {
    es: "Descripción",
    en: "Description",
  },
  score: {
    es: "Puntaje",
    en: "Score",
  },
  time: {
    es: "Tiempo",
    en: "Time",
  },
  completed: {
    es: "Completado",
    en: "Completed",
  },
  missionScore: {
    es: "Puntaje de la misión",
    en: "Mission score",
  },
  incomplete: {
    es: "Incompleto",
    en: "Incomplete",
  },
  //logout cerrar sesion
  logoutDialog: {
    es: "Cerrar sesión",
    en: "Logout",
  },
  contentLogout: {
    es: "¿Estás seguro de que quieres cerrar sesión?",
    en: "Are you sure you want to log out?",
  },
  no: {
    es: "No",
    en: "No",
  },
  name: {
    es: "Nombre",
    en: "Name",
  },
  school: {
    es: "Escuela",
    en: "School",
  },
  save: {
    es: "Guardar",
    en: "Save",
  },
  editProfile: {
    es: "Editar perfil",
    en: "Edit profile",
  },
  voiceSpeak: {
    es: "Spanish Latin American Male",
    en: "US English Male",
  },
  outside: {
    es: "Exterior",
    en: "Outside",
  },
  // mainHallway1
  mainHallway1: {
    es: "Pasillo principal",
    en: "Main hallway",
  },

  //narrador
  mission1: {
    es: "El personaje, un estudiante aspirante, llega a la facultad de Ciencias de la vida y tecnologías con la esperanza de ingresar a un emocionante mundo tecnológico. Encontrarás información sobre los requisitos de admisión y el perfil de egreso, que será tu guía a lo largo de tu viaje.",
    en: "The character, an aspiring student, arrives at the Faculty of Life Sciences and Technologies with the hope of entering an exciting technological world. You will find information about admission requirements and the graduate profile, which will be your guide throughout your journey.",
  },
};

export const traslate = (key) => {
  if (typeof key === "boolean") {
    return key
      ? traslateIntro.completed[window.lan]
      : traslateIntro.incomplete[window.lan];
  }

  if (key === "missionName") {
    return window.missionVisibleBox?.name[window.lan];
  }
  if (key === "descriptionMission") {
    return window.missionVisibleBox?.description[window.lan];
  }
  if (key === "actualLevel") {
    return window.listLevel[window.user.actualLevel - 1]?.name[window.lan];
  }

  if (traslateIntro[key] === undefined) {
    return key + ": no agregado";
  }

  return traslateIntro[key][window.lan];
};
