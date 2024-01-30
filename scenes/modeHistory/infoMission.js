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
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 524, y: 486 },
    dialogs: "dialog3",
    video: "avatarVideo2",
    narrador: "mission3",
    time: 60,
    step1: "Dirigete a el area de comisiones",
    step2: "avanza hasta al punto rojo",

  },
  mission4: {
    dialogs: "dialog4",
    video: "avatarVideo1",
    narrador: "mission4",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 380, y: 565 },
    time: 10,
    step1: "Acercate al area del director de carrera",
  },
  mission5: {
    dialogs: "dialog5",
    video: "avatarVideo2",
    narrador: "mission5",
    positionButton: { x: 546, y: 583 },
    positionMap: { x: 0, y: 0 },
    time: 120,
    step1: "Acercate al compañero de clase",
    step2: "Dirigete a el area de comisiones",
    step3: "Acercate donde esta la ing Adriana",
  },
  mission6: {
    dialogs: "dialog6",
    video: "avatarVideo1",
    narrador: "mission6",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 1200, y: 800 },
    time: 60,
    step1: "Acercate al profesor",
    step2: "Ve a la sala de electonica",
    step3: "Pidele ayuda al profesor",
    step4: "Busca el componente que te pide el profesor",
    step5: "Entrégaselo al profesor",
  },
  mission7: {
    dialogs: "dialog7",
    video: "avatarVideo2",
    narrador: "mission7",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 886, y: 373 },
    time: 60,
    step1: "Dirigete a los cubículos de arriba",
    step2: "Ecuentra al profesor",
    step3: "Elige una opción ",
  },
  mission8: {
    dialogs: "dialog8",
    video: "avatarVideo1",
    narrador: "mission8",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 886, y: 373 },
    time: 60,
    step1: "Dirigete al area de comisiones",
    step2: "Acercate a la secretaria",
  },
  mission9: {
    dialogs: "dialog9",
    video: "avatarVideo2",
    narrador: "mission9",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 886, y: 373 },
    time: 60,
    step1: "Acercate a tus compañeros",
    step1: "Dirigete hasta el ingeniero encargado de titulación",
    step2: "Acercate a el ingeniero",
  },
  mission10: {
    dialogs: "dialog10",
    video: "avatarVideo1",
    narrador: "mission10",
    positionMap: { x: 0, y: 0 },
    positionButton: { x: 886, y: 373 },
    time: 60,
    step1: "Ve al auditorio 2",
    step2: "Ve a sustentar tu proyecto",
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
