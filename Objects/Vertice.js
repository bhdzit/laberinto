class Vertice {


    constructor(name) {
        this.Name = name;
        this.adyacentes = [];
        this.visitado = false;
        this.y=name.split("")[0];
        this.x=name.split("")[1];
    }

    AgregarVerticeAdyacente(vert) {
        this.adyacentes.push(vert);
    }

    Mostraradyacentes() {
        let str=this.Name+"->";

        this.adyacentes.map(item => str+=(item.Name+","));
        console.log(str);
        // Trace.WriteLine(this.Name + ": ");
        // foreach (Vertice item in adyacentes)
        // {
        //     Trace.WriteLine("\t" + item.Name);
        // }
        // Trace.WriteLine("");
    }
}