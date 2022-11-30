class Grafo {
  constructor() {
    this.vertices = [];
  }

  AgregarVertice(vert) {
    this.vertices.push(vert);
  }
  AgregarVertices(vert) {
    this.vertices = vert;
  }

  MostrarGrafo() {
    this.vertices.map((item) => {
      item.Mostraradyacentes();
    });
    // foreach(Vertice item in vertices)
    // {
    //     item.Mostraradyacentes();
    // }
  }
  Buscar(NombreVertice) {
    let encontrado = null;
    return this.vertices.filter((item) => item.Name == NombreVertice)[0];
    // foreach( item in vertices)
    // {
    //     if (item.Name == NombreVertice) {
    //         encontrado = item;
    //     }
    // }
  }

  eliminarVertice(NombreVertice) {
    this.vertices.map((item) => {
      item.adyacentes.map((item2) => {
        if (item2.Name == NombreVertice) {
          delete item[
            item.adyacentes.findIndex((i) => i.Name === NombreVertice)
          ];
          //  console.log(item.adyacentes=[]);
        }
      });
      if (item.Name == NombreVertice) {
        item.adyacentes = [];
        //console.log(item);
      }
    });
    //  console.log(this.vertices.filter(item => item.Name == "13"));
  }
}
