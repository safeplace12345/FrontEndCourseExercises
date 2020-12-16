const palindromes = function(str) {
    let regex = /\W/gi;
 let lowStr = str.toLowerCase().replace(regex,'');
 let revStr = lowStr.split('').reverse().join('');
 return revStr === lowStr;
 
}
console.log(palindromes('Animal loots foliated detail of stool lamina.'))

// module.exports = palindromes
