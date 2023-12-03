const traslateIntro = {
  //navbar out
  goHome: {
    es: "Ir a inicio",
    en: "Go to home",
  },
  contentGoHome: {
    es: "¿Estás seguro de que quieres ir a inicio?, se perderá el progreso de la misión.",
    en: "Are you sure you want to go to home? The mission progress will be lost.",
  },
  goToMenu: {
    es: "¿Estás seguro de que quieres ir a inicio?",
    en: "Are you sure you want to go to home?",
  },
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
  infoGame: {
    es: "El videojuego recorre la facultad de ingeniería en TI de la ULEAM, tiene dos modos de juego, el de recorrer y el de misión.",
    en: "The video game goes through the IT engineering faculty of the ULEAM, it has two game modes, the tour and the mission.",
  },
  infoGame2: {
    es: "El modo recorrer, permite al jugador recorrer la facultad, conociendo su historia y su infraestructura y para poder hacerlo tienes un mapa en la superior derecha de la pantalla.",
    en: "The tour mode allows the player to tour the faculty, knowing its history and infrastructure and to be able to do it you have a map in the upper right of the screen.",
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
  scene: {
    es: "Escena",
    en: "Scene",
  },
  game: {
    es: "Juego",
    en: "Game",
  },
  // narrador por mission
  mission1: {
    es: "Bienvenido a la facultad de ingeniería en TI, en esta misión tendrás que reconocer las ubicaciones de secretaría y los cubículos de los docentes de la planta baja.",
    en: "Welcome to the faculty of engineering in IT, in this mission you will have to recognize the locations of the secretary and the cubicles of the teachers on the ground floor.",
  },
  //dialogos de los videos de las misiones
  dialog1: {
    es: "Hola, soy el avatar de la facultad de ingeniería en TI, y te voy a guiar en esta aventura.",
    en: "Hello, I am the avatar of the faculty of engineering in IT, and I will guide you on this adventure.",
  },
  es: "Conocer la entrada principal de la facultad, secretaría y los cubículos de los docentes de la planta baja.",
  en: "Know the main entrance of the faculty, the secretary and the cubicles of the teachers on the ground floor.",
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
