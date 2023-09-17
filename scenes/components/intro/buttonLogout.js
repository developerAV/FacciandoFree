import { traslate } from "../../../data/dialogues.js";
import { COLORS, FONT_SIZE, FONT } from "../../../utils/constants.js";
import { logout } from "../../../Firebase/logout.js";
import { textButton } from "../../module/textButton.js";

export const buttonLogout = (scene) => {
  var style = {
    width: 300,
    space: {
      left: 20,
      right: 20,
      top: 20,
      bottom: 20,
      title: 20,
      content: 30,
      action: 15,
    },

    background: {
      color: COLORS.blueDark,
      strokeColor: COLORS.blue,
      radius: 10,
      alpha: 0.5,
    },

    title: {
      space: { left: 5, right: 5, top: 5, bottom: 5 },
      text: {
        fontSize: 40,
        fontStyle: "bold",
        fontFamily: FONT,
      },
    },

    content: {
      space: { left: 5, right: 5, top: 5, bottom: 5 },
      text: {
        fontSize: 35,
        fontFamily: FONT,
      },
    },

    buttonMode: 2,
    button: {
      space: { left: 100, right: 100, top: 40, bottom: 40 },
      text: {
        fontSize: 35,
        fontFamily: FONT,
      },
      background: {
        color: COLORS.blue,
        strokeColor: COLORS.white,
        radius: 5,

        "hover.strokeColor": 0xffffff,
        "hover.radius": 10,
      },
    },

    align: {
      actions: "center",
    },
  };
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
    //const confirmacion = confirm(traslate("confirmLogout"));
    /*  if (confirmacion) {
      logout(scene);
    } */
  });

  /*  scene.add
    .image(400, 300, "classroom")
    .setInteractive()
    .on("pointerup", function () {
      print.text += "Click bottom image\n";
    }); */

  return logoutButton;
};
