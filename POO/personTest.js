let mylib = require("./person");

let persona1 = new mylib.Person (180,70);
console.log(persona1);

console.log(persona1.calcularIMC());

console.log(persona1.edad(2022));

persona1.printAll()

persona1.printHobbies()