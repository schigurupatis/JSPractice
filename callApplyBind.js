let personObject = {
    firstName: "Santha Kumar",
    lastName: "Chigurupati",
}

let fullName = function (city, state) {
    console.log(this.firstName + " " + this.lastName + " " + city + " , " + state);
}

// CALL
fullName.call(personObject, "Hyderabad", "Telangana");




let personObject2 = {
    firstName: "Saahus Neal",
    lastName: "Chigurupati",
}

let fullNameWithAddress = function(city, state, country) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state + " " + country)
}

// APPLY
fullNameWithAddress.apply(personObject2, ["Banglore", "Karnataka", "India"])




let personObject3 = {
    firstName: "Suhaas Neal",
    lastName: "Chigurupati",
}

let fullNameWithAddresBind = function(city, state, country, profession) {
    console.log(this.firstName + " " + this.lastName + " " + city + " " + state + " " + country + " " + profession)
}

//BIND
let bindMethod = fullNameWithAddresBind.bind(personObject3, "Chennai", "Tamilnadu", "India", "Artist");
bindMethod()
