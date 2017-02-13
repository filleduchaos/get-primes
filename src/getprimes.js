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
    }
}