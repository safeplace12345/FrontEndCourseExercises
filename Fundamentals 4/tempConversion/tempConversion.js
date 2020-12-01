console.log('hello')

// const ftoc = function(faren) {
//   let cel  = (faren - 32 ) * 5/9;
//   return cel;


// }
// console.log(ftoc(32));

// const ftoc = function(faren) {
//   let cel  = (faren - 32 ) * 5/9;
//   return cel.toFixed(1)


// }
// console.log(ftoc(75));

const ftoc = function(faren) {
  let cel  = (faren - 32 ) * 5/9;
  return cel.toFixed(1)


}
console.log(ftoc(-75));


// const ctof = function(cel) {

//   let faren = (cel *5/9)+ 32
//   return faren;

// }
// console.log(ctof(100))

// const ctof = function(cel) {

//   let faren = (cel *9/5)+ 32
//   return faren.toFixed(1);

// }
// console.log(ctof(73.2))

const ctof = function(cel) {

  let faren = (cel *9/5)+ 32
  return faren.toFixed(1);

}
console.log(ctof(-10))

module.exports = {
  ftoc,
  ctof
}
