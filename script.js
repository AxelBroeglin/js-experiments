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
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info
    }

//Prototype to log a Book
Book.prototype.info = function(){
    console.log(this.title + ' by ' + this.author + ', ' + this.pages + ', '+ this.read);
}



main.innerHTML = '';
myLibrary.forEach(book => {
    console.log(myLibrary);
    const bookCard = document.createElement('div');
    bookCard.classList.add('book');
    bookCard.innerHTML = '<ul><li>' + book.title + '</li><li>'+ book.author +'</li><li>'+ book.pages +'</li><li>'+ book.read +'</li>'
    main.appendChild(bookCard);
})



//Defines the function to add to library
function addBookToLibrary(){
    //Gather book info on click
    let book = {'title':bookTitle.value, 'author':bookAuthor.value, 'pages':bookPages.value, 'read':bookRead.value}
    myLibrary.unshift(book);
    console.log(myLibrary);
}

//Click on the button triggers the function
button.addEventListener('click', e => {
    addBookToLibrary()
})