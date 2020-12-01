// const sumAll = function (a, b) {
//     let newArr = [];
//     for (let i = 0; i < arguments.length; i++) {
//         newArr.push(arguments[i])
//     }
//     let sum = 0;
//     let min = Math.min(...newArr);
//     let max = Math.max(...newArr);
//     for (let j = min; j <= max; j++) {
//         sum += j;
//     }
//     return sum;
// }

// const sumAll = function (a, b) {
//     let newArr = [];
//     for (let i = 0; i < arguments.length; i++) {
//         newArr.push(arguments[i])
//     }
//     let sum = 0;
//     let min = Math.min(...newArr);
//     let max = Math.max(...newArr);
//     for (let j = min; j <= max; j++) {
//         sum += j;
//     }
//     return sum;
// }

// console.log(sumAll(1, 4000));

// const sumAll = function (a, b) {
//     let newArr = [];
//     for (let i = 0; i < arguments.length; i++) {
//         newArr.push(arguments[i])
//     }
//     let sum = 0;
//     let min = Math.min(...newArr);
//     let max = Math.max(...newArr);
//     for (let j = min; j <= max; j++) {
//         sum += j;
//     }
//     return sum;
// }
// console.log(sumAll(123, 1));


// const sumAll = function (a, b) {
//     if (a < 0 || b < 0) {
//         return 'ERROR';
//     } else {
//         let newArr = [];
//         for (let i = 0; i < arguments.length; i++) {
//             newArr.push(arguments[i])
//         }
//         let sum = 0;
//         let min = Math.min(...newArr);
//         let max = Math.max(...newArr);
//         for (let j = min; j <= max; j++) {
//             sum += j;
//         }
//         return sum;
//     }
// }
// console.log(sumAll(-12, 1));
// const sumAll = function (a, b) {
//     if (typeof a === 'string'  ) {
//         return 'ERROR';
//     } else {
//         let newArr = [];
//         for (let i = 0; i < arguments.length; i++) {
//             newArr.push(arguments[i])
//         }
//         let sum = 0;
//         let min = Math.min(...newArr);
//         let max = Math.max(...newArr);
//         for (let j = min; j <= max; j++) {
//             sum += j;
//         }
//         return sum;
//     }
// }
// console.log(sumAll('2',1)); 


// const sumAll = function (a, b) {
//     console.log(a)
//     if ( a == undefined ||b == undefined  ) {
//         return 'ERROR';
//     } else {
//         let newArr = [];
//         for (let i = 0; i < arguments.length; i++) {
//             newArr.push(arguments[i])
//         }
//         let sum = 0;
//         let min = Math.min(...newArr);
//         let max = Math.max(...newArr);
//         for (let j = min; j <= max; j++) {
//             sum += j;
//         }
//         return sum;
//     }
// }
// console.log(sumAll(2));
const sumAll = function (a, b) {
    console.log(a)
    if ( typeof a == 'object' || typeof b == 'object'  ) {
        return 'ERROR';
    } else {
        let newArr = [];
        for (let i = 0; i < arguments.length; i++) {
            newArr.push(arguments[i])
        }
        let sum = 0;
        let min = Math.min(...newArr);
        let max = Math.max(...newArr);
        for (let j = min; j <= max; j++) {
            sum += j;
        }
        return sum;
    }
}
console.log(sumAll([],[]));

module.exports = sumAll