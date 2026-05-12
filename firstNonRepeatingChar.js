let givenStr = "abcdabcde";

const charCount = {};

// Step 1: Count characters
for (let char of givenStr) {
    charCount[char] = (charCount[char] || 0) + 1;
}

console.log("Character count:", charCount);

// Step 2: Find first non-repeating character
for (let char of givenStr) {
    if (charCount[char] === 1) {
        console.log("First non-repeating character is:", char);
        break;
    }
}