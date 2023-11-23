// Path: scenes/modeHistory/dialogs.js
const dialogs = {
  mission1: {
    step1: "Entra por a la puerta principal",
    step2: "anda a cubiculo",
    step3: "este es el paso 3 de la mision 1",
    step4: "este es el paso 4 de la mision 1",
  },
  mission2: {
    step1: "este es el paso 1 de la mision 2",
    step2: "este es el paso 2 de la mision 2",
    step3: "este es el paso 3 de la mision 2",
    step4: "este es el paso 4 de la mision 2",
  },
  mission3: {
    step1: "este es el paso 1 de la mision 3",
    step2: "este es el paso 2 de la mision 3",
    step3: "este es el paso 3 de la mision 3",
    step4: "este es el paso 4 de la mision 3",
  },
  mission4: {
    step1: "este es el paso 1 de la mision 4",
    step2: "este es el paso 2 de la mision 4",
    step3: "este es el paso 3 de la mision 4",
    step4: "este es el paso 4 de la mision 4",
  },
};

export const dialog = () => {
  if (!window.step) {
    window.step = 1;
  }
  const level = window.user.actualLevel - 1;
  const mission = window.user.actualMission;
  const step = `step${window.step}`;
  //const step = `step${window.user.step}`;

  const result = mission + level * 3;
  const index = `mission${result}`;

  if (!dialogs[index]) {
    return "No hay dialogos";
  }

  return dialogs[index][step];
};
/* text: "Hola, soy Valentin, el CEO de Facci. Bienvenido a tu primer día de trabajo. ¿Estás listo para empezar?",
      options: [
        {
          text: "Si",
          nextStep: "step2",
        },
        {
          text: "No",
          nextStep: "step3",
        },
      ], */
