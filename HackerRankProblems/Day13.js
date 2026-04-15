/*
Sherlock and Squares

Watson likes to challenge Sherlock's math ability. He will provide a starting and ending value that describe a range of integers, inclusive of the endpoints. Sherlock must determine the number of square integers within that range.

Note: A square integer is an integer which is the square of an integer, e.g. .

Example


There are three square integers in the range:  and . Return .

Function Description

Complete the squares function in the editor below. It should return an integer representing the number of square integers in the inclusive range from  to .

squares has the following parameter(s):

int a: the lower range boundary
int b: the upper range boundary
Returns

int: the number of square integers in the range
Input Format

The first line contains , the number of test cases.
Each of the next  lines contains two space-separated integers,  and , the starting and ending integers in the ranges.

Constraints



Sample Input

2
3 9
17 24
Sample Output

2
0
Explanation

Test Case #00: In range ,  and  are the two square integers.
Test Case #01: In range , there are no square integers.
*/

/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */

let a = 100;
let b = 1000;

function squares(a, b) {
    let start = Math.ceil(Math.sqrt(a));
    let end = Math.floor(Math.sqrt(b));

    return end - start + 1 > 0 ? end - start + 1 : 0;
}

console.log(squares(a,b)) 