"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    // CONSTRUCTOR
    function Book(title, nPages, isbn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    // DEFINICION DE METODOS PUBLICOS
    // GETTERS
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getnPages = function () {
        return this.nPages;
    };
    Book.prototype.getIsbn = function () {
        return this.isbn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    // SETTERS
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.setnPages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.setIsbn = function (isbn) {
        this.isbn = isbn;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    //
    Book.prototype.toString = function () {
        return "Title - " + this.title + "\n" + "Numer of Pages - " + this.nPages +
            "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author +
            "\n" + "Editorial - " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
// VOID
// let libro1 = new Book ("Harry Potter", 300, "2345", "J.K. Rowling", "Salamandra");
// console.log(libro1.toString());
