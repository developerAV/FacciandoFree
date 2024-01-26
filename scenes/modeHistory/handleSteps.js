import { SCENE } from "../../utils/constants.js";
export const handleSteps = (dialog = false) => {
  const mission = window.user.actualMission;
  const level = window.user.actualLevel;
  const active = window.missionActive;
  const step = window.user.step;
  // nota: ver si más adelante se puede optimizar con un bucle
  if (level == 1) {
    if (mission === 1 && active) {
      if (step === 1 && window.sceneName === SCENE.floor1) {
        window.user.step = 2;
        return;
      }
      if (step === 2 && window.sceneName === SCENE.admin_room) {
        window.user.step = 3;
        return;
      }
      if (step === 3 && window.sceneName === SCENE.admin_room && dialog) {
        window.user.step = 4;
        return;
      }
      if (step === 4 && window.sceneName === SCENE.cubicle) {
        window.user.step = 5;
        return;
      }
    }
    if (mission === 2 && active) {
      if (step === 1) {
        window.user.step = 2;
        return;
      }
    }
    if (mission === 3 && active) {
      if (step === 1 && window.sceneName === SCENE.commission_area) {
        window.user.step = 2;
        return;
      }
    }
  }

  if (level == 2) {
    if (mission === 2 && active) {
      if (step === 1) {
        window.user.step = 2;
        return;
      }
      if (step === 2 && window.sceneName === SCENE.commission_area) {
        window.user.step = 3;
        return;
      }
    }
    if (mission === 3 && active) {
      if (step === 1) {
        window.user.step = 2;
        return;
      }
      if (step === 2 && window.sceneName === SCENE.electronic_room) {
        window.user.step = 3;
        return;
      }
      if (step === 3 && dialog) {
        window.user.step = 4;
        return;
      }
      if (step === 4 && dialog) {
        window.user.step = 5;
        return;
      }
    }
  }
};
