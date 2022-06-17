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

const theHobbit = new Book('Hobbit', 'Tolkien', '213', 'not read yet')

theHobbit.info();