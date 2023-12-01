import { putUser } from "../../services/user.js";
import { SCENE } from "../../utils/constants.js";
export const handleSteps = async (dialog = false) => {
  const mission = window.user.actualMission;
  const active = window.missionActive;
  const step = window.user.step;
  // nota: ver si más adelante se puede optimizar con un bucle
  if (mission === 1 && active) {
    if (step === 1 && window.sceneName === SCENE.floor1) {
      window.user.step = 2;
      //await putUser(window.user._id, { step: 2 });
      return;
    }
    if (step === 2 && window.sceneName === SCENE.admin_room) {
      window.user.step = 3;
      //await putUser(window.user._id, { step: 3 });
      return;
    }
    if (step === 3 && window.sceneName === SCENE.admin_room && dialog) {
      window.user.step = 4;
      //await putUser(window.user._id, { step: 4 });
      return;
    }
    if (step === 4 && window.sceneName === SCENE.cubicle) {
      window.user.step = 5;
      // await putUser(window.user._id, { step: 5 });
      return;
    }
  }
};
