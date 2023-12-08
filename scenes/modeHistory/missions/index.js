import { mission1 } from "./mission1.js";
import { mission2 } from "./mission2.js";
import { mission3 } from "./mission3.js";
import { mission4 } from "./mission4.js";
import { mission5 } from "./mission5.js";
import { mission6 } from "./mission6.js";

export const MISSIONS = {
  mission1: (scene) => mission1(scene),
  mission2: (scene) => mission2(scene),
  mission3: (scene) => mission3(scene),

  mission4: (scene) => mission4(scene),
  mission5: (scene) => mission5(scene),
  mission6: (scene) => mission6(scene),

  /*mission7: (scene) => mission7(scene),
  mission8: (scene) => mission8(scene),
  mission9: (scene) => mission9(scene),

  mission10: (scene) => mission10(scene),
  mission11: (scene) => mission11(scene),
  mission12: (scene) => mission12(scene),
  
  mission13: (scene) => mission13(scene),
  mission14: (scene) => mission14(scene),
  mission15: (scene) => mission15(scene),*/
};
