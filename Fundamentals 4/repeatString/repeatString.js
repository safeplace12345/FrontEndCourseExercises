const repeatString = function(str , number) {
    let repeat = ''
   
 for(let i = 0 ; i < Math.floor(Math.random() * number) ; i++){
  repeat += str
 }
 return repeat;
}

//  expect(repeatString('hey', number).match(/((hey))/g).length).toEqual(number);
console.log(repeatString('hey',5))
module.exports = repeatString
