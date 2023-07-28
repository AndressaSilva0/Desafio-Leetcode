let numero = [1,2,3,4]

fn = function soma(accumulator, currentValue) { 
    return accumulator + currentValue
}

let init = 0;
let val = numero.reduce(
  function(accumulator, currentValue){
    return accumulator + currentValue
  });

  let accumulator = [];

  for (i = 0; i < numero.length; i++) {
    accumulator.push(numero[i])
  }

let reduce = function(num, fn, init){
    val = init;
    
    for (let i = 0;  i < num.length; i++) {
        val = fn(val, num[i])
        
    }
    return val

}

console.log({val, fn, accumulator})