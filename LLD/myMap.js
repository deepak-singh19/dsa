// uestion:

// Implement a custom myMap function for arrays in JavaScript. The function should take two parameters: an array arr and a callback function cb. The myMap function should apply the callback function cb to each element of the array arr and return a new array containing the results.

// For example, if the input array arr is [1, 2, 3] and the callback function cb doubles each element, the output should be [2, 4, 6].

// Write your implementation of the myMap function in JavaScript.

Array.prototype.myMap= function(cb){
    const result=[]
    for (let i=0;i<this.length;i++){
        result[i]=cb(this[i]);
    }
    return result;
}

const s1= [1,2,3].myMap(console.log);
const s2= [1,2,3].myMap(x=>x*2);
console.log(s1);
console.log(s2);