/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n < 1) return false;
    if ((n & (n - 1)) !== 0) return false;
    return (n & 0xAAAAAAAA) === 0;
};

/**
 * 342. Power of Four
 * https://leetcode.com/problems/power-of-four/description/

Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

*/