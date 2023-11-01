/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * leetcode 100. Same Tree
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    let sameTree = true;

    function checkSameNode(p, q){
        if(!p && !q) {
            return
        } else if(!p || !q) {
            sameTree = false
            return
        } else if(p.val !== q.val) {
            sameTree = false
            return
        }

        checkSameNode(p.left, q.left)
        checkSameNode(p.right, q.right)
    }

    checkSameNode(p, q)
    return sameTree
};