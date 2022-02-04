import {Person} from "./person"
import {Contacts} from "./contacts"

let personas = new Contacts ();

let persona1 = new Person ("Miguel", 28, "Ronda");
let persona2 = new Person ("Dita", 6, "Arguelles");

personas.people.push(persona1);
personas.people.push(persona2);

personas.printCalendar();