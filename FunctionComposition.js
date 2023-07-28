let compose = function(...funcoes) {
    return function(x) {
    return funcoes.reduce((accumulator,fn) => {
        return fn(accumulator)
    }, x)
}
}

const mult = x => 10 * x;
const mult2 = x => 10 * x;
const mult3 = x => 10 * x;

const resultado = compose(mult, mult2, mult3)

const result = resultado(1);
console.log(result);