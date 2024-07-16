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

    // evens.sort((a, b) => a - b);
    // odds.sort((a, b) => a - b);
    mergeSort(evens);
    mergeSort(odds);

    const C = odds.length;
    for (let i = 0; i < C; i++) nums[i] = odds[i];
    for (let i = C; i < nums.length; i++) nums[i] = evens[i - C];

    return nums;
}

//===================================
function merge(arr, lo, hi, mid) {
    const aux = [];

    let x = lo;
    let y = mid + 1;
    for (let i = lo; i <= hi; i++) {
        if (x > mid) aux.push(arr[y++]);
        else if (y > hi) aux.push(arr[x++]);
        else if (arr[x] <= arr[y]) aux.push(arr[x++]);
        else aux.push(arr[y++]);
    }

    for (let i = lo; i <= hi; i++) arr[i] = aux[i - lo];
}

function mergeSortAux(arr, lo, hi) {
    if (lo >= hi) return;

    const mid = Math.floor((lo + hi) / 2);
    mergeSortAux(arr, lo, mid);
    mergeSortAux(arr, mid + 1, hi);
    merge(arr, lo, hi, mid);
}

function mergeSort(arr) {
    mergeSortAux(arr, 0, arr.length - 1);
}
