//42. Trapping Rain Water
//QUS URL- https://leetcode.com/problems/trapping-rain-water/description/?envType=daily-question&envId=2024-04-12

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if (!height || height.length === 0) {
        return 0;
    }
    
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;
    
    while (left < right) {
        // Update the maximum height on the left side
        if (height[left] > leftMax) {
            leftMax = height[left];
        }
        
        // Update the maximum height on the right side
        if (height[right] > rightMax) {
            rightMax = height[right];
        }
        
        // Calculate the amount of water that can be trapped at the current position
        if (leftMax < rightMax) {
            waterTrapped += Math.max(0, leftMax - height[left]);
            left++;
        } else {
            waterTrapped += Math.max(0, rightMax - height[right]);
            right--;
        }
    }
    
    return waterTrapped;
    
};