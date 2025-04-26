const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = self.crypto.randomUUID();
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const main = document.querySelector('.main');
const addButton = document.querySelector('#add');

addBookToLibrary('Hobbit','Juan',300, true);

addBookToLibrary('Book2','Author2',300, false);

addBookToLibrary('Book3','Author3',300,true);

addBookToLibrary('Book4','Author4',300,true);

function displayBook(){
    for(let i=0; i<myLibrary.length; i++){
        const div = document.createElement('div');
        main.appendChild(div);
        div.innerHTML = 
        `<div>Title:${myLibrary[i].title}</div>
         <div>Author:${myLibrary[i].author}</div>
         <div>Pages:${myLibrary[i].pages}</div>
         <div>read:${myLibrary[i].read}</div>`

    }
}

displayBook();

addButton.addEventListener('click', (e) => {
    // const div = document.createElement('div');
    // main.appendChild(div);
    // div.textContent = 'test';
})
