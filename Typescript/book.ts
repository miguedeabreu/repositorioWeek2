export class Book 
{
    // DEFINICION DE ATRIBUTOS

    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial: string;

    // CONSTRUCTOR

    constructor (title:string, nPages:number, isbn:string, author:string, editorial:string)
    {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    // DEFINICION DE METODOS PUBLICOS

    // GETTERS

     getTitle():string
     {
        return this.title;
     }

     getnPages():number
     {
         return this.nPages;
     }

     getIsbn():string
     {
         return this.isbn;
     }

     getAuthor():string
     {
         return this.author
     }

     getEditorial():string
     {
         return this.editorial
     }

     // SETTERS

     setTitle (title:string)
     {
        this.title = title;
     }

     setnPages (nPages:number)
     {
         this.nPages = nPages;
     }

     setIsbn (isbn:string)
     {
         this.isbn = isbn;
     }

     setAuthor (author:string)
     {
         this.author = author;
     }

     setEditorial (editorial:string)
     {
         this.editorial = editorial;
     }

     //

     public toString():string
     {
         return "Title - " + this.title + "\n" + "Numer of Pages - " + this.nPages +
                "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author +
                "\n" + "Editorial - " + this.editorial
     }
}

// VOID

// let libro1 = new Book ("Harry Potter", 300, "2345", "J.K. Rowling", "Salamandra");
// console.log(libro1.toString());