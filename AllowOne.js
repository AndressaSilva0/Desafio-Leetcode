let once = function (fn) {
    let count = 0;
    return function (...args) {
        if (count < 1) {
            count++;
            return fn(...args);
        }
        else {
            return undefined;
        }

    }
};


let fn = (a, b, c) => (a + b + c)
let onceFn = once(fn)

let contagem = onceFn(1, 2, 3);

let contagem2 = onceFn(2, 3, 6);

console.log(contagem)
console.log(contagem2)