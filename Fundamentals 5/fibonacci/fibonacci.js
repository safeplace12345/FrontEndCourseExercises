const fibonacci = function(num) {
  let start,end,i,result;
  start = 0
  end = 1

  for(i = 2 ; i < num ; i++){
    //   console.log(i)
   result = start + end;
   start = end;
   end = result;
   console.log(result)
  }
  return result;
}
console.log(fibonacci(6))
// module.exports = fibonacci
