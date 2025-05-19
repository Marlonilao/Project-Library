
const main = document.querySelector('.main');
const addButton = document.querySelector('#add');
const closeButton = document.querySelector('dialog button');
const dialog = document.querySelector('dialog');
const inputTitle = document.querySelector('input[name="title"]');
const inputAuthor = document.querySelector('input[name="author"]');
const inputPages = document.querySelector('input[name="pages"]');

let myLibrary = [];

class Book {

    static addBookToLibrary(title, author, pages, status) {
        let book = new Book(title,author,pages,status);
        myLibrary.push(book);
    }


    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.id = self.crypto.randomUUID();
    }
    
    displayBook() {
        let div = document.createElement('div');
        div.setAttribute('data-id', `${this.id}`);
        div.innerHTML = 
        `<div>Title: ${this.title}</div>
        <div>Author: ${this.author}</div>
        <div>Pages: ${this.pages}</div>`
        let divStatus = document.createElement('div');
        divStatus.classList.add('status')
        divStatus.innerText = `Status: ${this.status}`
        div.appendChild(divStatus);

        main.appendChild(div);
    }

    addRemoveButton(){
        let removeDiv = document.querySelector(`div[data-id="${this.id}"]`)
        let button = document.createElement('button');
        button.innerText = 'Remove';
        removeDiv.appendChild(button);
        button.addEventListener('click', () => {
            removeDiv.remove();
            const index = myLibrary.indexOf(this);
            myLibrary.splice(index, 1);
        })
    }

    toggleRead() {
        if (this.status == 'Read') {
            this.status = 'Not Read';
        } else {
            this.status = 'Read';
        }
    }

    addChangeStatus(){
        let div = document.querySelector(`div[data-id="${this.id}"]`);
        let statusDiv = document.querySelector(`div[data-id="${this.id}"] > .status`);
        let changeStatus = document.createElement('button');
        changeStatus.innerText = 'Read/Not Read';
        div.appendChild(changeStatus);
        changeStatus.addEventListener('click', ()=>{
            this.toggleRead();
            statusDiv.innerText = `Status: ${this.status}`;
        })
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
    Book.addBookToLibrary(title, author, pages, status);
    myLibrary[myLibrary.length-1].displayBook();
    myLibrary[myLibrary.length-1].addRemoveButton();
    myLibrary[myLibrary.length-1].addChangeStatus();
    dialog.close();
    document.querySelector('dialog form').reset();
})
