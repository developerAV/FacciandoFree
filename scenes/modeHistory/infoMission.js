import { PROPERTY } from "../../utils/constants.js";

// Path: scenes/modeHistory/dialogs.js
const dialogs = {
  mission1: {
    positionMap: { x: 100, y: 120 },
    positionButton: { x: 973, y: 746 },
    narrador: "mission1",
    dialogs: "dialog1",
    video: "avatarVideo1",
    time: 60,
    step1: "Entra por a la puerta principal",
    step2: "Entra a secretaría",
    step3: "Acercate a la secretaria",
    step4: "Dirigete a la planta baja",
    step5: "Acercate al cubiculo",
  },
  mission2: {
    positionMap: { x: 25, y: 80 },
    positionButton: { x: 600, y: 350 },
    dialogs: "dialog2",
    video: "avatarVideo2",
    time: 400,
    narrador: "mission2",
    video: "avatarVideo2",
    step1: "Acercate al cubiculo de la ing Hiraida",
    step2: "Elige la opcion que creas correcta",
  },
  mission3: {
    dialogs: "dialog3",
    video: "avatarVideo1",
    narrador: "mission3",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 380, y: 565 },
    time: 10,
    step1: "Acercate al area del director de carrera",
  },
  mission4: {
    dialogs: "dialog4",
    video: "avatarVideo2",
    narrador: "mission4",
    positionButton: { x: 546, y: 583 },
    positionMap: { x: 0, y: 0 },
    time: 120,
    step1: "Acercate al compañero de clase",
    step2: "Dirigete a el area de comisiones",
    step3: "Acercate donde esta la ing Adriana",
    step4: "este es el paso 4 de la mision 4",
  },
  mission5: {
    dialogs: "dialog5",
    video: "avatarVideo1",
    narrador: "mission5",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 1200, y: 800 },
    time: 60,
    step1: "Acercate al profesor",
    step2: "Ve a la sala de electonica",
    step3: "Pidele ayuda al profesor",
    step4: "Busca el componente que te pide el profesor",
    step5: "Entrégaselo al profesor",
  },
};

export const getInfoMission = (property) => {
  const { index, step } = getIndexMission(true)

  if (!dialogs[index]) {
    return "No hay mission agregada" + index;
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
  let index = `mission${result}`;

  if (window.moreDialogs) {
    index = `${index}_${window.dialogNumber}`;
  }

  return { index, step };
};
