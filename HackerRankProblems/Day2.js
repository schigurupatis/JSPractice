/*
Given an array of integers, find the sum of its elements.

For example, if the array , , so return .

Function Description

Complete the  function with the following parameter(s):

: an array of integers
Returns

: the sum of the array elements
Input Format

The first line contains an integer, , denoting the size of the array.
The second line contains  space-separated integers representing the array's elements.

Constraints


Sample Input

STDIN           Function
-----           --------
6               ar[] size n = 6
1 2 3 4 10 11   ar = [1, 2, 3, 4, 10, 11]
Sample Output

31
Explanation

Print the sum of the array's elements: 
*/

const givenArray =  [1, 2, 3, 4, 10, 11]

function sumofGivenArrayNumbers(arr) {
    let result = 0;
    for(let i = 0; i<arr.length;i++) {
        result = result+arr[i]
    }
    return result;
}
console.log(sumofGivenArrayNumbers(givenArray))