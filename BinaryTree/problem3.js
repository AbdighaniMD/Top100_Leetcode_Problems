/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * leetcode 104 Easy. Maximum Depth of Binary Tree
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    let maxDepth = 0;

    function helperDepth(node, currentDepth){
        if(!node){
            maxDepth = Math.max(currentDepth -1, maxDepth);
            return
        }

        helperDepth(node.left, currentDepth + 1)
        helperDepth(node.right, currentDepth + 1)
    }
    
    helperDepth(root, 1)
    return maxDepth
};