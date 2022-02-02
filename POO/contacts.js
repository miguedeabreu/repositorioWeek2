let mylib = require("./person");

class Contacts
{
    constructor ()
    {
        this.myArray = [];
    }

    printPersons ()
    {
        for (let i = 0 ; i < this.myArray.length ; i++)
        {
            this.myArray[i].printAll();
        }
    }
}

module.exports = {Contacts}
