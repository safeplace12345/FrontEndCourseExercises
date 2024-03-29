console.log("true");
let myLibrary = [];
let title, status, author, add, numOfPages, booksContainer, addBooksNow;
addBooksNow = document.querySelector('.addbooks')
title = document.querySelector('#title');
author = document.querySelector('#author');
status = document.querySelector('#status');
add = document.querySelector('#btn');
numOfPages = document.querySelector('#numOfPages');
booksContainer = document.querySelector('#books');
addBooksNow.addEventListener('click', function () {
    return document.querySelector('.addbookform').style.display = "block"
})
const deletebtns = document.querySelectorAll('.delete');
deletebtns.forEach(deleteBtn => {
    deleteBtn.addEventListener('click', () => {
        deleteBook(deleteBtn)
    })
})

function deleteBook(book) {
    let colBooks = document.querySelectorAll('.col-book')
    let test = Array.from(colBooks).find(colbook => colbook.contains(book))
    console.log(localStorage.getItem("myLibrary"))
    return booksContainer.removeChild(test)
}
add.addEventListener('click', (e) => {
    e.preventDefault();
    let newBook = new makeBook(title.value, author.value, numOfPages.value, status.value)
    // Add book i.d
//    let ObjectToDelete = addBook(newBook);
    appendBooks()
    localeStore();
})

function makeBook(tit, aut, nOp, status) {
    this.title = tit,
        this.author = aut,
        this.numOfPages = nOp;
    this.info = function () {
        return `The ${this.title} by ${this.author} , ${this.numOfPages} pages, ${this.read()} `
    }
}
makeBook.prototype.read = function (e) {
    if (!status) {
        return "and not read yet !";
    }
    return "and read !!"
}
const appendBooks = () => {
    // let newBooks = JSON.parse(localStorage.getItem("myLibrary"))
    // console.log(newBooks)
    // let newBook = newBooks[newBooks.length - 1];

    // Error occurs on the newbook.info()
    let newBook = myLibrary[myLibrary.length - 1];
    let html = `<div class="col-sm-4 col-book">
            <div class="card">
                <img src="./dd64da585bc57cb05e5fd4d8ce873f57.png" alt="" class="img-fluid">
                <div class="card-header">
                    <h1 class="text-mute">${newBook.title}</h1>
                </div>
                <div class="card-body">
                    <h6>${newBook.author}</h6>
                    <p class="card-text">${newBook.info()}</p>
                    <button class = "delete btn btn-danger" onclick = "deleteBook(this)"> Delete </button>
                </div>
            </div>
        </div>`
    booksContainer.insertAdjacentHTML('beforeend', `${html}`)
};
const addBook = newBook => {
    myLibrary.push(newBook)
    return newBook;
}
const localeStore = () => {
    if (localStorage) {
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    }
    if (localStorage.getItem("myLibrary")) {
        console.log(localStorage.getItem("myLibrary"))
    }
}
