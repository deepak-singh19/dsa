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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    let queue= []
    let output=[]

    let temp=root

    if(!root) return []

    queue.push(root)

    while(queue.length){
        let row=[]
        let len=queue.length
        

        for(let i=0; i<len;i++){
            let currVal=queue.shift()
            
            if(currVal.left){
                queue.push(currVal.left)
            }
            if(currVal.right){
                queue.push(currVal.right)
            }

            row.push(currVal.val)

            
        }

        output.push(row)
        
    }

    return output
};

// //102. Binary Tree Level Order Traversal
// Solved
// Medium
// Topics
// Companies
// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).