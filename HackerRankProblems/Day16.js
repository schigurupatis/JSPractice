/*
Non-Divisible Subset

Given a set of distinct integers, print the size of a maximal subset of  where the sum of any  numbers in  is not evenly divisible by .

Example
 

One of the arrays that can be created is . Another is . After testing all permutations, the maximum length solution array has  elements.

Function Description

Complete the nonDivisibleSubset function in the editor below.

nonDivisibleSubset has the following parameter(s):

int S[n]: an array of integers
int k: the divisor
Returns

int: the length of the longest subset of  meeting the criteria
Input Format

The first line contains  space-separated integers,  and , the number of values in  and the non factor.
The second line contains  space-separated integers, each an , the unique values of the set.

Constraints

All of the given numbers are distinct.
Sample Input

STDIN    Function
-----    --------
4 3      S[] size n = 4, k = 3
1 7 2 4  S = [1, 7, 2, 4]
Sample Output

3
Explanation

The sums of all permutations of two elements from  are:

1 + 7 = 8
1 + 2 = 3
1 + 4 = 5
7 + 2 = 9
7 + 4 = 11
2 + 4 = 6
Only  will not ever sum to a multiple of .
*/

const s = [19,10,12,10,24,25,22];
const k = 4;

function nonDivisibleSubset(k, s) {
    let freq = new Array(k).fill(0);

    // count remainders
    for (let num of s) {
        freq[num % k]++;
    }

    let count = 0;

    // remainder 0 case
    if (freq[0] > 0) count++;

    // check pairs
    for (let i = 1; i <= Math.floor(k / 2); i++) {
        if (i === k - i) {
            // special case when k is even
            if (freq[i] > 0) count++;
        } else {
            count += Math.max(freq[i], freq[k - i]);
        }
    }

    return count;
}
console.log(nonDivisibleSubset(k,s))
