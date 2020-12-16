 const books = [{
         title: 'Book',
         author: 'Name'
     },
     {
         title: 'Book2',
         author: 'Name2'
     }
 ]


const getTheTitles = function(arg) {
   let newArr = []
   books.forEach(
       (book) => {
           newArr.push(book.title)
       }
   )
   return newArr
}
console.log(getTheTitles(books))
// module.exports = getTheTitles;
