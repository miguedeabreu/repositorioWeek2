export class Person
{
    //DEFINICION DE ATRIBUTOS

    public nombre: string;
    public edad: number;
    private direccion: string;

    // CONSTRUCTOR

    constructor (nombre:string, edad:number, direccion:string)
    {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }

    // GETTERS

    public getDireccion():string
    {
        return this.direccion
    }

    // SETTERS

    public setDireccion(direccion:string)
    {
        this.direccion = direccion 
    }

    // DEFINICION DE METODOS PUBLICOS

    public printName ():void
    {
        console.log(this.nombre)
    }

    public yearOfBirth (anioActual: number):number
    {
        return anioActual - this.edad
    }

    public setAdress (direccion:string)
    {
        this.direccion = direccion;
    }

    public getAdress ():string
    {
        return this.direccion;
    }
}


// VOID 


// let nombre = new Person ("Miguel", 28, "Ronda de Segovia 2F");
// console.log(nombre);

// nombre.printName();

// console.log(nombre.yearOfBirth(2022));

// nombre.setAdress("Calle Segovia");

// console.log(nombre.getAdress());

