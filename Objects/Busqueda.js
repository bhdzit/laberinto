class Busqueda {

    constructor() {
        this.ruta = [];
    }

    PrimeroEnAnchura(Origen, Destino, grafo) {
        let ArbolSolucion = new Nodo("Ruta -> ");
        let Frontera = []//new Queue<Nodo>();

        let NodoOrigen = new Nodo(Origen.Name);
        NodoOrigen.vertice = Origen;
        ArbolSolucion.AgregarNodoHijo(NodoOrigen);
        Frontera.push(NodoOrigen)//.Enqueue(NodoOrigen);
        while (Frontera.length > 0) {
            let NodoActual = Frontera.shift();
            //            Frontera=[];
            let v = NodoActual.vertice;
            if (v.visitado == false) {
                v.visitado = true;
            }
            if (v.Name == Destino.Name) {
                this.CalcularrutaAl(NodoActual);
                break;
            }
            //foreach (let w in v.adyacentes)
            v.adyacentes.map(w => {
                if (w.visitado == false) {
                    w.visitado = true;
                    let NodoAdyacente = new Nodo(w.Name);
                    NodoAdyacente.vertice = w;
                    NodoActual.AgregarNodoHijo(NodoAdyacente);
                    Frontera.push(NodoAdyacente);
                }
            });

        }
    }
    getRuta() {

        this.ruta = this.ruta.reverse();
        this.ruta.shift();
        return this.ruta;
    }

    CalcularrutaAl(inicial) {
        let rec = inicial;
        while (rec.Padre != null) {
            console.log(rec.Nombre + " -> ");
            rec = rec.Padre;
            this.ruta.push(rec);
        }
    }
}