let mylib = require ("./person");
let mylib2 = require ("./contacts");

let x = new mylib2.Contacts ()

let persona1 = new mylib.Person(176,23)

let persona2 = new mylib.Person(145,100)

let persona3 = new mylib.Person(184,70)

x.myArray.push(persona1);
x.myArray.push(persona2);
x.myArray.push(persona3);

// let personas = [persona1,persona2,persona3]
// x.myArray = personas

x.printPersons()