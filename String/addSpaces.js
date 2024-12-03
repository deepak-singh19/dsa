/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let res=[]

    let spaceIndex=0

    for(let i=0;i<s.length;i++){
        if(spaceIndex < spaces.length && i===spaces[spaceIndex]){
            res.push(" ")
            spaceIndex++;
        }
        res.push(s[i])
    }

    return res.join("")
    
};

//LC-1592. Rearrange Spaces Between Words