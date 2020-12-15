// const people = [{
//         name: 'Carly',
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: 'Ray',
//         yearOfBirth: 1962,
//         yearOfDeath: 2011
//     },
//     {
//         name: 'Jane',
//         yearOfBirth: 1912,
//         yearOfDeath: 1941
//     },
// ]
// let findTheOldest = function (people) {
//     let total = 0
//     let OldestPerson;
//     people.reduce((prev, curr) => {
//         if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
//             total = (curr.yearOfDeath - curr.yearOfBirth);
//             OldestPerson = curr
//         }
//         console.log(prev);
//     })
//     return OldestPerson
// }
// console.log(findTheOldest(people));

// const people = [{
//         name: 'Carly',
//         yearOfBirth: 2018,
//     },
//     {
//         name: 'Ray',
//         yearOfBirth: 1962,
//         yearOfDeath: 2011
//     },
//     {
//         name: 'Jane',
//         yearOfBirth: 1912,
//         yearOfDeath: 1941
//     },
// ]

// let findTheOldest = function (people) {

//     let total = 0
//     let OldestPerson;
//     people.reduce((prev, curr) => {
//         if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
//             total = (curr.yearOfDeath - curr.yearOfBirth);
//             OldestPerson = curr
//         }
//         // console.log(prev);
//     })
//     if(!OldestPerson.hasOwnProperty('yearOfDeath')){
//          return 'nope';
//     }
//     return OldestPerson;
// }
// console.log(findTheOldest(people));

const people = [{
        name: 'Carly',
        yearOfBirth: 1066,
    },
    {
        name: 'Ray',
        yearOfBirth: 1962,
        yearOfDeath: 2011
    },
    {
        name: 'Jane',
        yearOfBirth: 1912,
        yearOfDeath: 1941
    },
]
let findTheOldest = function (people) {

    let total = 0
    let OldestPerson;
    people.reduce((prev, curr) => {
        if ((curr.yearOfDeath - curr.yearOfBirth) > total) {
            total = (curr.yearOfDeath - curr.yearOfBirth)
            OldestPerson = curr
        }else{
            let ind = people.filter(p => !p.hasOwnProperty('yearOfDeath') )
            OldestPerson = ind[0]
        }
        // console.log(prev);
    })
    return OldestPerson.name;
}
console.log(findTheOldest(people));

// module.exports = findTheOldest
