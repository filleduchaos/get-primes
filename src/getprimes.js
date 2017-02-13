'use strict'

module.exports = {
    // This function generates via asymptotic analysis the primes between 0 and num (inclusive)
    getPrimes: function(num) {
        // Return 'Not an integer' if num is not an integer
        if (!Number.isInteger(num)) {
            return 'Not an integer';
        }

        // Return -1 if num is negative
        if (num < 0) {
            return -1;
        }

        // Return undefined if num is zero
        if (num === 0) {
            return;
        }

        // Return empty array if there are no primes between 0 and num
        if (num === 1) {
            return [];
        }

        // Return array of primes between 0 and num
        // Modified Sieve of Eratosthenes that ignores even numbers from the start
        // Base algorithm found at http://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
        let sieve = [];
        let result = [];

        for (var a = 0; a <= num / 2; a++) {
            sieve.push(true);
        }
        
        result.push(2);
        
        for (var i = 3; i <= num; i += 2) {
            if (sieve[~~(i/2)]) {
                result.push(i);
                
                for (var j = i*i; j <= num; j += 2*i) {
                    sieve[~~(j/2)] = false;
                }
            }
        }

        return result;
    }
}