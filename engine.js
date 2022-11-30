let verticesAEliminar = [];
function generarAvatar() {
  avatarXposition = originSelecionado.x * 100;

  avatar.src = "images/enemy-bug2.png";
  avatar.style.position = "absolute";
  avatar.style.left = avatarXposition + "px";
  console.log(avatar.style.left);
  avatarYposition = 100 - originSelecionado.y * 80;
  avatar.style.bottom = 100 - originSelecionado.y * 80 + "px";
  avatar.style.zIndex = 2;
  src.appendChild(avatar);
}

function generarMapa(filas, columnas) {
  for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
      const img = document.createElement("img");
      img.src = "images/grass-block.png";
      img.style.position = "absolute";
      img.style.left = j * 100 + "px";
      img.style.bottom = -(i * 80) + "px";
      img.onclick = (e) => {
        if (seVaSelecionarOrigen) {
          let inicio = document.getElementById("inicio");
          console.log(i, "->" + img.style.bottom);
          inicio.style.left = img.style.left;
          inicio.style.top = -120 + i * 80 + "px";
          seVaSelecionarOrigen = false;
          originSelecionado = { y: i + 1, x: j + 1 };

          origen = grafo.Buscar(originSelecionado.y + "" + originSelecionado.x);
        } else if (seVaSelecionarDestino) {
          let final = document.getElementById("destino");
          final.style.left = img.style.left;
          final.style.top = -120 + i * 80 + "px";
          seVaSelecionarDestino = false;
          destinoSelecionado = { y: i + 1, x: j + 1 };
          destino = grafo.Buscar(
            destinoSelecionado.y + "" + destinoSelecionado.x
          );
        } else {
          console.log(e.srcElement.src);
          if ((e.srcElement.src + "").includes("images/grass-block.png")) {
            img.src = "images/water-block.png";
            verticesAEliminar.push(i + 1 + "" + (j + 1));
          } else {
            img.src = "images/grass-block.png";
            
            delete verticesAEliminar[verticesAEliminar.indexOf(i + 1 + "" + (j + 1))];
          }
        }
      };
      src.appendChild(img);
    }
  }
}

function celiminarVertices(vertiName) {
  vertiName.map((item) => {
    grafo.buscarVertice(item);
  });
}

function posicionarAvatar(x, y) {
  let inicioDeY = 100;
  avatarXposition = x * 100 - 100;
  avatar.style.left = x * 100 - 100 + "px";
  avatar.style.bottom = inicioDeY - y * 80 + "px";
}

function getPsosionFinal(x, y) {
  let inicioDeY = 100;
  return {
    x: x * 100 - 100,
    y: inicioDeY - y * 80,
  };
}
