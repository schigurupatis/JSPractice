const greateParent = document.querySelector('#greateParent')
const parent = document.querySelector('#parent')
const child = document.querySelector('#child')


//Case1: Bubbling.  (Bottom to Top)
greateParent.addEventListener("click", function() {
    console.log("greateParent clicked")
}, false)//Bubbling
parent.addEventListener("click", function() {
    console.log("parent clicked")
}, false)//Bubbling
child.addEventListener("click", function() {
    console.log("child clicked")
}, false)//Bubbling


//Case2: Capturing.  (Top to Bottom)
greateParent.addEventListener("click", function() {
    console.log("greateParent clicked")
}, true)//Capturing
parent.addEventListener("click", function() {
    console.log("parent clicked")
}, true)//Capturing
child.addEventListener("click", function() {
    console.log("child clicked")
}, true)//Capturing



//Case3: Mixing Both Bubbling & Capturing
greateParent.addEventListener("click", function() {
    console.log("greateParent clicked")
}, true)//Capturing
parent.addEventListener("click", function() {
    console.log("parent clicked")
}, false) //Bubbling
child.addEventListener("click", function() {
    console.log("child clicked")
}, true)//Capturing