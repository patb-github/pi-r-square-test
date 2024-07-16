// Largest Number

// Task: Given a list of non-negative integers, arrange them such that they form the largest
// possible number.

// Example
// Input: [10, 2, 13, 7], Output: "721310".
// Input: [21, 36, 8, 45], Output: “8453621”

function largestNumber(nums) {
    // Notice that the resulting number always has the same number of digits
    // because it uses every element in the array exactly once
    const strings = nums.map(x => x.toString());
    
    // Start with greatest leading digit; e.g., nums = [95, 7, 9, 995] ==> pick 95 or 9 or 995
    // If more than one number starts with the same digit, break tie by the next digit
    // e.g., nums = [85, 7, 83] ==> choose 85 or 83 => choose 85
    // Next, if two numbers have a different number of digits, pick the one with fewer digits
    // This will allow us to follow it with a possibly larger number
    // e.g., nums = [95, 7, 9, 995] ==> 9 995 95 7 is larger than 995 9 95 7
    strings.sort((a, b) => {
        for (let i = 0; i < Math.max(a.length, b.length); i++) {
            if (i === a.length) return -1;
            else if (i === b.length) return 1;
            else if (b.charAt(i) === a.charAt(i)) continue;
            else return b.charAt(i) - a.charAt(i);
        }
    });
    
    return strings.join('');
}

// Input: [885, 7, 88], Output: “88 885 7”
// Input: [95, 7, 9, 995], Output: “9 995 95 7”