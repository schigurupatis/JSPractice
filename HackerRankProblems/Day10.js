/*
Time Conversion

Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the  function with the following parameter(s):

: a time in  hour format
Returns

: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input 0

07:05:45PM
Sample Output 0

19:05:45
*/


const s = '07:05:45PM'
const s2 = '12:01:00PM'
const s3 = '12:01:00AM'

function timeConversion(s) {
    let period = s.slice(-2);        // AM or PM
    let time = s.slice(0, 8);        // HH:MM:SS
    let [hours, minutes, seconds] = time.split(":");

    if (period === "AM") {
        if (hours === "12") {
            hours = "00"; // midnight case
        }
    } else { // PM
        if (hours !== "12") {
            hours = String(Number(hours) + 12);
        }
    }

    return `${hours}:${minutes}:${seconds}`;
}

console.log(timeConversion(s));