//Make the String Great
//QUS URL- https://leetcode.com/problems/make-the-string-great/description/?envType=daily-question&envId=2024-04-05

/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    
    for (let char of s) {
        const lastChar = stack[stack.length - 1];
        
        if (lastChar && Math.abs(char.charCodeAt(0) - lastChar.charCodeAt(0)) === 32) {
            // If the current character and the last character in the stack are of different cases
            // and represent the same letter, remove the last character from the stack
            stack.pop();
        } else {
            // Otherwise, add the current character to the stack
            stack.push(char);
        }
    }
    
    // Convert the stack to a string and return it
    return stack.join('');
    
};