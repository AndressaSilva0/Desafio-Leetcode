let matriz = [1, 2, 3, 4, 5]
    fn = function (n){
       map(matriz, function (n){
            return n + 1
            })
       return n + 1
    }

let map = function(arr, fn){

   let Array = [];
   
   for (let i = 0; i < arr.length; i++){
    Array.push(fn(arr[i], i))
   }
    return Array;
    
}

console.log(map(matriz, fn));