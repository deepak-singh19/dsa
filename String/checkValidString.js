//678. Valid Parenthesis String
//QUS URL- https://leetcode.com/problems/valid-parenthesis-string/description/?envType=daily-question&envId=2024-04-07

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {

    let balance = 0;

    // First pass: treat '*' as open parentheses '('
    for (let char of s) {
        if (char === '(' || char === '*') {
            balance++;
        } else {
            balance--;
        }
        if (balance < 0) return false;
    }

    // Second pass: treat '*' as close parentheses ')'
    balance = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (char === ')' || char === '*') {
            balance++;
        } else {
            balance--;
        }
        if (balance < 0) return false;
    }

    return true;
    
};