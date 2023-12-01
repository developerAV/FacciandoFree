import { traslate } from "../../../../data/dialogues.js";
import { COLORS, FONT_SIZE } from "../../../../utils/constants.js";
import { logout } from "../../../../Firebase/logout.js";
import { textButton } from "../../../module/textButton.js";
import { style } from "./styles.js";

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

  var print = scene.add.text(0, 0, "").setDepth(1);
  logoutButton.setDepth(1);
  logoutButton.setInteractive();
  logoutButton.on("pointerdown", () => {
    scene.rexUI.add
      .confirmDialog(style)
      .setPosition(800, 500)
      .setDraggable("title")
      .resetDisplayContent({
        title: traslate("logoutDialog"),
        content: traslate("contentLogout"),
        buttonA: traslate("yes"),
        buttonB: traslate("no"),
      })
      .layout()
      .modalPromise()
      .then(function (data) {
        if (data.index === 0) {
          logout(scene);
        }
      });
  });

  return logoutButton;
};
