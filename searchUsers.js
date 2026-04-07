const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput")
const usersList = document.getElementById("users")
const clear = document.getElementById("clear")

let usersData = []

function renderUsers(users) {
    usersList.innerHTML = ""; 
    if(users.length === 0) {
        usersList.innerHTML = "<li>No user Found</li>"
        return;
    }
    users.map((user) => {
                    const liEl = document.createElement("li");
                    liEl.textContent = `${user.name} - ${user.email}`;
                    usersList.appendChild(liEl);
                })
}

//Get users
function callAPI() {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    fetch(URL)
        .then((res) => res.json())
        .then((data) => {
                console.log(data)
                usersData = data;

                //rendering on UI
                renderUsers(usersData)
            })
        .catch((err) => console.log("Error in BE:", err.message))
}
callAPI();


function searchUser(searchInput) {
    console.log(searchInput)
    
    const filterUsers = usersData.filter((user) => {
        return user.name.toLowerCase().includes(searchInput)
    });
    renderUsers(filterUsers)
}

function clearSearch() {
    searchInput.value = "";
    renderUsers(usersData)

}


form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const value = searchInput.value.toLowerCase();
    //console.log("form submitted:", value)
    searchUser(value)
})


clear.addEventListener('click', function(e) {
    clearSearch()
})



