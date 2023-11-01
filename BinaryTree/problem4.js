/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * leetcode 102 Medium. Binary Tree Level Order Traversal
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let queue = []
    let result = []
    let currentNode = root
    queue.push(currentNode)

    while(queue.length){
        currentNode = queue.shift()
        result.push(currentNode.value);

        if (currentNode.left) queue.push(currentNode.left)
        if (currentNode.right) queue.push(currentNode.right)
    }

    return result
};