function add(a) {
    return function(b) {
        if(b) {
            return add(a+b);
        } 
        return a;
    }
}
console.log(add(1)(2)(3)());


function addition(a) {
    let result = a;
    function inner(b) {
        if(b === undefined) {
            return result;
        }
        result += b;
        return inner;
    }
    return inner;
}

console.log(addition(10)(20)());