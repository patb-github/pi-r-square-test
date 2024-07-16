// Sum Of Two in Array

// Task: Implement a JavaScript function that, given an array of integers and a target integer,
// returns whether any two integers in the array sum up to the target number.

// Example:
// Input: [1, 3, 5, 7, 16, 4], Target: 8, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 12, Output: true.
// Input: [1, 3, 5, 7, 16, 4], Target: 18, Output: false.
// Input: [12, 17, 14, 11, 19, 8], Target: 20 Output: true

// Note: I will assume that the two integers should not belong to the same array index.
// e.g., sumOfTwo([1], 2) should return false
function sumOfTwo(integers, target) {
    // Use a map to store value-index pairs of the array
    const map = new Map();

    for (let i = 0; i < integers.length; i++) {
        map.set(integers[i], i);
    }

    for (let i = 0; i < integers.length; i++) {
        // get index of integer[i]'s complement
        const t = map.get(target - integers[i]);
        // check that the index is not undefined and is different from i
        if (t && t !== i) return true;
    }

    return false;
}