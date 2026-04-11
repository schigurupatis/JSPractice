/*
Plus Minus


Given an array of integers, calculate the ratios of its elements that are , , and . Print the decimal value of each fraction on a new line with 6 places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements: two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the  function with the following parameter(s):

: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .
*/

const arr = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    let positiveRatio = 0;
    let negativeRatio = 0;
    let zeroRation = 0;
    
    let n = arr.length;
    
    for(let i=0; i<n; i++) {
        if(arr[i]>0) {
            positiveRatio++
        }else if(arr[i]<0){
            negativeRatio++
        }else {
            zeroRation++
        }
    }
    console.log((positiveRatio/n).toFixed(6))
    console.log((negativeRatio/n).toFixed(6))
    console.log((zeroRation/n).toFixed(6))
}

plusMinus(arr);