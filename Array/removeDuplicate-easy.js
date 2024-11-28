/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=1;

    for (let i=1;i<nums.length;i++){
        if(nums[i]!==nums[i-1]){
            nums[j]=nums[i];
            j++

        }
    }

    return j;
    
};

//LC-26 Remove Duplicates from Sorted Array