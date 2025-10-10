function square(n) {
    return n * n;
}

function addTen(n) {
    return n + 10;
}

console.log(`5 squared is ${square(5)}`)

const applyOperation = (num, operation) => {
    return operation(num)
}

const test1 = applyOperation(5, square)
const test2 = applyOperation(5, addTen)
const test3 = applyOperation(5, n => n / 10) // in-line function definition

console.log(test1, test2, test3)