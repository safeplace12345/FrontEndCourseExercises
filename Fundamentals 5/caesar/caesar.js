// const caesar = function(char,index) {
//    let newChar = String.fromCharCode(char.charCodeAt() + index) ;
//    return newChar
// }
// caesar('A',1)
// const caesar = function (str, index) {
//     let newArr = str.split('').map(char => String.fromCharCode(char.charCodeAt() + index))
//         .join('');
//     return newArr;
// }

// console.log(caesar('Aaa', 4))

const caesar = function (str, index) {
    let up = str.toUpperCase();
    let newArr = ''
    for (let i = 0; i < up.length; i++) {
        let char = up[i].charCodeAt();
        if(char + index > 90){
            newArr += String.fromCharCode(char + )
        }
        
    }
    return newArr.toLowerCase();
}

console.log(caesar('Hello,World!', 75))

// const caesar = function (str, index) {
//     let up = str.toUpperCase();
//     let newArr = ''
//     for (let i = 0; i < up.length; i++) {
//         let char = up[i];
//         if (char.charCodeAt() < 65 || char.charCodeAt() > 90) {
//             newArr += char;
//         } else {
//             if (char.charCodeAt() + index < 65 ) {
//                 newArr += String.fromCharCode((char.charCodeAt() + index) + 26)
//             } else {
//                 newArr += String.fromCharCode(char.charCodeAt() + index)
//             }

//         }
//     }
//     return newArr.toLowerCase();
// }

// console.log(caesar('Mjqqt, Btwqi!', -5))


// const caesar = function(char,index) {
//    let code = char.charCodeAt()
//    let newChar = ''
//    if(code + index > 90 ){
//       newChar += String.fromCharCode((code + index) - 26)
//    } else if (code - index > 65) {
//       newChar += String.fromCharCode((code + index) + 26)
//    }
//    return newChar
// }
// console.log(caesar('z',1));
// module.exports = caesar
console.log('test')