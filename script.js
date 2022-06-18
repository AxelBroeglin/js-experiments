    //Array
let myLibrary = [
    {
        'Title':'Hobbit', 
        'Author':'Tolkien', 
        'Pages':'213', 
        'Read':'yes'
    },
    {
        'Title':'Dune', 
        'Author':'Herbert', 
        'Pages':'603', 
        'Read':'yes'
    },
    {
        'Title':'Surveiller et punir', 
        'Author':'Foucault', 
        'Pages':'213', 
        'Read':'no'
    }
];

    //Variables
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