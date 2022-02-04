class Vector
{
    // DEFINICION DE ATRIBUTOS

    private elements: number[];
    private n: number;
    private k: number;

    // CONSTRUCTOR 

    constructor (n:number,k:number)
    {
        this.elements = [];
        this.n = n;
        this.k = k;
    }

     // DEFINICION DE METODOS PUBLICOS

    // GETTERS

    getElements ():number[]
    {
        return this.elements
    }
    
    getN ():number
    {
        return this.n;
    }

    getK ():Number
    {
        return this.k;
    }

    // SETTERS

    setElements (elements:number[])
    {
        this.elements = [];
    }

    setN (n:number)
    {
        this.n = n;
    }

    setK (k:number)
    {
        this.k = k;
    }

    //

    public print():number
    {
        return 
    }

}