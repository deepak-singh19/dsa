//2390. Removing Stars From a String
//Ous Url- https://leetcode.com/problems/removing-stars-from-a-string/description/?envType=study-plan-v2&envId=leetcode-75


/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stringStack= [];
    let outputStr="";
    for(let i=0; i<s.length; i++){
        if(s[i]=='*'){
            stringStack.pop();
        }else{
            stringStack.push(s[i]);
        }
    }

    return stringStack.join("");

};