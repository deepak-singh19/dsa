//88. Merge Sorted Array
//QUS URL- https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1; // Pointer for nums1
     let j = n - 1; // Pointer for nums2
     let k = m + n - 1; // Pointer for merged array (nums1)
 
     // Merge nums1 and nums2 from the end
     while (i >= 0 && j >= 0) {
         if (nums1[i] > nums2[j]) {
             nums1[k--] = nums1[i--];
         } else {
             nums1[k--] = nums2[j--];
         }
     }
 
     // If there are remaining elements in nums2, copy them to nums1
     while (j >= 0) {
         nums1[k--] = nums2[j--];
     }
 
     
 };