let myLibrary = [];

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
    displayBook(newBook);
    addRemoveButton(newBook)
    changeStatus(newBook);
}

const main = document.querySelector('.main');
const addButton = document.querySelector('#add');
const closeButton = document.querySelector('dialog button');
const dialog = document.querySelector('dialog');
const inputTitle = document.querySelector('input[name="title"]');
const inputAuthor = document.querySelector('input[name="author"]');
const inputPages = document.querySelector('input[name="pages"]');
// const inputStatus = document.querySelector('input[name="status"]');


function displayBook(book) {
    let div = document.createElement('div');
    div.setAttribute('data-id', `${book.id}`);
    div.innerHTML = 
    `<div>Title: ${book.title}</div>
    <div>Author: ${book.author}</div>
    <div>Pages: ${book.pages}</div>`
    let divStatus = document.createElement('div');
    divStatus.classList.add('status')
    divStatus.innerText = `Status: ${book.status}`
    div.appendChild(divStatus);

    main.appendChild(div);
}

function addRemoveButton(book) {
    let removeDiv = document.querySelector(`div[data-id="${book.id}"]`)
    let button = document.createElement('button');
    button.innerText = 'Remove';
    removeDiv.appendChild(button);
    button.addEventListener('click', e => {
    removeDiv.remove();
    const index = myLibrary.indexOf(book);
    myLibrary.splice(index, 1);
    })
}

Book.prototype.toggleRead = function() {
    if (this.status == 'Read') {
        this.status = 'Not Read';
    } else {
        this.status = 'Read';
    }
}

function changeStatus(book){
    let div = document.querySelector(`div[data-id="${book.id}"]`);
    let statusDiv = document.querySelector(`div[data-id="${book.id}"] > .status`);
    let changeStatus = document.createElement('button');
    changeStatus.innerText = 'Read/Not Read';
    div.appendChild(changeStatus);
    changeStatus.addEventListener('click', ()=>{
        book.toggleRead();
        statusDiv.innerText = `Status: ${book.status}`;
    })
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
    addBookToLibrary(title, author, pages, status);
    dialog.close();
    document.querySelector('dialog form').reset();
})


