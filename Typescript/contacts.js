"use strict";
exports.__esModule = true;
exports.Contacts = void 0;
var Contacts = /** @class */ (function () {
    // CONSTRUCTOR
    function Contacts() {
        this.people = [];
    }
    // DEFINICION DE METODOS PUBLICOS
    Contacts.prototype.printCalendar = function () {
        console.log(this.people);
    };
    return Contacts;
}());
exports.Contacts = Contacts;
// let personas = new Contacts ();
// let persona1 = new Person ("Miguel", 28, "Ronda");
// let persona2 = new Person ("Dita", 6, "Arguelles");
// personas.people.push(persona1);
// personas.people.push(persona2);
// personas.printCalendar();
