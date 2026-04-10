let arr = ["Abraham", "Issac", "Israel", "Joseph"]
let object = {
    id: 1,
    firstName: "Santha Kumar",
    lastName: "Chigurupati",
    age: 33,
    fname: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    ability: function() {
        console.log(`${this.firstName} - can sing songs`)
    }
    
}

object.fname();
object.ability();
console.log(object.age);