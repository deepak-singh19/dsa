//3. Longest Substring Without Repeating Characters
// Qus URL- https://leetcode.com/problems/longest-substring-without-repeating-characters/description/



/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let a=0;
    let b=0;
    let max=0;

    let stringMap= new Map();

    while(b<s.length){
        if(!stringMap.has(s[b])){
            stringMap.set(s[b], 0);
            b++;
            max= Math.max(max, stringMap.size)
        }else{
            stringMap.delete(s[a]);
            a++;
        }
    }

    return max;
    
};