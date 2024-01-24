
import { COLORS } from "../../../utils/constants.js";
import { getUserById } from "../../../services/user.service.js";
import { FONT } from "../../../utils/constants.js";

export const panelComment = function (scene, listComments) {
    
    scene.scrollablePanel2 = scene.rexUI.add
    .scrollablePanel({
      x: 1050,
      y: 500,
      width: 1000,
      height: 450,

      scrollMode: 0,

   


      background: scene.rexUI.add.roundRectangle({
        strokeColor: COLORS.blue,
        radius: 10,
      }),

      panel: {
        child: createPanel2(scene, listComments ),
        mask: { padding: 1 },
      },

      slider: {
        track: scene.rexUI.add.roundRectangle({
          width: 20,

          radius: 10,
          color: COLORS.blueDark,
          alpha: 0.5,
        }),
        thumb: scene.rexUI.add.roundRectangle({
          radius: 13,
          color: COLORS.white,
        }),
        space: {
          top: 0,
          right: 20,
          left: 20,
        },
      },
      mouseWheelScroller: {
        focus: false,
        speed: 0.1,
      },
      space: {
        left: 40,
        right: 0,
        top: 0,
        bottom: 0,
        panel: 10,
      },
    })
    .layout();
    return;

}



let createPanel2 = function (scene, listComments) {
    let xInit = 1;
    let yInit = 100;
    scene.container = scene.add.container();
    let user;
    

    listComments.forEach(async(listComment, index) => {
       user = await getUserById(listComment.user);
        console.log("user -----", user.idUserFirebase);
    let color = user.idUserFirebase === window.user.idUserFirebase ? COLORS.blue : COLORS.COLOR_PRIMARY;
      let imgX = user.idUserFirebase === window.user.idUserFirebase ? 850 : 50;
      let nameX = user.idUserFirebase === window.user.idUserFirebase ? 650 : 80;
    
      let container2 = scene.add.container(xInit, yInit);
  
      const boxBg = scene.add.graphics();
      boxBg.fillGradientStyle(
        color,
        color,
        color,
        color,
        0.9,
        1,
        0.3
      );
      // boxBg.fillRect(0, 0, 900, 90);
  
      // const profile2 = scene.add.image(50, 45, listComments.user.idUserFirebase ? "profile" : "avatar");

      const imageUrl = user.imageUrl;
      scene.load.image(user.idUserFirebase, imageUrl);
      scene.load.start(); // Inicia la carga
      const profile2 = scene.add.image(imgX, 45, user.idUserFirebase);
      profile2.setScale(0.7);
  //cargar imagen con load desde create
      const name = scene.add.text(nameX, 5, user.name, {
        font: `20px ${FONT}`,
        fill: "#fff",
        wordWrap: {
          width: 500,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
      const commenst = scene.add.text(100, 30, listComment.content ?? "No school", {
        font: `24px ${FONT}`,
        fill: "#fff",
        wordWrap: {
          width: 600,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
      yInit = yInit + commenst.height+ 50;
     
      boxBg.fillRect(0, 0, 900, commenst.height+ 35);
      container2.add(boxBg);
      container2.add(name);
      container2.add(commenst);
    
      scene.container.add(container2);
  
     //update heigth at container
      scene.container.setSize(200, yInit);
      //update boxBg fillRect height
     
      container2.add(profile2);
  
    });
    scene.container.setSize(200, yInit);
    return scene.container;
  };