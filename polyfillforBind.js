let personObject1 = {
    firstName: "Santha Kumar",
    lastName: "Chigurupati"
}

const fullName = function(city, state, country) {
    console.log(this.firstName + " " + this.lastName + ", " + city + ", " + state + ", " + country)
}

let bindOutput = fullName.bind(personObject1, "Hyderabad", "Telangana")
bindOutput("India");


Function.prototype.myBindMethod = function(...args) {
    let obj = this;
    let params = args.slice(1)
    return (...args2) => {
        obj.apply(args[0], [...params, ...args2])
    }
}
let myBindOutPut = fullName.myBindMethod(personObject1, "Bengaluru", "Karnataka");
myBindOutPut("India")
