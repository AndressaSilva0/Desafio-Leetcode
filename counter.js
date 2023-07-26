let criarcounter = function(n){
    return function(){
     return n++
    };
   
}

const counter = criarcounter(10);
console.log(counter());
console.log(counter());
console.log(counter());
