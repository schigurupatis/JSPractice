/*
Jumping on the Clouds



*/
const c = [0,1,0,0,0,1,0];
function jumpingOnClouds(c) {
    let jumps = 0;
    let i = 0;

    while (i < c.length - 1) {
        // try jump 2 steps
        if (i + 2 < c.length && c[i + 2] === 0) {
            i += 2;
        } else {
            i += 1;
        }
        jumps++;
    }

    return jumps;
}
console.log(jumpingOnClouds(c))