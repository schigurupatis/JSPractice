/* currying with bind method */
let multiply = function(x,y) {
    console.log("x value is:", x);
    console.log("y value is:", y);
    console.log(x*y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(4)



/* currying with closure */
let addition = function(x) {
    console.log("x value is:", x)
    return function(y) {
        console.log("y value is:", y)
        console.log(x+y)
    }
}

let additionWithTwo = addition(2)
additionWithTwo(3)

let additionWithThree = addition(3)
additionWithThree(4)
