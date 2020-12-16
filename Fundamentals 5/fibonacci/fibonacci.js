const fibonacci = function(num) {
  if(num < 0 || num === !Number){
    return 'OOPS'
  }else
  if(Number){
    num = Number(num)
  }
  let start,end,i,result;
  start = 1
  end = 1
console.log(typeof num)
  for(i = 1 ; i < num ; i++){
    //   console.log(i)
   result = start + end;
   start = end;
   end = result;
  }
  return start;
}
console.log(fibonacci('8'))



module.exports = fibonacci
