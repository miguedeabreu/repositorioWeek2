class Person
{
    constructor (altura, peso)
    {
        this.nombre = "Miguel";
        this.altura = altura;
        this.peso = peso;
        this.edad;
        this.sexo;
        this.tonoPiel;
        this.aaaaNacimiento = 1993;
        this.hobbies = ["leer","caminar","dormir"];
    }

    calcularIMC ()
    {
    let resultado = (this.peso/this.altura**2) *10000;
    return resultado;
    }

    edad (x)
    {
        let edad = x - this.aaaaNacimiento;
        return edad;
    }

    printAll ()
    {
        for (let propiedad in this)
        {
            let resultado = propiedad + " - " + this[propiedad];
            console.log(resultado);
        }
    }

    printHobbies ()
    {
        for (let i =  0 ; i < this.hobbies.length ; i++)
        {
            console.log(this.hobbies[i]);
        }
    }
}

// MAIN

// let valor = new Person (175,75);
// console.log(valor);

// console.log(valor.calcularIMC());

// console.log(valor.edad(2022));

// valor.printAll()

// valor.printHobbies()

module.exports = {Person}