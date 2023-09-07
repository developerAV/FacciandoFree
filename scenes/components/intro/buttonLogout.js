import { traslate } from "../../../data/dialogues.js";
import { COLORS, FONT_SIZE } from "../../../utils/constants.js";
import { logout } from "../../../Firebase/logout.js";
import { textButton } from "../../module/textButton.js";

export const buttonLogout = (scene) => {
  const logoutButton = textButton(
    scene,
    1282,
    30,
    "logout",
    COLORS.black,
    FONT_SIZE.small,
    0.9,
    true
  );

  logoutButton.setDepth(1);
  logoutButton.setInteractive();
  logoutButton.on("pointerdown", () => {
    const confirmacion = confirm(traslate("confirmLogout"));
    if (confirmacion) {
      logout(scene);
    }
  });
  
  return logoutButton;
};
