let myLibrary = [];

let bookTitle = document.getElementById('book-title');
let bookAuthor = document.getElementById('book-author');
let bookPages = document.getElementById('book-pages');
let bookRead = document.getElementById('book-read');
let button = document.getElementById('button');

function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info
    }

Book.prototype.info = function(){
    console.log(this.title + ' by ' + this.author + ', ' + this.pages + ', '+ this.read);
}

//Gathe rbook info on click
button.addEventListener('click', e => {
    console.log('le cul')
    console.log(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    }
)

function addBookToLibrary(){

}


const theHobbit = new Book('Hobbit', 'Tolkien', '213', 'not read yet')

theHobbit.info();