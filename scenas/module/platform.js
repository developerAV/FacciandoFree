export class Platform {
  // constructor(x, y, imagen, group) {
  //     super(x, y, imagen, group);



    crearPlataforma(x, y, imagen, group, scale) {
    
        const plataforma = group.create(x, y, imagen).setScale(scale);
      
        /*   plataforma.body.setSize(plataforma.width * scale, plataforma.height * scale);
        plataforma.body.setOffset(x, y); */
    return plataforma;
  }
}

