import { Book } from "./book";

export class Library
{
    // DEFINICION DE ATRIBUTOS

    private books: Book [];
    private address: string;
    private manager: string;

    // CONSTRUCTOR 

    constructor(books: Book[], address: string, manager: string)
    {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }

     // DEFINICION DE METODOS PUBLICOS

    // GETTERS

    getAddress ():string
    {
        return this.address;
    }

    getManager ():string
    {
        return this.manager;
    }

    // SETTERS

    setAddress (address:string)
    {
        this.address = address;
    }

    setManager (manager:string)
    {
        this.manager = manager
    }

    //

    public toString():string
    {
        let resultado = "";
        for (let i =0 ; i < this.books.length ; i++)
        {
            resultado = resultado + "Book " + (i+1) + "\n" + this.books[i].toString() + "\n";
        }
        return resultado;
    }

    getNumberOfBooks():number
    {
        return this.books.length
    }

    findByAuthor(author:string):Book[]
    {
        let resultado: Book[] = [];

        for (let i =0 ; i < this.books.length ; i++)
        {
            if (author == this.books[i].getAuthor())
            {
                resultado.push(this.books[i])
            }
        }
        return resultado
    }
}



// VOID

// let libro1: Book = new Book ("Harry Potter", 300, "2345", "J.K. Rowling", "Salamandra");

// let libro2: Book = new Book ("El tiempo entre costuras", 165, "2212", "M. Dueñas", "Salamandra");

// let libros: Book[] = [libro1 , libro2];

// let biblioteca: Library = new Library(libros,"Madrid","Miguel");

// console.log(biblioteca.toString());

// console.log("La cantidad de libros en la biblioteca es: " + biblioteca.getNumberOfBooks());

// console.log(biblioteca.findByAuthor("M. Dueñas"));
