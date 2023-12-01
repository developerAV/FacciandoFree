import { PROPERTY } from "../../utils/constants.js";

// Path: scenes/modeHistory/dialogs.js
const dialogs = {
  mission1: {
    positionMap: { x: 100, y: 120 },
    positionButton: { x: 973, y: 746 },
    narrador: "mission1",
    dialogs: "dialog1",
    video: "avatarVideo1",
    time: 300,
    step1: "Entra por a la puerta principal",
    step2: "Entra a secretaría",
    step3: "Acercate a la secretaria",
    step4: "Sal al pasillo y dirigete al cubiculos de abajo",
    step5: "Acercate al cubiculo",
  },
  mission2: {
    positionMap: { x: 100, y: 100 },
    positionButton: { x: 973, y: 746 },
    time: 400,
    video: "avatarVideo2",
    step1: "este es el paso 1 de la mision 2",
    step2: "este es el paso 2 de la mision 2",
    step3: "este es el paso 3 de la mision 2",
    step4: "este es el paso 4 de la mision 2",
  },
  mission3: {
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 973, y: 746 },
    time: 500,
    step1: "este es el paso 1 de la mision 3",
    step2: "este es el paso 2 de la mision 3",
    step3: "este es el paso 3 de la mision 3",
    step4: "este es el paso 4 de la mision 3",
  },
  mission4: {
    positionButton: { x: 973, y: 746 },
    positionMap: { x: 0, y: 0 },
    time: 1000,
    step1: "este es el paso 1 de la mision 4",
    step2: "este es el paso 2 de la mision 4",
    step3: "este es el paso 3 de la mision 4",
    step4: "este es el paso 4 de la mision 4",
  },
};

export const getInfoMission = (property) => {
  const { index, step } = getIndexMission();

  if (!dialogs[index]) {
    return "No hay mission agregada";
  }

  if (property === PROPERTY.step) {
    return dialogs[index][step];
  }

  return dialogs[index][property];
};

export const getIndexMission = () => {
  const level = window.user.actualLevel - 1;
  const mission = window.user.actualMission;
  const step = `step${window.user.step}`;

  const result = mission + level * 3;
  const index = `mission${result}`;
  return { index, step };
};
