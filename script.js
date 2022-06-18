//Array
let myLibrary = [
    {
        'title':'Hobbit', 
        'author':'Tolkien', 
        'pages':'213', 
        'read':'yes'
    },
    {
        'title':'Dune', 
        'author':'Herbert', 
        'pages':'603', 
        'read':'yes'
    },
    {
        'title':'Surveiller et punir', 
        'author':'Foucault', 
        'pages':'213', 
        'read':'no'
    }
];

//Variables
let main = document.getElementById('main');
let bookTitle = document.getElementById('book-title');
let bookAuthor = document.getElementById('book-author');
let bookPages = document.getElementById('book-pages');
let bookRead = document.getElementById('book-read');
let button = document.getElementById('button');

//Function Book
function Book(title, author, pages, read){
    this.id = id
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info
    }

//Prototype to log a Book
// Book.prototype.info = function(){
//     console.log(this.title + ' by ' + this.author + ', ' + this.pages + ', '+ this.read);
// }

//Defines the function to add to library
function addBookToLibrary(){
    //Gather book info on click
    let book = {
        'title':bookTitle.value, 
        'author':bookAuthor.value, 
        'pages':bookPages.value, 
        'read':bookRead.value
    }
    myLibrary.unshift(book);
}


//Creates a div with a index ID for each book in the array
function generateLibrary(){
    main.innerHTML = '';
    //Iterates through the array
    myLibrary.forEach((book, index) =>{
        let bookCard = document.createElement('div');
        book.id = index;
        //Each div has a list with the info :
        bookCard.innerHTML = `<ul><li>` + book.title + `</li><li>` + book.author + `</li><li>` + book.pages + `</li><li>` + book.read +  `</li><li><button class="button-delete">X</button>`
        main.appendChild(bookCard);
    })
}
generateLibrary();


//Click on the button triggers the function
button.addEventListener('click', e => {
    addBookToLibrary();
    generateLibrary();
})


let buttonDelete = document.getElementsByClassName('button-delete');
//Button to delete book
console.log(buttonDelete);
buttonDelete.addEventListener('click', e => {
    e.stopPropagation();
    console.log(this.id);
    let deleteId = this.id;
     myLibrary.filter(book => book.id != this.id);
     generateLibrary();
})