
import { COLORS } from "../../../utils/constants.js";
import { getUserById } from "../../../services/user.service.js";

export const panelComment = function (scene, listComments) {
    
    scene.scrollablePanel2 = scene.rexUI.add
    .scrollablePanel({
      x: 1050,
      y: 500,
      width: 1000,
      height: 450,

      scrollMode: 0,
   


      // background: scene.rexUI.add.roundRectangle({
      //   strokeColor: COLORS.blue,
      //   radius: 10,
      // }),

      panel: {
        child: createPanel2(scene, listComments ),
        mask: { padding: 1 },
      },

      slider: {
        value: 1,
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
        speed: 0.5,
      },
      space: {
        left: 40,
        right: 0,
        top: 0,
        bottom: 0,
        panel: 0,
      },
    })
    .layout();
    return scene.scrollablePanel2;
}


let createPanel2 = function (scene, listComments) {
    let xInit = 1;
    let yInit = 100;
    scene.container = scene.add.container();
    let user;
    

    listComments.forEach(async(listComment, index) => {
       user = await getUserById(listComment.user);
        console.log("user -----", user.idUserFirebase);
    
      let container2 = scene.add.container(xInit, yInit);
  
      const boxBg = scene.add.graphics();
      boxBg.fillGradientStyle(
        COLORS.blue,
        COLORS.blue,
        0x054294,
        0x054294,
        0.9,
        1,
        0.8
      );
      boxBg.fillRect(0, 0, 900, 90);
  
      // const profile2 = scene.add.image(50, 45, listComments.user.idUserFirebase ? "profile" : "avatar");

      const profile2 = scene.add.image(50, 45, user.idUserFirebase);
      profile2.setScale(0.7);
  //cargar imagen con load desde create
      const name = scene.add.text(100, 10, listComment.name  ? "xx" : "xd" , {
        font: `32px arial`,
        fill: "#fff",
        wordWrap: {
          width: 500,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
      const commenst = scene.add.text(100, 50, listComment.content ?? "No school", {
        font: `14px arial`,
        fill: "#fff",
        wordWrap: {
          width: 600,
        },
        padding: {
          x: 10,
          y: 10,
        },
      });
     
      container2.add(boxBg);
      container2.add(name);
      container2.add(commenst);
    
      scene.container.add(container2);
  
     
      yInit = yInit + 100;
      container2.add(profile2);
  
    });
    scene.container.setSize(200, yInit);
    return scene.container;
  };