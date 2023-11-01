/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * leetcode 235 med. Lowest Common Ancestor of a Binary Search Tree
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let pVal = p.val;
    let qVal = q.val;

    let currentNode = root;

    while(currentNode){
        let currentVal = currentNode.val

        if(currentVal < pVal && currentVal < qVal){
            currentNode = currentNode.right
        } else if(currentVal > pVal && currentVal > qVal){
            currentNode = currentNode.left
        } else{
            return currentNode
        }
    }
}