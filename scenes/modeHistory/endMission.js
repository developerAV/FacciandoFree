import { putUser } from "../../services/user.js";
import { PROPERTY } from "../../utils/constants.js";
import { getInfoMission } from "./infoMission.js";

export const endMission = async (nameScene, position) => {
  window.runTime = false;
  window.missionActive = false;

  window.answerScore = parseInt(70 * 0.7);
  window.timeScore = calcularPuntos(getInfoMission(PROPERTY.time), window.time);

  window.score = window.answerScore + window.timeCalculate;

  //calcular score con el window.time con una variable global que se llame window.score
  window.score = window.time;

  let newLevel = {
    actualMission: window.user.actualMission + 1,
  };
  if (window.user.actualMission == 3) {
    newLevel = {
      actualMission: 1,
      actualLevel: window.user.actualLevel + 1,
    };
  }

  const level = window.user.actualLevel - 1;
  const mission = window.user.actualMission;
  const index = mission + level * 3 - 1;

  let listMission = window.user.missions;

  const newMission = {
    ...listMission[index],
    score: parseInt(window.timeScore + window.answerScore),
    time: window.time,
    completed: true,
  };
  window.time = 0;

  listMission[index] = newMission;
  const data = {
    missions: listMission,
    score: window.user.score + window.timeScore + window.answerScore,
    ...newLevel,
    scene: nameScene,
    position,
  };

  await putUser(window.user._id, data);
};

function calcularPuntos(tiempoMision, tiempoTranscurrido) {
  const puntosTotales = 70; // Puntos totales de la misión

  // Verifica que el tiempo transcurrido no supere el tiempo de la misión
  tiempoTranscurrido = Math.min(tiempoTranscurrido, tiempoMision);

  // Calcula los puntos de manera inversamente proporcional al tiempo
  const factorPuntuacion = puntosTotales / tiempoMision;
  const puntos = Math.round(
    puntosTotales - factorPuntuacion * tiempoTranscurrido
  );

  return parseInt(Math.max(0, puntos) * 0.3);
}
