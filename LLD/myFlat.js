// Question:

// Write a JavaScript function myFlat() that flattens a nested array. The function should take an array as input and return a new array with all nested arrays flattened to a single level.

// For example, given the input [[1, 2], [3, [4, 5]], 6], the function should return [1, 2, 3, 4, 5, 6].

// Your function should work for arrays of arbitrary nesting levels and should not modify the original array. Ensure that your function handles various data types appropriately.

// Provide your implementation of the myFlat() function and include at least one test case to demonstrate its correctness.

Array.prototype.myFlat= function(){
    let result= [];
    for(const value of this){
        if(Array.isArray(value)){
            const flat= value.myFlat()
            result.push(...flat)
        }else{
            result.push(value);
        }
    }
    return result;
}

const s1= [1,2,[4,5],6].myFlat();
const s2= [[9],1,2,[4,5],6,[7,8]].myFlat();
console.log(s1);
console.log(s2);



//Normal Function for flattern the given ARRAY


// const myFlat=(arr)=>{
//     console.log(arr);

//     const result=[];

//     for(let i=0; i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             // console.log("Hi");

//             const flat= myFlat(arr[i]);
            
//             result.push(...flat);


//         }else{

//             result.push(arr[i]);
//             // console.log(result);
//             // console.log(arr[i]);

//         }
//     }

//     return result;

// }

// console.log(myFlat([[9],1,2,[4,5],6,[7,8]]));