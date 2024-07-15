// Custom Sort Function

// Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places
// all odd numbers before even numbers.

// Example:
// Input: [4, 2, 5, 7, 1, 6], Output: [1, 5, 7, 2, 4, 6].
// Input: [25, 40, 14, 91, 31, 22, 49, 13, 6], Output: [13, 25, 31, 49, 91, 6, 14, 22, 40].

function customSort(nums) {
    const evens = [];
    const odds = [];

    for (const x of nums) {
        if (x % 2 === 0) evens.push(x);
        else odds.push(x);
    }

    evens.sort((a, b) => a - b);
    odds.sort((a, b) => a - b);

    const C = odds.length;
    for (let i = 0; i < C; i++) nums[i] = odds[i];
    for (let i = C; i < nums.length; i++) nums[i] = evens[i - C];

    return nums;
}