import { COLORS_HEX, FONT, FONT2 } from "./../../../utils/constants.js";
import { traslate } from "../../../data/dialogues.js";
import { crearVideo } from "./../../module/videoInfo.js";


export const info = async (scene) => {
  const infoConteiner = scene.add.container();
  const frame = scene.add.image(800, 500, "frame");
  const exitFrame = scene.add.image(540, 335, "exit");
  const buttonFrameScene = scene.add.image(800, 450, "buttonFrame");
  const buttonFrameGame = scene.add.image(800, 520, "buttonFrame");
  const buttonFrameMission = scene.add.image(800, 590, "buttonFrame");

  frame.setScale(0.15);

  exitFrame.setScale(0.15);

  buttonFrameScene.setScale(0.15);
  buttonFrameGame.setScale(0.15);

  buttonFrameMission.setScale(0.15);

  const labelInfo = scene.add.text(700, 350, traslate("news"), {
    font: `40px ${FONT2}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 500,
    },
  });
  const labelScene = scene.add.text(735, 430, traslate("scene"), {
    font: `40px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 500,
    },
  });
  const labelGame = scene.add.text(735, 500, traslate("game"), {
    font: `40px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 500,
    },
  });
  const labelMission = scene.add.text(735, 570, traslate("mission"), {
    font: `40px ${FONT}`,
    fill: COLORS_HEX.white,
    wordWrap: {
      width: 500,
    },
  });

  
  buttonFrameScene.setInteractive();
  buttonFrameScene.on("pointerdown", function async() {
      infoConteiner.destroy();
    //  scene.showVideo();
  });

  buttonFrameGame.setInteractive();
  buttonFrameGame.on("pointerdown", function () {
    infoConteiner.destroy();
    async function asyncCall() {
      try {
        await crearVideo(traslate("infoGame"), "avatarVideo1", scene);
        await crearVideo(traslate("infoGame2"), "avatarVideo2", scene);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    asyncCall();
  });
  buttonFrameMission.setInteractive();
  buttonFrameMission.on("pointerdown", function () {
    infoConteiner.setVisible(false);
    // scene.showVideo();
});
exitFrame.setInteractive();
exitFrame.on("pointerdown", function () {
    console.log("exit");
    infoConteiner.destroy();
});
infoConteiner.add(frame);
infoConteiner.add(buttonFrameScene);
infoConteiner.add(buttonFrameGame);
infoConteiner.add(buttonFrameMission);
infoConteiner.add(exitFrame);
infoConteiner.add(labelInfo);
infoConteiner.add(labelScene);
infoConteiner.add(labelGame);
infoConteiner.add(labelMission);
infoConteiner.setVisible(true);
infoConteiner.setScrollFactor(0);
infoConteiner.setDepth(1000);
return infoConteiner;
};
