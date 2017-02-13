'use strict'

module.exports = {
    getPrimes: function(num) {
        if (!Number.isInteger(num)) {
            return 'Not an integer';
        }

        if (num < 0) {
            return -1;
        }

        if (num === 0) {
            return;
        }

        if (num === 1) {
            return [];
        }

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