/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {

    let seen= new Set()

    for (let nums of arr){

        if(seen.has(nums*2) || (nums%2==0 && seen.has(nums/2))){
            return true
        }

        seen.add(nums)
    }
    return false
    
};

// 1346. Check If N and Its Double Exist
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
 

// Example 1:

// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:

// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.