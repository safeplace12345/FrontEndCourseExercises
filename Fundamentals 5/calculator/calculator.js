function add (numA,numB) {
	return numA + numB
}

function subtract(numA, numB) {
	return numA - numB
}

function sum(arg) {
	return arg.reduce((a , b) => a + b , 0 )
}

function multiply(arr) {
	return arr.reduce((a , b) => a * b, 1)
}

function power(numA, numB) {
	return Math.pow(numA , numB)
}

function factorial(numA) {
	let arr = []
	for(let i = 1; i <= numA; i++ ){
		arr.push(i);
	}
	return arr.reduce((a , b) => a * b ,1);
}

console.log(add(1,1))
console.log(subtract(1,1))
console.log(multiply([2, 4, 6, 8, 10, 12, 14]))
console.log(sum([1,2,3,4,5]))
console.log(power(2,7))
console.log(factorial(5));

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}