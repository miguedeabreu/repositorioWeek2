import { Person } from "./person"

export class Contacts 
{
    // DEFINICION DE ATRIBUTOS

    public people: Person[];

    // CONSTRUCTOR

    constructor ()
    {
        this.people = []
    }

    // DEFINICION DE METODOS PUBLICOS

    public printCalendar ():void
    {
        console.log (this.people)
    }
}

// let personas = new Contacts ();

// let persona1 = new Person ("Miguel", 28, "Ronda");
// let persona2 = new Person ("Dita", 6, "Arguelles");

// personas.people.push(persona1);
// personas.people.push(persona2);

// personas.printCalendar();

