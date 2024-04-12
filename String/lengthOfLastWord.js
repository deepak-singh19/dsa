//58. Length of Last Word
//QUS-URL -- https://leetcode.com/problems/length-of-last-word/description/?envType=daily-question&envId=2024-04-01

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let word= s.trim().split(" ");
    let lengthOfLastWord= word[word.length-1];
    

    return lengthOfLastWord.length;
    
};