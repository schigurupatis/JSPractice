const userObject = {
    firstName: "Santha Kumar",
    lastName: "Chigurupati",
    age: 33,
    profession: "FrontEnd Developer",
    location: "Hyderabad",
    isCEO: false,
    isSigns: function() {
        console.log(`yes ${this.firstName} sings songs`)
    }
}
const userObject2 = {
    firstName: "Saahus Neal",
    lastName: "Chigurupati",
    age: 33,
    profession: "Doctor",
    location: "USA",
    isCEO: true,
    isSigns: function() {
        console.log(`yes ${this.firstName} sings songs`)
    }
}


localStorage.setItem("user_data", JSON.stringify(userObject))

let dataFromLS = localStorage.getItem("user_data")
let parsedUser = JSON.parse(dataFromLS)

console.log(parsedUser.isCEO)


localStorage.setItem("user_data2", JSON.stringify(userObject2))

//localStorage.removeItem("user_data")

//localStorage.clear()
