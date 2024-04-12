//402. Remove K Digits
//QUS URL- https://leetcode.com/problems/remove-k-digits/description/?envType=daily-question&envId=2024-04-11

/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    let stack = [];

    // Remove digits from the stack until we've removed k digits or the stack is empty
    for (let digit of num) {
        while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }

    // Remove leading zeros
    while (stack.length > 0 && stack[0] === '0') {
        stack.shift();
    }

    // If we still have remaining digits to remove, remove them from the end
    while (k > 0 && stack.length > 0) {
        stack.pop();
        k--;
    }

    // If the stack is empty, return '0', otherwise return the digits in the stack as a string
    return stack.length > 0 ? stack.join('') : '0';
    
};