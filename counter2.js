let createCounter = function(init) {
    let valor = init
  return{
    increment:() => {
        return init+=1;
    },

    reset:() => {
        init = valor;
        return init;
    },
    decrement:() => {
        return init-=1;
  }
    
};
}

const counter = createCounter(10)
 console.log(counter.increment()); 
 console.log(counter.reset()); 
 console.log(counter.decrement()); 