function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = JSON.stringfy(args)
        if (key in cache) {
            return cache[key]
        }
        cache[key] = fn(...args)
        return cache[key]
    }
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
let sum = memoizedFn(2, 3)
let sum2 = memoizedFn(4, 3)
let sum3 = memoizedFn(5, 3)

console.log(sum)
console.log(sum2)
console.log(callCount)