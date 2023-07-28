let matrizA = [10,20,30,40];

fn = function(matriz){
      return matriz > 10
};
const novoArray = matrizA.filter(function(matriz){
        return matriz > 10
      });

let filter = function(arr, fn) {
    
    novoArray = [];
    for (let i = 0;  i < arr.length; i++) {
         if (fn(arr[i])) {
            novoArray.push(arr[i]);
            }
        
    }
    return novoArray
    
};

console.log(novoArray, fn)