// Sum Of Two in Array

// Task: Implement a JavaScript function that, given an array of integers and a target integer,
// returns whether any two integers in the array sum up to the target number.

// Example:
// Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
// Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true

// NOTE: I will assume that the two integers should not belong to the same array index.
function sumOfTwo(integers, target) {
    // Use a hashmap to store value-index pairs in the array for quick access
    const map = new Map();

    for (let i = 0; i < integers.length; i++) {
        map.set(integers[i], i);
    }

    for (let i = 0; i < integers.length; i++) {
        const t = map.has(target - integers[i]);
        if (t && t !== integers[i]) return true;
    }

    return false;
}

console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 8));
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 12));
console.log(sumOfTwo([1, 3, 5, 7, 16, 4], 18));
console.log(sumOfTwo([12, 17, 14, 11, 19, 8], 20));