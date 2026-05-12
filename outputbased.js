/* move all zero to end of an array */
const givenArr = [0,1,0,3,12]

let numArr = []
let zerosArr = []

for(let num of givenArr) {
    if(num === 0) {
        zerosArr.push(num)
        //console.log(zerosArr)
    } else {
        numArr.push(num)
        //console.log(numArr)
    }
}
console.log(numArr);
console.log(zerosArr)

for(let num of zerosArr) {
    numArr.push(num)
}

console.log("given array:", givenArr)
console.log("updated array:", numArr)