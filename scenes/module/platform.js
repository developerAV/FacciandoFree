export const crearPlataforma = (x, y, imagen, group, scale = 1) => {
  const plataforma = group.create(x, y, imagen).setScale(scale);
  return plataforma;
};

export const dimesionesPlataforma = (plataformList, height = 1, y = 0) => {
  plataformList.children.iterate((item) => {
    item.refreshBody();
    item.body.setSize(item.body.width * 1, item.body.height * height, true);
    item.body.setOffset(0, y);
  });
};
export const dimesionesPlataformaIndividual = (
  plataform,
  height = 0,
  y = 0
) => {
  plataform.refreshBody();
  plataform.body.setSize(
    plataform.body.width * 1,
    plataform.body.height * height,
    true
  );
  plataform.body.setOffset(0, y);
};

export const overlapPlataforma = (scene, plataform) => {
  if (scene.avatar.avatarPlayer.y < plataform.y) {
    plataform.setDepth(2);
    return;
  }
  plataform.setDepth(-1);
};

export const changeNameOverlap = (scene, platform, nameIn, nameOut) => {
  if (scene.avatar.avatarPlayer.y < platform.y) {
    scene.nameScene.setText(nameIn);
    return;
  }
  scene.nameScene.setText(nameOut);
};
