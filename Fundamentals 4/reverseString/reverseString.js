const reverseString = function(str) {
return str.split('')
            .reverse()
            .join('');
}
console.log(reverseString(''))
module.exports = reverseString
