//Smallest From the Leaf
//QUS URL- https://leetcode.com/problems/smallest-string-starting-from-leaf/?envType=daily-question&envId=2024-04-17

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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    if (!root) {
        return '';
    }
    
    let result = '{'; // Initialize result with a character greater than 'z'
    
    function dfs(node, path) {
        if (!node) {
            return;
        }
        
        path = String.fromCharCode(node.val + 97) + path; // Convert node value to corresponding letter
        
        if (!node.left && !node.right) {
            // If the current node is a leaf node, update the result if the current path is lexicographically smaller
            result = path < result ? path : result;
            return;
        }
        
        dfs(node.left, path); // Recursively traverse the left subtree
        dfs(node.right, path); // Recursively traverse the right subtree
    }
    
    dfs(root, '');
    
    return result;
    
};