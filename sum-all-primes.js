// Sum of All Primes

// Task: Write a JavaScript function that takes a number n and returns the sum of all prime
// numbers up to and including n.

// Example:
// Input: 10, Output: 17 (since the prime numbers up to 10 are 2, 3, 5, 7).
// Input: 59, Output: 440 (since the prime numbers up to 10 are 2, 3, 5, 7..... To 59).

function sumAllPrimes(n) {
    const isPrime = new Array(n + 1);
    isPrime.fill(true);

    for (let p = 2; p < n; p++) {
        // for each integer starting with 2, mark all of its multiples as false
        // because those numbers will be composite
        // no need to check p = n because n is the last number (if it is composite, it will have already been marked)

        // need to check m = n because n can be composite
        for (let m = 2 * p; m <= n; m += p) isPrime[m] = false;
    }

    let sum = 0;
    for (let p = 2; p <= n; p++) {
        if (isPrime[p]) sum += p;
    }

    return sum;
}