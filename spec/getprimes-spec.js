(function() {
	'use strict';

	var app = require('../src/getprimes.js');

	describe("Case for illogical input:", function() {

		describe("Case for invalid input", function() {

			it("should return `Not an integer` for `andela`", function() {
				expect(app.getPrimes('andela')).toBe('Not an integer');
			});

			it("should return `Not an integer` for [0, 1, 2]", function() {
				expect(app.getPrimes([0, 1, 2])).toBe('Not an integer');
			});

			it("should return `Not an integer` for 7.5", function() {
				expect(app.getPrimes(7.5)).toBe('Not an integer');
			});

		});

		describe("Case for negative input value", function() {

			it("should return -1 for -327", function() {
				expect(app.getPrimes(-327)).toBe(-1);
			});

			it("should return -1 for -19", function() {
				expect(app.getPrimes(-19)).toBe(-1);
			});

		});

		describe("Case for zero as input", function() {

			it("should return undefined for 0", function() {
				expect(app.getPrimes(0)).toBeUndefined();
			});

		});
		
	});

	describe("Should return prime numbers between zero and valid n", function() {

		it("should return empty array for 1", function() {
			expect(app.getPrimes(1)).toEqual([]);
		});

		it("should return [2, 3, 5] for 6", function() {
			expect(app.getPrimes(6)).toEqual([2, 3, 5]);
		});

		it("should return [2, 3, 5, 7] for 7", function() {
			expect(app.getPrimes(7)).toEqual([2, 3, 5, 7]);
		});
		
		it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30", function() {
			expect(app.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
		});
		
	});

})();