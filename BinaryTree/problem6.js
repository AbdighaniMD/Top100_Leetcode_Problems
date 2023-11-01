/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * leetcode 98 Medium. Validate Binary Search Tree
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let result = true;

    function helper(node, min, max){
        //base case
        if(!node) return

        if((min !== null && node.val <= min ) || 
            (max !== null && node.val >= max)){
            result = false
            return
        }

        helper(node.left, min, node.val)
        helper(node.right, node.val, max)
    }

    helper(root, null, null)

    return result;
};