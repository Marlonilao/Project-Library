const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.status = read,
    this.id = self.crypto.randomUUID()
}


function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const main = document.querySelector('.main');
const addButton = document.querySelector('#add');
const closeButton = document.querySelector('dialog button');
const dialog = document.querySelector('dialog');
const inputTitle = document.querySelector('input[name="title"]');
const inputAuthor = document.querySelector('input[name="author"]');
const inputPages = document.querySelector('input[name="pages"]');
// const inputStatus = document.querySelector('input[name="status"]');


function displayBook(){
    if (myLibrary.length > 1) {
        const div = document.createElement('div');
        main.appendChild(div);
        div.innerHTML = 
        `<div>Title:${myLibrary[myLibrary.length - 1].title}</div>
        <div>Author:${myLibrary[myLibrary.length - 1].author}</div>
        <div>Pages:${myLibrary[myLibrary.length - 1].pages}</div>
        <div>Status:${myLibrary[myLibrary.length - 1].status}</div>`
    } else {
        const div = document.createElement('div');
        main.appendChild(div);
        div.innerHTML = 
        `<div>Title:${myLibrary[0].title}</div>
        <div>Author:${myLibrary[0].author}</div>
        <div>Pages:${myLibrary[0].pages}</div>
        <div>Status:${myLibrary[0].status}</div>`
    }
}

addButton.addEventListener('click', (e) => {
    dialog.showModal();
})

closeButton.addEventListener('click', e => {
    e.preventDefault();
    const author = inputAuthor.value;
    const title = inputTitle.value;
    const pages = inputPages.value;
    const status = document.querySelector('input[name="status"]:checked').value;
    addBookToLibrary(author, title, pages, status);
    dialog.close();
    displayBook();
    document.querySelector('dialog form').reset();
})


