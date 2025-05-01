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

    // displayBook.call(newBook);
}

const main = document.querySelector('.main');
const addButton = document.querySelector('#add');
const closeButton = document.querySelector('dialog button');
const dialog = document.querySelector('dialog');
const inputTitle = document.querySelector('input[name="title"]');
const inputAuthor = document.querySelector('input[name="author"]');
const inputPages = document.querySelector('input[name="pages"]');
// const inputStatus = document.querySelector('input[name="status"]');

// function displayBook(){
//     const div = document.createElement('div');
//     main.appendChild(div);
//     const title = document.createElement('p');
//     title.textContent = `Title: ${this.title}`; 
//     div.appendChild(title); 
//     const author = document.createElement('p');
//     author.textContent = `Author: ${this.author}`;
//     div.appendChild(author);
//     const pages = document.createElement('p');
//     pages.textContent = `Pages; ${this.pages}`;
//     div.appendChild(pages);
//     const status = document.querySelector('p');
//     status.textContent = `Status: ${this.status}`;
//     div.appendChild(status);

//     const removeButton = document.createElement('button');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', ()=>{
//         main.removeChild(div);
//     })
// }

function displayBook() {
    main.textContent = ''
    for (let i = 0; i<myLibrary.length; i++) {
        const div = document.createElement('div');
        div.setAttribute("data-id",`${myLibrary[i].id}`)
        main.appendChild(div);
        div.innerHTML = 
        `<div>Title:${myLibrary[i].title}</div>
        <div>Author:${myLibrary[i].author}</div>
        <div>Pages:${myLibrary[i].pages}</div>`
        const divStatus = document.createElement('div');
        divStatus.textContent = `Status:${myLibrary[i].status}`
        div.appendChild(divStatus);
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        div.appendChild(removeButton);

        removeButton.addEventListener('click', () => {
            const index = myLibrary.indexOf(myLibrary[i])
            if (index > -1) { // only splice array when item is found
                myLibrary.splice(index, 1); // 2nd parameter means remove one item only
              }
            // removed = myLibrary[i]
            // myLibrary = myLibrary.filter(item => item !== removed)
            main.removeChild(div);
        }) 
    }
}


// function displayBook(){
//     if (myLibrary.length > 1) {
//         const div = document.createElement('div');
//         main.appendChild(div);
//         div.innerHTML = 
//         `<div>Title:${myLibrary[myLibrary.length - 1].title}</div>
//         <div>Author:${myLibrary[myLibrary.length - 1].author}</div>
//         <div>Pages:${myLibrary[myLibrary.length - 1].pages}</div>`
//         const divStatus = document.createElement('div');
//         divStatus.textContent = `Status:${myLibrary[myLibrary.length -1].status}`
//         div.appendChild(divStatus);
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         div.appendChild(removeButton);

//         removeButton.addEventListener('click', e => {
//             main.removeChild(div);
//         })
//     } else {
//         const div = document.createElement('div');
//         main.appendChild(div);
//         div.innerHTML = 
//         `<div>Title:${myLibrary[0].title}</div>
//         <div>Author:${myLibrary[0].author}</div>
//         <div>Pages:${myLibrary[0].pages}</div>`
//         const divStatus = document.createElement('div');
//         divStatus.textContent = `Status:${myLibrary[0].status}`
//         div.appendChild(divStatus);
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remove';
//         div.appendChild(removeButton);

//         removeButton.addEventListener('click', e => {
//             main.removeChild(div);
//         }) 
//     }
// }

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
    displayBook();
    document.querySelector('dialog form').reset();
})


