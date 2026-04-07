// const { getJson } = require("serpapi");

// getJson({
//   q: "Coffee",
//   location: "Austin, Texas, United States",
//   hl: "en",
//   gl: "us",
//   google_domain: "google.com",
//   api_key: "secret_api_key"
// }, (json) => {
//   console.log(json);
// });

let counter = 0;
function getUsers() {
    console.log("Getting data of users", counter++)
    const URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(URL)
        .then((res) => res.json())
        .then((data) => console.log("fetched users data is:", data))
        .catch((err) => console.error("Error is:", err.message));
}


const doSomeMagic = function (fn, d) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            fn()
        }, d)
    }
}
const betterFunction = doSomeMagic(getUsers, 300);



const debounce = function(fn, d) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(context, args)
        }, d)
    }
}
const betterFunction2 = debounce(getUsers, 300)