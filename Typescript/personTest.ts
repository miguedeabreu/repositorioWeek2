import { Person } from "./person"

let nombre = new Person ("Miguel", 28, "Ronda de Segovia 2F");
console.log(nombre);

nombre.printName();

console.log(nombre.yearOfBirth(2022));

nombre.setAdress("Calle Segovia");

console.log(nombre.getAdress());