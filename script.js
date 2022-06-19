//Array
let myLibrary = [
    {
        'title':'Hobbit', 
        'author':'Tolkien', 
        'pages':'213', 
        'read':'Yes'
    },
    {
        'title':'Dune', 
        'author':'Herbert', 
        'pages':'603', 
        'read':'Yes'
    },
    {
        'title':'Surveiller et punir', 
        'author':'Foucault', 
        'pages':'213', 
        'read':'No'
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
        //Each div has a list with the info :
        bookCard.innerHTML = `<ul><li>` + book.title + `</li><li>` + book.author + `</li><li>` + book.pages + `</li><li><button class='button-read'>` + book.read +  `</button></li><li><button id="`+ index +`" class='button-delete'>X</button>`
        main.appendChild(bookCard);
    })
    //Delete button variable
    let buttonDelete = document.querySelectorAll('.button-delete');
    //Delete button function
    buttonDelete.forEach((button, index) => {
        button.addEventListener('click', e => {
            e.stopPropagation();
            //Takes clicked ID out of myLibrary 
            deletedBook = myLibrary.splice(index, 1);
            //Recalls myLibrary
            generateLibrary();
        })
    })
    //Read button variable
    let buttonRead = document.querySelectorAll('.button-read');
    //Delete button function
    buttonRead.forEach((button, index) => {
        button.addEventListener('click', e => {
            e.stopPropagation();
            //Takes clicked ID out of myLibrary
            if(myLibrary[index].read = 'Yes'){
                myLibrary[index].read = 'No';
            }if(myLibrary[index].read = 'No'){
                myLibrary[index].read = 'Yes';
            }
            //break ?
            console.log(myLibrary[index].author);
            //Recalls myLibrary
            generateLibrary();
        })
    })
}
generateLibrary();


//Click on the button triggers the function
button.addEventListener('click', e => {
    addBookToLibrary();
    generateLibrary();
})