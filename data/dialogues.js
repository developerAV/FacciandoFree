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
    es: "Facciando",
    en: "Facciando",
  },
  newContent: {
    es: "Te lleva por un recorrido por la historia de la Facultad de Ingeniería de la ULEAM, a través de un juego de preguntas y respuestas.",
    en: "It takes you on a tour of the history of the Faculty of Engineering of the ULEAM, through a game of questions and answers.",
  },
  
};

export const traslate = (key) => {
  if (traslateIntro[key] === undefined) {
    return key + ": no agregado";
  }

  return traslateIntro[key][window.lan];
};
