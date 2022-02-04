"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    // CONSTRUCTOR
    function Person(nombre, edad, direccion) {
        this.nombre = nombre;
        this.edad = edad;
        this.direccion = direccion;
    }
    // GETTERS
    Person.prototype.getDireccion = function () {
        return this.direccion;
    };
    // SETTERS
    Person.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    // DEFINICION DE METODOS PUBLICOS
    Person.prototype.printName = function () {
        console.log(this.nombre);
    };
    Person.prototype.yearOfBirth = function (anioActual) {
        return anioActual - this.edad;
    };
    Person.prototype.setAdress = function (direccion) {
        this.direccion = direccion;
    };
    Person.prototype.getAdress = function () {
        return this.direccion;
    };
    return Person;
}());
exports.Person = Person;
// VOID 
// let nombre = new Person ("Miguel", 28, "Ronda de Segovia 2F");
// console.log(nombre);
// nombre.printName();
// console.log(nombre.yearOfBirth(2022));
// nombre.setAdress("Calle Segovia");
// console.log(nombre.getAdress());
