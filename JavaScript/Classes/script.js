console.log("true");

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

const newBook = new makeBook("Hobbit", "J.R.R. Tolkien", " 295 ", false)
console.log(newBook.info())