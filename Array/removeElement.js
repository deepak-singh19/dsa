//27. Remove the Element
//QUS URL- https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // Initialize a variable to keep track of the number of elements not equal to val
   
   for (let i = 0; i < nums.length; i++) {
       if (nums[i] !== val) {
           nums[k++] = nums[i]; // Overwrite the value at index k with the value at index i and increment k
       }
   }
   console.log("K",k)
   return k; 
   
};