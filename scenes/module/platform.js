export const crearPlataforma = (x, y, imagen, group, scale = 1) => {
  const plataforma = group.create(x, y, imagen).setScale(scale);

  return plataforma;
};

export const dimesionesPlataforma = (plataformList, height, y) => {
  plataformList.children.iterate((item) => {
    item.refreshBody();
    item.body.setSize(item.body.width * 1, item.body.height * height, true);
    item.body.setOffset(0, y);
  });
};
export const dimesionesPlataformaIndividual = (plataform, height, y) => {
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
  } else {
    plataform.setDepth(-1);
}
};