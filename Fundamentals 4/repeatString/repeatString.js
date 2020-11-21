const repeatString = function(str) {
    let repeat = ''
   
 for(let i = 0 ; i < Math.floor(Math.random() * str.length) ; i++){
  repeat += str
 }
 return repeat;
}


console.log(repeatString('hey'))
module.exports = repeatString
