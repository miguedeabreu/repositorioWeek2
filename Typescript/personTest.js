"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var nombre = new person_1.Person("Miguel", 28, "Ronda de Segovia 2F");
console.log(nombre);
nombre.printName();
console.log(nombre.yearOfBirth(2022));
nombre.setAdress("Calle Segovia");
console.log(nombre.getAdress());
