const traslateIntro = {
  year: {
    es: "Años",
    en: "Years old",
  },
  //cubiculo
  infoCubicle: {
    es: " En este ejemplo, setTimeout se usa para retrasar la ejecución de una función (o fragmento de código) durante un tiempo específico en milisegundos. ",
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
};

export const traslate = (key) => {
  if (traslateIntro[key] === undefined) {
    return key + ": no agregado";
  }

  return traslateIntro[key][window.lan];
};
