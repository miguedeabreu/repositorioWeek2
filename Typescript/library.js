"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    // CONSTRUCTOR 
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    // DEFINICION DE METODOS PUBLICOS
    // GETTERS
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    // SETTERS
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    //
    Library.prototype.toString = function () {
        var resultado = "";
        for (var i = 0; i < this.books.length; i++) {
            resultado = resultado + "Book " + (i + 1) + "\n" + this.books[i].toString() + "\n";
        }
        return resultado;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var resultado = [];
        for (var i = 0; i < this.books.length; i++) {
            if (author == this.books[i].getAuthor()) {
                resultado.push(this.books[i]);
            }
        }
        return resultado;
    };
    return Library;
}());
exports.Library = Library;
// VOID
// let libro1: Book = new Book ("Harry Potter", 300, "2345", "J.K. Rowling", "Salamandra");
// let libro2: Book = new Book ("El tiempo entre costuras", 165, "2212", "M. Dueñas", "Salamandra");
// let libros: Book[] = [libro1 , libro2];
// let biblioteca: Library = new Library(libros,"Madrid","Miguel");
// console.log(biblioteca.toString());
// console.log("La cantidad de libros en la biblioteca es: " + biblioteca.getNumberOfBooks());
// console.log(biblioteca.findByAuthor("M. Dueñas"));
