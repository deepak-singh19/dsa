//SUM OF LEFT LEAVES
//https://leetcode.com/problems/sum-of-left-leaves/?envType=daily-question&envId=2024-04-14

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }
    
    let sum = 0;
    
    function dfs(node, isLeft) {
        if (!node) {
            return;
        }
        
        // If the current node is a leaf node and it's a left child, add its value to the sum
        if (!node.left && !node.right && isLeft) {
            sum += node.val;
        }
        
        // Recursively traverse the left and right subtrees
        dfs(node.left, true);
        dfs(node.right, false);
    }
    
    // Start the DFS traversal from the root node
    dfs(root, false);
    
    return sum;
    
};