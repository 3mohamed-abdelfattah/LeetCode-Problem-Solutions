/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let valid = {
        "(": ")",
        "[": "]",
        "{": "}",
    }
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        if (valid[curr]) {
            stack.push(valid[curr]);
        }
        else if (stack.pop() !== curr) { return false; }
    }
    return stack.length === 0;
};

/**
 * 20.Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/description/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

*/