//623. Add One Row to Tree
//QUS URL- https://leetcode.com/problems/add-one-row-to-tree/description/?envType=daily-question&envId=2024-04-16

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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if (depth === 1) {
        const newRoot = new TreeNode(val);
        newRoot.left = root;
        return newRoot;
    }
    
    const queue = [{ node: root, level: 1 }];
    
    while (queue.length > 0) {
        const { node, level } = queue.shift();
        
        if (level === depth - 1) {
            const newLeft = new TreeNode(val);
            newLeft.left = node.left;
            node.left = newLeft;
            
            const newRight = new TreeNode(val);
            newRight.right = node.right;
            node.right = newRight;
        } else {
            if (node.left) {
                queue.push({ node: node.left, level: level + 1 });
            }
            if (node.right) {
                queue.push({ node: node.right, level: level + 1 });
            }
        }
    }
    
    return root;
    
};