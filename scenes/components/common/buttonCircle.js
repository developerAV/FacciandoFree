export const buttonCircle = (scene) => {
    const containerX = scene.add.container(scene.avatar.avatarPlayer.x +80, scene.avatar.avatarPlayer.y);

    scene.buttonCentro = scene.add.circle(
      0, 0,
      25,
      0xf2f2f2,
      0.6
    );
    //text press x
    scene.textx = scene.add.text(-14, -10, "Press\n    X", {
      fontFamily: "Arial",
      fontSize: 10,
      color: "#f2f2f2",
    });

    setInterval(() => {
      if(scene.buttonCentro.strokeColor == 0xffffff){
        scene.buttonCentro.setStrokeStyle(8, 0xf2f2f2);
        scene.textx.setColor("#000");
        return;
      }
      scene.buttonCentro.setStrokeStyle(4, 0xffffff);
        scene.textx.setColor("#f2f2f2");
    }, 1000);
    
    containerX.add(scene.buttonCentro);
    containerX.add(scene.textx);
    containerX.setDepth(1);

    return containerX;
    }