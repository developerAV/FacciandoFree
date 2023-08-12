export const crearPlataforma = (x, y, imagen, group, scale = 1) => {
  const plataforma = group.create(x, y, imagen).setScale(scale);
  // plataforma.setTint(0xff0000); // Color rojo
  /*   plataforma.body.setSize(plataforma.width * scale, plataforma.height * scale);
        plataforma.body.setOffset(x, y); */
  return plataforma;
};
