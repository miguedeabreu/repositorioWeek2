import { Library } from "./library";
import { Book } from "./book";

let libro1: Book = new Book ("Harry Potter", 300, "2345", "J.K. Rowling", "Salamandra");

let libro2: Book = new Book ("El tiempo entre costuras", 165, "2212", "M. Dueñas", "Salamandra");

let libro3: Book = new Book ("Harry Potter 2", 300, "2345", "J.K. Rowling", "Salamandra");

let libros: Book[] = [libro1 , libro2, libro3];

let biblioteca: Library = new Library(libros,"Madrid","Miguel");

console.log(biblioteca.toString());

console.log("La cantidad de libros en la biblioteca es: " + biblioteca.getNumberOfBooks());

console.log(biblioteca.findByAuthor("J.K. Rowling"));
