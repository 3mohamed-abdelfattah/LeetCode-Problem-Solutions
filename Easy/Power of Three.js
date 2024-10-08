/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n < 1) {
        return false;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    return n === 1;
};

/**
 * 326. Power of Three
 * https://leetcode.com/problems/power-of-three/description/

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.

*/