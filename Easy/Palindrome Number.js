/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let pali = x.toString()
        .split('')
        .reverse()
        .join('')
    let normal = x.toString()
    return (pali === normal)
};

/**
 * 9.Palindrome Number
 * https://leetcode.com/problems/palindrome-number/description/

Given an integer x, return true if x is a palindrome, and false otherwise.

*/