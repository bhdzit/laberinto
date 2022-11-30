function llenarGrafo() {
  let grafo = new Grafo();
  let vertices = [];
  for (let y = 1; y <= 8; y++) {
    for (let x = 1; x <= 8; x++) {
      let item = y + "" + x + "";
      vertices.push(new Vertice(item));
    }
  }

  for (let y = 1; y <= 8; y++) {
    for (let x = 1; x <= 8; x++) {
      let vertice = vertices.filter((item) => item.Name == y + "" + x)[0];
      let vecino = null; // y + "" + x + "->";
      //item += y + "" + x + ",";

      if (y - 1 != 0) {
        vecino = vertices.filter((item) => item.Name == y - 1 + "" + x)[0];
        vertice.adyacentes.push(vecino);
      }

      if (x + 1 != 9 && y - 1 != 0) {
        vecino += "AD:" + (y - 1) + "" + (x + 1) + ",";
        vecino = vertices.filter(
          (item) => item.Name == y - 1 + "" + (x + 1)
        )[0];
        vertice.adyacentes.push(vecino);
      }
      if (x + 1 != 9) {
        vecino += "D:" + y + "" + (x + 1) + ",";
        vecino = vertices.filter((item) => item.Name == y + "" + (x + 1))[0];
        vertice.adyacentes.push(vecino);
      }
      if (x + 1 != 9 && y + 1 != 9) {
        vecino += "BD:" + (y + 1) + "" + (x + 1) + ",";
        vecino = vertices.filter(
          (item) => item.Name == y + 1 + "" + (x + 1)
        )[0];
        vertice.adyacentes.push(vecino);
      }
      if (y + 1 != 9) {
        vecino += "B:" + (y + 1) + "" + x + ",";
        vecino = vertices.filter((item) => item.Name == y + 1 + "" + x)[0];
        vertice.adyacentes.push(vecino);
      }
      if (x - 1 != 0 && y + 1 != 9) {
        vecino += "BI:" + (y + 1) + "" + (x - 1) + ",";
        vecino = vertices.filter(
          (item) => item.Name == y + 1 + "" + (x - 1)
        )[0];
        vertice.adyacentes.push(vecino);
      }

      if (x - 1 != 0) {
        vecino += "I:" + y + "" + (x - 1) + ",";
        vecino = vertices.filter((item) => item.Name == y + "" + (x - 1))[0];
        vertice.adyacentes.push(vecino);
      }

      if (x - 1 != 0 && y - 1 != 0) {
        vecino += "AI:" + (y - 1) + "" + (x - 1) + ",";
        vecino = vertices.filter(
          (item) => item.Name == y - 1 + "" + (x - 1)
        )[0];
        vertice.adyacentes.push(vecino);
      }
      //console.log(vertice.adyacentes);
    }
    // console.log(item);
  }
  grafo.AgregarVertices(vertices);
  return grafo;
}

//grafo.MostrarGrafo();
//let origen = grafo.Buscar("21");
//let destinog = grafo.Buscar("18");
//let mibusqueda = new Busqueda();
