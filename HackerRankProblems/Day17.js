/*
Repeated String

There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.

Example


The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.

Function Description

Complete the repeatedString function in the editor below.

repeatedString has the following parameter(s):

s: a string to repeat
n: the number of characters to consider
Returns

int: the frequency of a in the substring
Input Format

The first line contains a single string, .
The second line contains an integer, .

Constraints

For  of the test cases, .
Sample Input

Sample Input 0

aba
10
Sample Output 0

7
Explanation 0
The first  letters of the infinite string are abaabaabaa. Because there are  a's, we return .

Sample Input 1

a
1000000000000
Sample Output 1

1000000000000
Explanation 1
Because all of the first  letters of the infinite string are a, we return .
*/

const s = "aba";
const n = 10;

function repeatedString(s, n) {
    let countInS = 0n;

    for (let char of s) {
        if (char === 'a') countInS++;
    }

    let len = BigInt(s.length);
    let bigN = BigInt(n);

    let fullRepeats = bigN / len;
    let remainder = bigN % len;

    let countInRemainder = 0n;
    for (let i = 0n; i < remainder; i++) {
        if (s[Number(i)] === 'a') countInRemainder++;
    }

    return (fullRepeats * countInS) + countInRemainder;
}

console.log(repeatedString(s, n))

