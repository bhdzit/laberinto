 class Nodo
{


    constructor(nombre)
    {
        this.Nombre = nombre;
        this.Hijos = [];
        this.Padre=null;
        this.vertice=null;
    }

     AgregarNodoHijo( hijo)
    {
        this.Hijos.push(hijo);
        hijo.Padre = this;
    }
}