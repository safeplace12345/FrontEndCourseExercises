// F(0) = 0;
// F(1) = 1;
// F(N) = F(N-1) + F(N-2) for N > 1


const fibonacci = function(num) {
 if(num <= 1){
   return num;
 }
  return fibonacci(num -1) + fibonacci(num -2) ;
}
console.log(fibonacci(10))



// module.exports = fibonacci
